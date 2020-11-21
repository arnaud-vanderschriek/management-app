import React from "react";
import './styles/dashboard.css'

export class Dashboard extends React.Component {
    render() {
        return (
            <div id="dashboard">
                <h1>DashBoard</h1>
                {this.props.children}
            </div>
        );
    }
}