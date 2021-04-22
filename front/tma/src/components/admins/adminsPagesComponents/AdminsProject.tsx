import React from 'react';
import { connect } from 'react-redux';
import { RootDispatch, RootState } from '../../state/store';
import AdminsProjectSelect from './AdminsProjectSelect';
import { DataProject, UserArray, UsersList } from '../index';

interface Props {
  userList: UsersList[],
  updateDataProject: (payload: DataProject) => void,
  addDataProject: (payload: DataProject ) => Promise<void>,
}

interface State {
  projectName: string,
  projectCode: string,
  month: string,
  startDate: string,
  endDate: string,
  hours: string,
  budget: string,
  usersOnProject: UserArray[],
}

export class AdminsProject extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      projectName: '',
      projectCode: '',
      month: '',
      startDate: '',
      endDate: '',
      hours: '',
      budget: '',
      usersOnProject: [],
    }
  }

  setDataProject = (field: 'projectName' | 'projectCode' | 'month' | 'startDate' | 'endDate' | 'hours' | 'budget', value: string) => {
    const state: State = {...this.state};
    state[field] = value;
    this.setState(state);
    console.log(state, 'state de setDataProject')
  }

  send = () => {
    this.props.updateDataProject(this.state);
    this.props.addDataProject(this.state);
  }

  defineUserOnProject = (value: any) => {
    console.log('value', value)
    this.state.usersOnProject.push(value)
    console.log(this.state.usersOnProject, 'UserArray')
    const state: State = {...this.state};
    state.usersOnProject = this.state.usersOnProject
    console.log(state, 'state de defineUserOnProject')
  }

  render() {
    return (
      <div id='admin-page-display'>
        <div id="admin-project-name">
          <label className="admin-project-label">Project name: </label>
          <input
            type="text"
            name="projectName"
            onChange={(e) => this.setDataProject('projectName', (e.target as HTMLInputElement).value)} />
          <label className="admin-project-label">Project code: </label>
          <input onChange={(e) => this.setDataProject('projectCode', (e.target as unknown as HTMLInputElement).value )}/>
          {/* <select onChange={(e) => this.setDataProject('projectCode', (e.target as unknown as HTMLInputElement).value )}>
            <AdminsProjectSelect tab={[
              {value: '-- options --'},
              {value: 'A1'},
              {value: 'M3'},
              {value: 'C5'},
              {value: 'B2'},
              {value: 'A'},
              {value: 'H'},
            ]} />
          </select> */}
          <label className="admin-project-label">month:</label>
          <input type="month" onChange={(e) =>
            this.setDataProject('month', (e.target as unknown as HTMLInputElement).value )}/>
          <label className="admin-project-label">start date:</label>
          <input type="date" id='' name="calendar" onChange={(e) =>
            this.setDataProject('startDate', (e.target as unknown as HTMLInputElement).value )}/>
          <label className="admin-project-label">end date:</label>
          <input type="date" onChange={(e) =>
            this.setDataProject('endDate', (e.target as unknown as HTMLInputElement).value )} />
          <label className="admin-project-label">Hours allowed</label>
          <input type='text' onChange={(e) => this.setDataProject('hours', (e.target as unknown as HTMLInputElement).value )} />
          <label className="admin-project-label">Budget allowed</label>  
          <input type='text' onChange={(e) => this.setDataProject('budget', (e.target as unknown as HTMLInputElement).value )} />
          <label>Users</label>
          <select onChange={(e) => this.defineUserOnProject((e.target as HTMLSelectElement).value)}>
            <option value='----'>----- select users</option>
            {this.props.userList.map((elem) => (
              <option value={elem.firstname} >
                {elem.firstname}
              </option>
            ))}
          </select>
          <label>Work Packages</label>
          <select>
            <option value='-----'>work packages</option>
            <option value='wp1'>wp1</option>
            <option value='wp2'>wp2</option>
            <option value='wp3'>wp3</option>
            <option value='wp4'>wp4</option>
            <option value='wp5'>wp5</option>
            <option value='wp6'>wp6</option>
            <option value='wp7'>wp7</option>
            <option value='wp8'>wp8</option>
            <option value='wp9'>wp9</option>
            <option value='wp10'>wp10</option>
            <option value='wp11'>wp11</option>
            <option value='wp12'>wp12</option>
            <option value='wp13'>wp13</option>
            <option value='wp14'>wp14</option>
            <option value='wp15'>wp15</option>
            <option value='wp16'>wp16</option>
            <option value='wp17'>wp17</option>
            <option value='wp18'>wp18</option>
            <option value='wp19'>wp19</option>
            <option value='wp20'>wp20</option>
          </select>
          <label>Financials Reporting month </label>
          <input type='month' />
          <button type="submit" onClick={this.send}>enregistrer</button>
          <label></label>
        </div>
      </div>
    )
  }
}

const mapState = (state: RootState) => ({
  token: state.auth.token,
  userList: state.admin.usersList,
})

const mapDispatch = (dispatch: RootDispatch) => ({
  updateDataProject: dispatch.admin.updateDataProject,
  addDataProject: dispatch.admin.addDataProject,
})

export default connect(mapState, mapDispatch)(AdminsProject)
