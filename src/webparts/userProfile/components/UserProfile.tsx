import * as React from 'react';
import styles from './UserProfile.module.scss';
import { IUserProfileProps } from './IUserProfileProps';

// import interfaces
import { IFile, IProfile, ISkill, IResponseItem } from "./interfaces";

import { Caching } from "@pnp/queryable";
import { getSP } from "../pnpjsConfig";
import { SPFI, spfi } from "@pnp/sp";
import { Logger, LogLevel } from "@pnp/logging";
//import { FieldTextRenderer } from "@pnp/spfx-controls-react/lib/FieldTextRenderer";
//import { IItemUpdateResult } from "@pnp/sp/items";
import '@microsoft/sp-core-library';
import '@pnp/sp/site-users'; 
import "@pnp/sp/profiles"
//import { Field } from '@pnp/sp/fields/types';

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
  isMock: boolean;
  errors: string[];
}

export default class PnPjsExample extends React.Component<IUserProfileProps, IIPnPjsExampleState> {
  private LOG_SOURCE = "🅿PnPjsExample";
  private LIBRARY_NAME = "Bilder";
  private _sp: SPFI;
  //private newSkillName: string;

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
      isMock: true,
      errors: [],
    };
    this._sp = getSP();

    this.onNewSkillClick = this.onNewSkillClick.bind(this);
    this.skillChangeHandler = this.skillChangeHandler.bind(this);
  }

  public componentDidMount(): void {
    // read all file sizes from Documents library
    this._readAllFilesSize();
  }

  public render(): React.ReactElement<IAsyncAwaitPnPJsProps> {

    console.log('Profile skills: ')
    console.log(this.state.profile.Skills)

    //console.log('Items: ') 
    //console.log(this.state.items);

    // this.state.profile.Skills.push({
    //   Id: 'Python',
    //   Level: 'Novice'
    // })
    
    return (
      <div className={styles.userProfile}>
        
        <div>
          <h2>Profile</h2>
          <label>UPN</label>:<span>{this.state.userUpn}</span>
          <br />
          <label>Name</label>:<span>{this.state.profile.FirstName} {this.state.profile.LastName}</span>
          <br />
        </div>

        <div>
          <h2>Fahigkeiten</h2> 
          {
            this.state.profile.Skills.map((item, index) => {
              return(
                <p>{item.Id} : {item.Level}</p>
              )
            })
          }
        </div>

        <div>
          <label>Add a new Skill</label>:<input type="text" id="newSkillName" value={this.state.newSkillName} onChange={this.skillChangeHandler} ></input>
          {/* <FieldTextRenderer text={this.state.newSkillName} ></FieldTextRenderer> */}
          <button onClick={this.onNewSkillClick}>+ Add</button>
        </div>

        <div>
          <h2>All Skills</h2>
          {
            this.state.skills.map((item, index) => {
              return( 
                <p>{item.Id}</p>                
              )
            })
          }
        </div>
        
        {/* <br />
        <label>List of documents:</label>
        <table width="100%">
          <tr>
            <td><strong>Title</strong></td>
            <td><strong>Name</strong></td>
            <td><strong>Size (KB)</strong></td>
          </tr>
          {this.state.items.map((item, idx) => {
            return (
              <tr key={idx}>
                <td>{item.Title}</td>
                <td>{item.Name}</td>
                <td>{(item.Size / 1024).toFixed(2)}</td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td><strong>Total:</strong></td>
            <td><strong>{(totalDocs / 1024).toFixed(2)}</strong></td>
          </tr>
        </table> */}
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
      console.log('Current user: ' + respProfile.Email + ' - ' + respProfile.UserPrincipalName)

      const profileQsParam = this.getQueryStringParam('profile');
      console.log('Current User PN from Querystring: ' + profileQsParam);

      if(respProfile.UserPrincipalName == (profileQsParam + '@exxeta.com')){
        console.log('Success: this is the profile page of the current user')
      }
      else{
        console.log('Fail: this is NOT the profile page of the current user')
      }

      const profile = this.loadProfile(userUpn, this.state.isMock);
      const skills = this.loadAllSkills(this.state.isMock);

      

      console.log('Skills: ')
      console.log(skills)

      // use map to convert IResponseItem[] into our internal object IFile[]
      const items: IFile[] = response.map((item: IResponseItem) => {        
        return {
          Id: item.Id,
          Title: item.Title || "Unknown",
          Size: item.File?.Length || 0,
          Name: item.FileLeafRef
        };
      });

      //const client = new SPHttpClient()
      /*var url = "https://pyvuep8tnv.eu-central-1.awsapprunner.com/skill"
      this.context.SPHttpClient.get(url, {
        headers:{
          "Accept" : "application/json"
        }
      })
      .then((response))
      */

      /*const url = "https://prod-223.westeurope.logic.azure.com:443/workflows/9bf2ce74c8924ff2902ad9d13a48f309/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Drt1htXNP1pxhKEhXMehbNNrQcqKAva2d1dDKvUzItM"
      const url = "https://pyvuep8tnv.eu-central-1.awsapprunner.com/skill"

      let httpReq = new XMLHttpRequest();
      httpReq.open("GET", url, false);
      httpReq.send(null);
      console.log(httpReq.responseText);
      */
      /*fetch(url1, {
        headers:{
          //'Accept': 'application/json',
          //'Access-Control-Allow-Origin': 'https://3nergy.sharepoint.com/',
          //'Origin': 'https://3nergy.sharepoint.com/',
          'Access-Control-Request-Method': 'GET',
          //'Access-Control-Allow-Credentials': 'true'
        }
      })
        .then(response => response.text)
        .then(text => console.log(text)) 
        */

      

      // Add the items to the state
      this.setState({ items, userUpn, profile, skills });
    } catch (err) {
      console.log('User Profile Exception: ' + err);
      Logger.write(`${this.LOG_SOURCE} (_readAllFilesSize) - ${JSON.stringify(err)} - `, LogLevel.Error);
    }
  }

  private loadProfile(upn: string, mock: boolean): IProfile{
    let strProfile: string = "";

    if(this.state.isMock){
      strProfile = '{"upn":"adam.pavlik@exxeta.com","employee":{"firstName":"Adam","lastName":"Pavlik","managerUpn":null,"birthday":null},"tags":[],"skills":[{"skillId":"Java","type":"KNOWLEDGE","value":"advanced"}],"roles":[{"role":{"name":"Architect"},"primaryRole":true}],"employeeRelations":[{"targetUpn":"viktor.fres@exxeta.com","relationType":"teaches"}]}';
    }
    else{
      // TODO: load user profile from a web service
      strProfile = '{"upn":"thomas.pohl@exxeta.com","employee":{"firstName":"Thomas","lastName":"Pohl","managerUpn":null,"birthday":null},"tags":[],"skills":[{"skillId":"Java","type":"KNOWLEDGE","value":"advanced"}],"roles":[{"role":{"name":"Architect"},"primaryRole":true}],"employeeRelations":[{"targetUpn":"viktor.fres@exxeta.com","relationType":"teaches"}]}';
    }

    const profileJSON = JSON.parse(strProfile);

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

    return profile;
  }

  private loadAllSkills(mock: boolean): ISkill[]{
    var skills: ISkill[] = [];

    var strSkills = '';

    if(mock){
      strSkills = '[{"id":"1","name":"Java","tags":[{"type":"category","value":"programming language"}],"replacedBy":null},{"id":"2","name":"Python","tags":[{"type":"category","value":"programming language"}],"replacedBy":null},{"id":"3","name":"MS Word","tags":[{"type":"category","value":"standard software"}],"replacedBy":null},{"id":"4","name":"MS Excel","tags":[{"type":"category","value":"standard software"}],"replacedBy":null}]';
    }
    else{
      // TODO: load skills from a web service
    }

    const skillsJSON = JSON.parse(strSkills);

    skillsJSON.forEach(function(e:any){
      skills.push({
        Id: e.name,
        Level: ''
      });
    });

    return skills;

  }
  
  private onNewSkillClick(): void{
    //var newSkillName = document.getElementById('newSkillName');
    //var newSkillName = React.findDOMNode(this.refs.cpDev1).value
    //debugger;
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

  private skillChangeHandler(e:any): void{
    this.setState({newSkillName: e.target.value})
    console.log(e.target.value);
  }

  private getQueryStringParam(name: string): string{
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get(name)
    return myParam;
  }

}