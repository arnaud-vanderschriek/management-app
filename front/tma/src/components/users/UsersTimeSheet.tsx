import React from 'react';
import { connect } from 'react-redux';
import { RootDispatch, RootState } from '../state/store';
import UsersPageElements from './UsersPageElements';
import UsersPagePopup from './UsersPagePopup';

interface Props {
  isModalOpened: boolean,
  linkList: string,
}

export class UsersTimeSheet extends React.Component<Props> {
  render() {
    return(
      <div id="user-page-display">
        <table className="companies-table">
          <thead>
          <tr className="title-table">
            <th className="project-select-input">Project</th>
            <th className="project-select-input">Task</th>
            <th className="project-select-input">Billable</th>
            <th className="project-select-input">Mon</th>
            <th className="project-select-input">Tue</th>
            <th className="project-select-input">Wed</th>
            <th className="project-select-input">Thu</th>
            <th className="project-select-input">Fri</th>
            <th className="project-select-input">Sat</th>
            <th className="project-select-input">Sun</th>
            <th className="project-select-input">Commentary</th>
            <th className="project-select-input">Send</th>
          </tr>
          </thead>
          <tbody className="content-table companies-table">
          <UsersPageElements isModalOpened={this.props.isModalOpened}/>
          </tbody>
        </table>
        <UsersPagePopup />
      </div>
    )
  }
}

const mapState = (state: RootState) => ({
  isModalOpened: state.users.isModalOpened,
})

const mapDispatch = (dispatch: RootDispatch) => ({

})

export default connect(mapState, mapDispatch)(UsersTimeSheet)
