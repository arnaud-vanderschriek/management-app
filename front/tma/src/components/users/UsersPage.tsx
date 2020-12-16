import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { RootDispatch } from "../state/store";
import { UsersPageElements } from "./UsersPageElements";
import "./styles/users.css";


interface Props {
    logout: () => Promise<void>
}

export class UsersPage extends React.Component<Props> {


  // WARNING , THIS IS HERE WE MUST TO PUT THE DATA CHECK

    //  handleClickLogout = () => {
    //      this.props.logout();
    //  }
    render() {
        return (
            <div id="container">
                <div id="test">
                    <a> visualisation</a>
                </div>
              <table className="companies-table">
                  <thead>
                      <tr className="title-table">
                          <th>Project</th>
                          <th>Task</th>
                          <th>Billable</th>
                          <th>Mon</th>
                          <th>Tue</th>
                          <th>Wed</th>
                          <th>Thu</th>
                          <th>Fri</th>
                          <th>Sat</th>
                          <th>Sun</th>
                          <th>Commentary</th>
                      </tr>
                  </thead>    
                  <tbody className="content-table companies-table">
                    <UsersPageElements />
                      {/* <CompaniesListElements
                      companies={this.state.filteredCompanies}
                      isCompanySelectable={this.props.isCompanySelectable}
                      selectedCompanyId={this.props.selectedCompanyId}
                      dropDown={this.props.dropDown} /> */}
                  </tbody>
              </table>
            </div>
        )
    }
}

const mapDispatch = (dispatch: any) => ({
    logout: dispatch.auth.logout
})

export default connect(mapDispatch)(UsersPage);