import * as React from 'react';
import styles from './UserProfile.module.scss';
import { IUserProfileProps } from './IUserProfileProps';

// import interfaces
import { IFile, IProfile, ISkill, IResponseItem } from "./interfaces";
import { Caching } from "@pnp/queryable";
import { getSP } from "../../pnpJsConfigX";
import { SPFI, spfi } from "@pnp/sp";
import { Logger, LogLevel } from "@pnp/logging";
import '@microsoft/sp-core-library';
import '@pnp/sp/site-users'; 
import "@pnp/sp/profiles"

export interface IAsyncAwaitPnPJsProps {
  description: string;
}

export interface IIPnPjsExampleState {
  items: IFile[];
  userUpn: string;
  profile: IProfile,
  skills: ISkill[],
  isOwnProfile: boolean;
  newSkillName: string;
  errors: string[];
}

export default class PnPjsExample extends React.Component<IUserProfileProps, IIPnPjsExampleState> {
  private LOG_SOURCE = "🅿PnPjsExample";
  private LIBRARY_NAME = "Bilder";
  private _sp: SPFI;

  constructor(props: IUserProfileProps) {
    super(props);
    // set initial state
    this.state = {
      items: [],
      userUpn: "",
      profile: {
        Upn: '',
        FirstName: '',
        LastName: '',
        Skills: []
      },
      skills: [],      
      isOwnProfile: false,
      newSkillName: '',
      errors: [],
    };
    this._sp = getSP();

    this.onNewSkillClick = this.onNewSkillClick.bind(this);
    this.btnSaveClicked = this.btnSaveClicked.bind(this);
    this.btnRemoveSkillClicked = this.btnRemoveSkillClicked.bind(this);
    
    this.onSkillChange = this.onSkillChange.bind(this);
  }

  public componentDidMount(): void {
    // read all file sizes from Documents library
    this._readAllFilesSize();
  }

  public render(): React.ReactElement<IAsyncAwaitPnPJsProps> {

    


    return (
      <div className={styles.userProfile}>
        
        <div>
          <h2>Profile</h2>
          <label>UPN</label>:<span>{this.state.userUpn}</span>
          <br />
          <label>Hello </label>:<span>{this.state.profile.FirstName} {this.state.profile.LastName}</span>
          <br />
        </div>

        <div>
          <h2>Fahigkeiten</h2>          
          {
            this.state.profile.Skills.map((item, index) => {
              return(
                <div>
                  <label>{item.Id} : {item.Level}</label>
                  {
                    this.state.isOwnProfile && ( <button type="button" value={item.Id} onClick={this.btnRemoveSkillClicked}>- Remove</button>)
                  }
                </div>
              )
            })
          }
        </div>
          {
            this.state.isOwnProfile && (
              <div>
                <select value={this.state.newSkillName} onChange={this.onSkillChange}>
                  <option value=""></option>
                {
                  this.state.skills.map((item, index) => {
                    if ( !(this.state.profile.Skills.find(skill => skill.Id == item.Id))){
                      return( 
                        <option value={item.Id}>{item.Id}</option>
                        )
                      }
                    })
                  }                
                </select>
                {
                  this.state.newSkillName && (<button onClick={this.onNewSkillClick}>+ Add</button>)
                }
              </div>
            )
          }
        {
          this.state.isOwnProfile && (
            <div>
              <button type="button" onClick={this.btnSaveClicked} >Save Profile</button>
            </div>
          )
        }        
      </div >
    );
  }

  private _readAllFilesSize = async (): Promise<void> => {
    try {
      // do PnP JS query, some notes:
      //   - .expand() method will retrive Item.File item but only Length property
      //   - .get() always returns a promise
      //   - await resolves promises making your code act synchronous, ergo Promise<IResponseItem[]> becomes IResponse[]

      //Extending our sp object to include caching behavior, this modification will add caching to the sp object itself
      //this._sp.using(Caching({store:"session"}));

      //Creating a new sp object to include caching behavior. This way our original object is unchanged.
      const spCache = spfi(this._sp).using(Caching({store:"session"}));

      const response: IResponseItem[] = await spCache.web.lists
        .getByTitle(this.LIBRARY_NAME)
        .items
        .select("Id", "Title", "FileLeafRef", "File/Length")
        .expand("File/Length")();

      const respProfile = await this._sp.web.currentUser(); //spCache.web.currentUser.get;
      const userUpn = respProfile.UserPrincipalName;
      const profileQsParam = this.getQueryStringParam('profile');
      
      const isOwnProfile = (respProfile.UserPrincipalName == (profileQsParam + '@exxeta.com')) ? true : false ;
      if(isOwnProfile){
        console.log('Success: this is the profile page of the current user')
      }
      else{
        console.log('Fail: this is NOT the profile page of the current user')
      }

      const profile = await this.loadProfile(userUpn);
      console.log('Profile : ');
      console.log(profile);
      
      const skills = await this.loadAllSkills();
      console.log('skills : ');
      console.log(skills);


      // use map to convert IResponseItem[] into our internal object IFile[]
      const items: IFile[] = response.map((item: IResponseItem) => {        
        return {
          Id: item.Id,
          Title: item.Title || "Unknown",
          Size: item.File?.Length || 0,
          Name: item.FileLeafRef
        };
      });

      // Add the items to the state
      this.setState({ 
        items: items, 
        userUpn: userUpn, 
        profile: profile, 
        skills: skills,
        isOwnProfile: isOwnProfile });
    } catch (err) {
      console.log('User Profile Exception: ' + err);
      Logger.write(`${this.LOG_SOURCE} (_readAllFilesSize) - ${JSON.stringify(err)} - `, LogLevel.Error);
    }
  }

