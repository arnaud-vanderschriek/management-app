import React from "react";
import { connect } from "react-redux";
import { RootState } from "../state/store";

// interface Props {
//     token: string | null,
//     logout: () => Promise<void>
//     verifyToken: (token: string | null) => Promise<void>
// }

interface State {
    image: []
}

export class Admin extends React.Component<State> {
    constructor(state: State) {
        super(state);

        this.state = {
            image: [],
        }
    }
    test = (name: any) => {
        // this.setState({
        //     image: name,
        // })
    }

    render() {
        return (
            <div>
                <h2>Affichage des Admins</h2>
                <label htmlFor="avatar">Importer le fichier excell:</label>
                <input type="file"
                    id="avatar" name="avatar"
                    accept="image/png, image/jpeg"></input>
                <div>
                    <p>Ficher excel:</p>
                    <table>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Age</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    </table>
                </div>
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