import * as React from 'react';

// import interfaces
//import { IFile, IProfile, ISkill, IResponseItem } from "./interfaces";
import { Caching } from "@pnp/queryable";
import { getSP } from "../../pnpJsConfigX";
import { SPFI, spfi } from "@pnp/sp";
//import { Logger, LogLevel } from "@pnp/logging";
import '@microsoft/sp-core-library';
import '@pnp/sp/site-users'; 
import "@pnp/sp/profiles"
import styles from './UserProfileLink.module.scss';
import { IUserProfileLinkProps } from './IUserProfileLinkProps';
//import { escape } from '@microsoft/sp-lodash-subset';

export interface IPicUrl{
  Url: string;
  Description: string;
}

export interface IResponseItem {
  Id: number;
  Title: string;
  Email: string;
  pic: IPicUrl;
}

export interface IUserProfileLinkState{
  userUpn: string,
  userImageUrl: string
}

export default class UserProfileLink extends React.Component<IUserProfileLinkProps, IUserProfileLinkState> {
  
  private LIBRARY_NAME = "Exxeta Mitarbeiter";
  private _sp: SPFI;

  constructor(props: IUserProfileLinkProps) {
    super(props);
    // set initial state
    this.state = {
      userUpn: '',
      userImageUrl: '' 
    };
    this._sp = getSP();
  }

  public componentDidMount(): void {
    // read all file sizes from Documents library
    this._readUserInfo();
  }

  public render(): React.ReactElement<IUserProfileLinkProps> {
    const {
      //description,
      //isDarkTheme,
      //environmentMessage,
      hasTeamsContext
      //userDisplayName
    } = this.props;

    const userUpnPrefix = this.state.userUpn.substring(0, this.state.userUpn.lastIndexOf('@'))

    return (
      <section className={`${styles.userProfileLink} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          <a href={"https://3nergy.sharepoint.com/sites/LandingPage/_layouts/15/workbench.aspx?profile=" + userUpnPrefix} target="_blank">Edit my profile 2</a>
          <img className={styles.userProfileImage} src={this.state.userImageUrl} alt={this.state.userUpn}></img>
        </div>
      </section>
    );
  }

  private _readUserInfo = async (): Promise<void> => {
    try{
      const respProfile = await this._sp.web.currentUser(); //spCache.web.currentUser.get;
      const userUpn = respProfile.UserPrincipalName;
      console.log('User UPN is ' + userUpn)
      
      const spCache = spfi(this._sp).using(Caching({store:"session"}));

      const response: IResponseItem[] = await spCache.web.lists
        .getByTitle(this.LIBRARY_NAME)
        .items.select("Id", "Title", "pic")
        .filter("Title eq '" + userUpn + "'")();

      let userImageUrl
        if (response.length > 0){
        userImageUrl = response[0].pic.Url;
      }

      this.setState({ userUpn: userUpn, userImageUrl: userImageUrl });
    }
    catch(err){
      console.log('Reading User info exception: ' + err)
    }
  }
}
