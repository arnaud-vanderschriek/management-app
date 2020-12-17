import React from "react";
import { connect } from "react-redux";
import { RootState } from "../state/store";
import UsersPageElements from "./UsersPageElements";
import UsersPagePopup from "./UsersPagePopup";
import "./styles/users.css";

interface Props {
    isModalOpened: boolean,
    logout: () => Promise<void>
}

export class UsersPage extends React.Component<Props> {
  render() {
    return (
      <div id="container">
        <div id="test">
            <p> visualisation</p>
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
            <UsersPageElements isModalOpened={this.props.isModalOpened}/>
              {/* <CompaniesListElements
              companies={this.state.filteredCompanies}
              isCompanySelectable={this.props.isCompanySelectable}
              selectedCompanyId={this.props.selectedCompanyId}
              dropDown={this.props.dropDown} /> */}
          </tbody>
        </table>
        <UsersPagePopup />
      </div>
    )
  }
}

const mapState = (state: RootState) => ({
})

const mapDispatch = (dispatch: any) => ({
    logout: dispatch.auth.logout,
})

export default connect(mapState, mapDispatch)(UsersPage);