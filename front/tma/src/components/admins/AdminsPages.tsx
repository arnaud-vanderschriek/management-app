import React from "react";
import { connect } from "react-redux";
import AdminsForecast from './AdminsForecast';
import { AdminsProject } from './AdminsProject';
import AdminsUsers from './AdminsUsers';
import AdminsUsersTimesheet from './AdminsUsersTimesheet';
import AdminsSettings from './AdminsSettings';
import './styles/admin.css';
import { RootDispatch, RootState } from '../state/store';
import { DataProject } from './index';

interface Props {
  linkList: string,
  updateDataProject: (payload: DataProject) => void,
  addDataProject: (payload: DataProject ) => Promise<void>,
}

export class AdminsPages extends React.Component<Props> {
  render() {
    if(this.props.linkList === 'user') {
      return <AdminsUsers />
    }

    if(this.props.linkList === 'timesheet') {
      return <AdminsUsersTimesheet />
    }

    if(this.props.linkList === 'forecast') {
      return <AdminsForecast />
    }

    if(this.props.linkList === 'project') {
      return <AdminsProject addDataProject={this.props.addDataProject} updateDataProject={this.props.updateDataProject} />
    }

    if(this.props.linkList === 'settings') {
      return <AdminsSettings />
    }

    return (
      <AdminsUsers />
    )
  }
}

const mapState = (state: RootState) => ({
  linkList: state.admin.linkList,
})

const mapDispatch = (dispatch: RootDispatch) => ({
  updateDataProject: dispatch.admin.updateDataProject,
  addDataProject: dispatch.admin.addDataProject,
})


export default connect(mapState, mapDispatch)(AdminsPages);
