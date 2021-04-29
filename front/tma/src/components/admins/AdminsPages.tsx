import React from "react";
import { connect } from "react-redux";
import { RootDispatch, RootState } from '../state/store';
import { DataProject, UsersList } from './index';
import AdminsForecast from './adminsPagesComponents/AdminsForecast';
import AdminsUsers from './adminsPagesComponents/AdminsUsers';
import AdminsUsersTimesheet from './adminsPagesComponents/AdminsUsersTimesheet';
import AdminsSettings from './adminsPagesComponents/AdminsSettings';
import { AdminsAddUsers2 } from "./adminsPagesComponents/AdminsAddUsers2";
import AdminsProject2 from "./adminsPagesComponents/AdminsProject2";
import './styles/admin.css';

interface Props {
  linkList: string,
  usersList: UsersList[],
  dataProject: DataProject,
  isModalOpened: boolean,
  updateDataProject: (payload: DataProject) => void,
  addDataProject: (payload: DataProject ) => Promise<void>,
  setIsModalOpened: (isModalOpened: boolean) => void,
}

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
      return <AdminsProject2 
        addDataProject={this.props.addDataProject} 
        updateDataProject={this.props.updateDataProject} 
        userList={this.props.usersList} 
        setIsModalOpened={this.props.setIsModalOpened} 
        isModalOpened={this.props.isModalOpened} 
        dataProject={this.props.dataProject} />
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
  usersList: state.admin.usersList,
  isModalOpened: state.users.isModalOpened,
  dataProject: state.admin.dataProject,
})

const mapDispatch = (dispatch: RootDispatch) => ({
  updateDataProject: dispatch.admin.updateDataProject,
  addDataProject: dispatch.admin.addDataProject,
  setIsModalOpened: dispatch.users.setIsModalOpened
})


export default connect(mapState, mapDispatch)(AdminsPages);
