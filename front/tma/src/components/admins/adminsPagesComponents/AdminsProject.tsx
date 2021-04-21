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
          <select onChange={(e) => this.setDataProject('projectCode', (e.target as unknown as HTMLInputElement).value )}>
            <AdminsProjectSelect tab={[
              {value: '-- options --'},
              {value: 'A1'},
              {value: 'M3'},
              {value: 'C5'},
              {value: 'B2'},
              {value: 'A'},
              {value: 'H'},
            ]} />
          </select>
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
            {/* <option value='WonderWoman'>WonderWoman</option>
            <option value='merlin'>Merlin</option>
            <option value='arno2'>Arno2</option>
            <option value='azaeazeaz'>azaeazeaz</option> */}
          </select>
          <button type="submit" onClick={this.send}>enregistrer</button>
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
