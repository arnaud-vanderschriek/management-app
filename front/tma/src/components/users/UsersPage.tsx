import React from "react";
import { connect } from "react-redux";
import { RootState } from "../state/store";
import { UsersForecast } from './UsersForecast';
import { UsersInfo } from './UsersInfo';
import { UsersSettings} from './UsersSettings';
import "./styles/users.css";
import { UsersTimeSheet } from './UsersTimeSheet';

interface Props {
  isModalOpened: boolean,
  linkList: string,
  logout: () => Promise<void>,
}

export class UsersPage extends React.Component<Props> {
  render() {
   /* prevoir une boucle ou un map sur tableau pour affiner le code
   for(let i = 0; i < tab.lengt; i++ ) {

    } */
    if (this.props.linkList === 'timesheet') {
      return (
        <UsersTimeSheet isModalOpened={this.props.isModalOpened} linkList={this.props.linkList}
                        logout={this.props.logout} />)

    }
    if (this.props.linkList === 'info') {
      return (
        <UsersInfo />
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
      <UsersInfo />
    )
  }
}

const mapState = (state: RootState) => ({
  linkList: state.users.linkList
})

const mapDispatch = (dispatch: any) => ({
    logout: dispatch.auth.logout,
})

export default connect(mapState, mapDispatch)(UsersPage);
