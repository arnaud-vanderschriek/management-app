import React from "react";
import { connect } from "react-redux";
import { RootDispatch, RootState } from "../state/store";
import { UsersForecast } from './UsersForecast';
import  UsersInfo from './UsersInfo';
import { UsersSettings} from './UsersSettings';
import "./styles/users.css";
import { TimeSheetDataInterface, UserDataInterface, UserProjectInterface } from ".";
import { UserLoginInterface } from "../login";
import UsersTimeSheet2 from "./UsersTimeSheet2";

interface Props {
  isModalOpened: boolean,
  linkList: string,
  user: UserLoginInterface,
  usersData: UserDataInterface[],
  userProject: UserProjectInterface[],
  timeSheetDatas: TimeSheetDataInterface,
  postTimeSheetDatas: () => Promise<void>,
  fetchDataProject: (id: number) => Promise<void>,
  fetchDataUser: (id: {} ) => Promise<void>,
  setTimeSheetDatas: (obj: TimeSheetDataInterface) => void,
}

export class UsersPage extends React.Component<Props> {
  render() {
  console.log(this.props.linkList, 'linklist des users')

    if (this.props.linkList === 'timesheet') {
      return (
        <UsersTimeSheet2 
          setTimeSheetDatas={this.props.setTimeSheetDatas} 
          postTimeSheetDatas={this.props.postTimeSheetDatas} 
          userDataID={this.props.user}
          fetchDataProject={this.props.fetchDataProject}
          userProject={this.props.userProject}
          timeSheetDatas={this.props.timeSheetDatas}
          />
          
        )
        // <UsersTimeSheet isModalOpened={this.props.isModalOpened} linkList={this.props.linkList} />)

    }
    if (this.props.linkList === 'info') {
      return (
        <UsersInfo user={this.props.user} userData={this.props.usersData} fetchDataUser={this.props.fetchDataUser}
         
        />
      )
    }

    if (this.props.linkList === 'settings') {
      return (
        <UsersSettings />
      )
    }
    if (this.props.linkList === 'forecast') {
      return (
        <UsersForecast />
      )
    }

    return (
      <UsersInfo user={this.props.user} userData={this.props.usersData} fetchDataUser={this.props.fetchDataUser}/>
    )
  }
}

const mapState = (state: RootState) => ({
  // user: state.auth.user,
  // usersData: state.users.usersData,
})

const mapDispatch = (dispatch: RootDispatch) => ({
  
})

export default connect(mapState, mapDispatch)(UsersPage);
