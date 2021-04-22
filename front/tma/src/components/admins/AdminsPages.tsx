import React from "react";
import { connect } from "react-redux";
import { RootDispatch, RootState } from '../state/store';
import { DataProject, UsersList } from './index';
import AdminsForecast from './adminsPagesComponents/AdminsForecast';
import { AdminsProject } from './adminsPagesComponents/AdminsProject';
import AdminsUsers from './adminsPagesComponents/AdminsUsers';
import AdminsUsersTimesheet from './adminsPagesComponents/AdminsUsersTimesheet';
import AdminsSettings from './adminsPagesComponents/AdminsSettings';
import AdminModifyUsers from './adminsPagesComponents/AdminModifyUsers';
import './styles/admin.css';
import { AdminsAddUsers2 } from "./adminsPagesComponents/AdminsAddUsers2";
import AdminsProject2 from "./adminsPagesComponents/AdminsProject2";

interface Props {
  linkList: string,
  usersList: UsersList[],
  updateDataProject: (payload: DataProject) => void,
  addDataProject: (payload: DataProject ) => Promise<void>,
}

// export function AdminsPages(props: Props) {
//   console.log(props.linkList, 'linklisté"&é"')

//   if(props.linkList === 'user') {
//     return <AdminsUsers usersList={props.usersList} />
//   }
    
//   if(props.linkList === 'modify') {
//     return <AdminModifyUsers />
//   }

//   if(props.linkList === 'timesheet') {
//     return <AdminsUsersTimesheet />
//   }

//   if(props.linkList === 'forecast') {
//     return <AdminsForecast />
//   }

//   if(props.linkList === 'project') {
//     return <AdminsProject addDataProject={props.addDataProject} updateDataProject={props.updateDataProject} />
//   }

//   if(props.linkList === 'settings') {
//     return <AdminsSettings />
//   }

//   return (
//     <AdminsUsers usersList={props.usersList}/>
//   )
// }


export class AdminsPages extends React.Component<Props> {
  render() {
    if(this.props.linkList === 'user') {
      return <AdminsUsers usersList={this.props.usersList} />
    }

    if(this.props.linkList === 'modify') {
      return <AdminsAddUsers2 />
    }

    if(this.props.linkList === 'timesheet') {
      return <AdminsUsersTimesheet />
    }

    if(this.props.linkList === 'forecast') {
      return <AdminsForecast />
    }

    if(this.props.linkList === 'project') {
      return <AdminsProject2 />
      // return <AdminsProject addDataProject={this.props.addDataProject} updateDataProject={this.props.updateDataProject} userList={this.props.usersList}/>
    }

    if(this.props.linkList === 'settings') {
      return <AdminsSettings />
    }

    return (
      <AdminsUsers usersList={this.props.usersList}/>
    )
  }
}

const mapState = (state: RootState) => ({
  linkList: state.users.linkList,
  usersList: state.admin.usersList
})

const mapDispatch = (dispatch: RootDispatch) => ({
  updateDataProject: dispatch.admin.updateDataProject,
  addDataProject: dispatch.admin.addDataProject,
})


export default connect(mapState, mapDispatch)(AdminsPages);
