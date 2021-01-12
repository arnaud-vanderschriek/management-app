import React from "react";
import { connect } from "react-redux";
import { DataProject } from ".";
import { RootState } from "../state/store";
import AdminPageSelect from './AdminPageSelect';
import './styles/admin.css';

interface Props {
  updateDataProject: (payload: DataProject) => void,
  addDataProject: (payload: DataProject ) => Promise<void>,
}

interface State {
  projectName: string,
  projectCode: string,
  month: string,
  startDate: string,
  endDate: string,
}

export class Admin extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      projectName: '',
      projectCode: '',
      month: '',
      startDate: '',
      endDate: '',
    }
  }

  setDataProject = (field: 'projectName' | 'projectCode' | 'month' | 'startDate' | 'endDate', value: string) => {
    const state: State = {...this.state};
    state[field] = value;
    this.setState(state);
    console.log(state);
  }

  send = () => {
    this.props.updateDataProject(this.state);
    this.props.addDataProject(this.state);
  }

  render() {
    console.log(this.state,"ezrerezrez")
    return (
      <div id="admin-project">
        <div id="admin-project-name">
          <label className="admin-project-label">Project name: </label>
          <input 
            type="text" 
            name="projectName" 
            onChange={(e) => this.setDataProject('projectName', (e.target as HTMLInputElement).value)} />
          <label className="admin-project-label">Project code: </label>
          <select onChange={(e) => this.setDataProject('projectCode', (e.target as unknown as HTMLInputElement).value )}>
            <AdminPageSelect tab={[
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
          <input type="month" onChange={(e) => this.setDataProject('month', (e.target as unknown as HTMLInputElement).value )}/>
          <label className="admin-project-label">start date:</label>
          <input type="date" id='' name="calendar" onChange={(e) => this.setDataProject('startDate', (e.target as unknown as HTMLInputElement).value )}/>
          <label className="admin-project-label">end date:</label>
          <input type="date" onChange={(e) => this.setDataProject('endDate', (e.target as unknown as HTMLInputElement).value )} />
          <button type="submit" onClick={this.send}>enregistrer</button>
        </div>
        {/* <div id="admin-project-dates">
         
        </div> */}
        <div>
        </div>
      </div>
    )
  }
}

const mapState = (state: RootState) => ({
    token: state.auth.token
})

const mapDispatch = (dispatch: any) => ({
  updateDataProject: dispatch.admin.updateDataProject,
  addDataProject: dispatch.admin.addDataProject,
})

export default connect(mapState, mapDispatch)(Admin);