  private loadProfile = async (upn: string): Promise<IProfile> => {

    const url = "https://frhbvmm4yk.eu-central-1.awsapprunner.com/profile/" + upn

    try{

      const response: Response = await fetch(url, {
        headers:{
          'Accept': 'application/json',
          'Origin': 'https://3nergy.sharepoint.com/',
          'Access-Control-Request-Method': 'GET',
        }
      })
      
          const profileJSON = await response.json();
          var profileSkills: ISkill[] = [];
      
          if(profileJSON.skills.length > 0){
            profileJSON.skills.forEach(
              function(e:any, i:number){
                //console.log(i + ' - ' + e.skillId + ' ' + e.value);
                profileSkills.push({
                  Id: e.skillId,
                  Level: e.value
                })
              })
          }
          
          var profile: IProfile ={
            Upn: profileJSON.upn,
            FirstName: profileJSON.employee.firstName,
            LastName: profileJSON.employee.lastName,
            Skills: profileSkills
          }
      
          return new Promise<IProfile>(resolve => resolve(profile));
    }
    catch(err){
      var profile: IProfile ={
        Upn: upn,
        FirstName: '',
        LastName: '',
        Skills: []
      }
      return new Promise<IProfile>(resolve => resolve(profile));
    }

  }

  private loadAllSkills = async(): Promise<ISkill[]> => {
    var skills: ISkill[] = [];

    const url = 'https://pyvuep8tnv.eu-central-1.awsapprunner.com/skill'

    const response: Response = await fetch(url, {
      headers:{
        'Accept': 'application/json',
        'Origin': 'https://3nergy.sharepoint.com/',
        'Access-Control-Request-Method': 'GET',
      }
    })
    
    const skillsJSON = await response.json();

    skillsJSON.forEach(function(e:any){
      skills.push({
        Id: e.name,
        Level: ''
      });
    });

    return new Promise(resolve => resolve(skills));
  }

  private onSkillChange = (e:any): void => {
    const skillId = e.target.value;
    console.log('Skill chosen: ' + skillId);

    this.setState({newSkillName: skillId})
  }
  
  private onNewSkillClick(): void{
    console.log('Addingnew skill  ' + this.state.newSkillName + ' to profile');

    this.state.profile.Skills.push({
      Id: this.state.newSkillName,
      Level: 'Novice'
    });

    this.setState({profile: {
        Upn: this.state.profile.Upn,
        FirstName: this.state.profile.FirstName,
        LastName: this.state.profile.LastName,
        Skills: this.state.profile.Skills
    }})
  }

  private btnSaveClicked(e:any): void{
    console.log('Saving the profile: ')
    console.log('   - Name: ' + this.state.profile.FirstName + this.state.profile.LastName);
    console.log('   - UPN: ' + this.state.profile.Upn)

    const url:string = 'https://frhbvmm4yk.eu-central-1.awsapprunner.com/profile/' + this.state.profile.Upn;

    const jsonData = {
      "upn": this.state.profile.Upn,//"adam.pavlik@exxeta.com",
      "employee": {
        "firstName": this.state.profile.FirstName,
        "lastName": this.state.profile.LastName,
        "managerUpn": '',
        "birthday": ''
      },
      //"tags": [],
      "skills": 
        this.state.profile.Skills.map(function(item){
          return {
            "skillId": item.Id,
            "type": "KNOWLEDGE",
            "value": "advanced"
          }
        }),

      // "roles": [
      //   {
      //     "role": {
      //       "name": "Architect"
      //     },
      //     "primaryRole": true
      //   }
      // ],
      // "employeeRelations": [
      //   {
      //     "targetUpn": "viktor.fres@exxeta.com",
      //     "relationType": "teaches"
      //   }
      // ]
    }

    try{
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(jsonData)
      })
      .then(data => console.log(data));
    }
    catch(err){
      console.log('User profile save error: ' + err);
    }

  }

  private btnRemoveSkillClicked(e:any): void{
    const skillId = e.target.value;
    console.log('Deleting the skill: ' + skillId);

    this.state.profile.Skills = this.state.profile.Skills.filter(function(item){
      return item.Id != skillId;
    });

    this.setState({profile: {
      Upn: this.state.profile.Upn,
      FirstName: this.state.profile.FirstName,
      LastName: this.state.profile.LastName,
      Skills: this.state.profile.Skills
  }})
  }
  
  private getQueryStringParam(name: string): string{
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get(name)
    return myParam;
  }

}