import React from "react";
import { connect } from "react-redux";
import { RootState } from "../state/store";

// interface Props {
//     token: string | null,
//     logout: () => Promise<void>
//     verifyToken: (token: string | null) => Promise<void>
// }

export class Admin extends React.Component {
    render() {
        return (
            <div>
                <h2>Affichage des Admins</h2>
            </div>
        )
    }
}
// const mapState = (state: RootState) => ({
//     token: state.auth.token
// })

// const mapDispatch = (dispatch: any) => ({
//     logout: dispatch.auth.logout,
//     verifyToken: dispatch.auth.verifyToken,
// })

export default Admin;