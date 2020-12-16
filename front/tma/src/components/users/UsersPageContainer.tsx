import React from "react";
import { connect } from "react-redux";
import UsersPage  from "./UsersPage";

export class UsersPageContainer extends React.Component {

    render() {
        return (
          <UsersPage />
        )
    }
}

export default connect()(UsersPageContainer);