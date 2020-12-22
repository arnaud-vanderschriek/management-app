import React from "react";
import './styles/admin.css';

interface Props {

}

interface State {
  projectName: string,
  projectCode: string,
  startDate: string,
  endDate: string,
}

export class Admin extends React.Component<Props, State> {
constructor(props: Props) {
  super(props);

  this.state = {
    projectName: '',
    projectCode: '',
    startDate: '',
    endDate: '',
  }
}
  setDataProject = (field: 'projectName' | 'projectCode' | 'startDate' | 'endDate', value: string) => {
    const state: State = {...this.state};
    state[field] = value;
    this.setState(state);
    console.log(state);
  }

  render() {
    return (
      <div id="admin-project">
        <div id="admin-project-name">
          <label className="admin-project-label">Project name: </label>
          <input type="text" name="projectName" onChange={(e) => this.setDataProject('projectName', (e.target as HTMLInputElement).value)} />
          <label className="admin-project-label">Project code: </label>
          <select onChange={(e) => this.setDataProject('projectCode', (e.target as unknown as HTMLInputElement).value )}>
            <option value="A1">A1</option>
            <option value="M3">M3</option>
            <option value="C5">C5</option>
            <option value="B2">B2</option>
            <option value="A">A</option>
            <option value="H">H</option>
          </select>
        </div>
        <div id="admin-project-dates">
          <label className="admin-project-label">start date</label>
          <input type="date" id='' name="calendar" onChange={(e) => this.setDataProject('startDate', (e.target as unknown as HTMLInputElement).value )}/>
          <label className="admin-project-label">end date</label>
          <input type="date" onChange={(e) => this.setDataProject('endDate', (e.target as unknown as HTMLInputElement).value )} />
        </div>
        <div>
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