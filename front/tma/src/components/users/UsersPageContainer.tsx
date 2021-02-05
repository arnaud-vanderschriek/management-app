import React from "react";
import { connect } from "react-redux";
import { RootState } from "../state/store";
import UsersNavigationMenu from "./UsersNavigationMenu";
import UsersPage  from "./UsersPage";

interface Props {
  isModalOpened: boolean,
  logout: () => Promise<void>,
}

export class UsersPageContainer extends React.Component<Props> {
  render() {
    return (
      <div id='user-page-container'>
      <UsersNavigationMenu />
      <UsersPage isModalOpened={this.props.isModalOpened} />
      </div>
    )
  }
}

const mapState = (state: RootState) => ({
  isModalOpened: state.users.isModalOpened,
})

const mapDispatch = (dispatch: any) => ({
  logout: dispatch.auth.logout,
})

export default connect(mapState, mapDispatch)(UsersPageContainer);
