import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { RootDispatch } from "../state/store";

interface Props {
    logout: () => Promise<void>
}

export class Users extends React.Component<Props> {

    //  handleClickLogout = () => {
    //      this.props.logout();
    //  }
    render() {
        return (
            <div>
                <h2>Affichage des Utilisateurs</h2>
                <button type='button' onClick={() => this.props.logout()}>exit</button>
            </div>
        )
    }
}

const mapDispatch = (dispatch: any) => ({
    logout: dispatch.auth.logout
})

export default connect(mapDispatch)(Users);