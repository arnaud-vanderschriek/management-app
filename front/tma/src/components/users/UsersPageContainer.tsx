import React from "react";
import { connect } from "react-redux";
import { RootDispatch, RootState } from "../state/store";
import {UsersPage} from "./UsersPage";
import { UserLoginInterface } from '../login/index';
import { TimeSheetDataInterface, UserDataInterface } from "./index";

interface Props {
  fetchDataUser: (id: {} ) => Promise<void>,
  setTimeSheetDatas: (obj: TimeSheetDataInterface) => void,
  timeSheetDatas: TimeSheetDataInterface,
  isModalOpened: boolean,
  user: UserLoginInterface,
  usersData: UserDataInterface[],
  linkList: string,
}

export class UsersPageContainer extends React.Component<Props> {
  render() {
    console.log(this.props.user, 'list in userPAgeContainer')
    return (
      <div id='user-page-container'>
      {/* <UsersNavigationMenu /> */}
        <UsersPage 
          isModalOpened={this.props.isModalOpened} 
          user={this.props.user} 
          usersData={this.props.usersData}
          linkList={this.props.linkList} 
          fetchDataUser={this.props.fetchDataUser}
          setTimeSheetDatas={this.props.setTimeSheetDatas}
          timeSheetDatas={this.props.timeSheetDatas}
          />
      </div>
    )
  }
}

const mapState = (state: RootState) => ({
  isModalOpened: state.users.isModalOpened,
  user: state.auth.user,
  usersData: state.users.usersData,
  linkList: state.users.linkList, 
  timeSheetDatas: state.users.timeSheetDatas, 
})

const mapDispatch = (dispatch: RootDispatch) => ({
  fetchDataUser: dispatch.users.fetchDataUser,
  setTimeSheetDatas: dispatch.users.setTimeSheetDatas,
})

export default connect(mapState, mapDispatch)(UsersPageContainer);
