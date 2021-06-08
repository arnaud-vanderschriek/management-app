import React from 'react';
import { connect } from 'react-redux';
import { RootDispatch, RootState } from '../../state/store';
import FormGroup from '@material-ui/core/FormGroup';
import { DataProject, UsersList, WorkPackages } from '../index';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, FormHelperText, Container, TextField, Input, Select, MenuItem, Button, FormControlLabel, Checkbox, FormLabel } from "@material-ui/core";
import AdminsProjectModals from './AdminsProjectModals';

interface Props {
  userList: UsersList[],
  isModalOpened: boolean,
  updateDataProject: (payload: DataProject) => void,
  addDataProject: (payload: DataProject ) => Promise<void>,
  setIsModalOpened: (isModalOpened: boolean) => void,
}

interface State {
  projectName: string,
  projectCode: string,
  month: string,
  startDate: string,
  endDate: string,
  hours: string,
  budget: string,
  usersOnProject: string[],
  workPackagesOnProject: WorkPackages[],
  reportingMonth: string,
  reportingBudget: string,
  directsCosts: string,
  indirectsCosts: string,
}

const useStyles = makeStyles(theme => ({
  formBox: {
    border: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 50,
    width: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  label: {
    marginLeft: 20,
    marginBottom: 10,
  }
}));

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
      workPackagesOnProject: [],
      reportingMonth: '',
      reportingBudget: '',
      directsCosts: '',
      indirectsCosts: '',    
    }
  }

  componentDidUpdate = (prevProps: any, prevState: any) => {

    console.log(prevState, 'prevState')

    // if(prevState !== this.state) {
    //   this.setState({usersOnProject: prevState.usersOnProject})
    // }
  }

  setDataProject = (field: 'projectName' | 'projectCode' | 'month' | 'startDate' | 'endDate' | 'hours' | 'budget' | 'reportingMonth' | 'reportingBudget' | 'directsCosts' | 'indirectsCosts', value: string) => {
    const state: State = {...this.state};
    state[field] = value;
    this.setState(state);
    console.log(state, 'state de setDataProject')
  }

  showInfos = () => {
    this.props.setIsModalOpened(true)
  }

  send = () => {
    // this.props.updateDataProject(this.state);
    // this.props.addDataProject(this.state);
    // this.state = this.state;
  }

  defineUserOnProject = ( e: React.ChangeEvent<HTMLInputElement> , value: any) => {
   
    console.log('e :', e.target.checked)
    console.log('value', value)
    if(e.target.checked) {
      this.setState({
        usersOnProject: this.state.usersOnProject.concat([value])
      }) 
    } else {
      //remove from array
      this.setState({
        usersOnProject: this.state.usersOnProject.filter(function(val) {return val!==value})
      })
   }
    // this.state.usersOnProject.push(value)
    // const state: State = {...this.state};
    // state.usersOnProject = this.state.usersOnProject
    // console.log(state, 'state de defineUserOnProject')
    console.log(this.state.usersOnProject, 'UserArray')
    e.preventDefault();
  }

  defineWpOnProject = (value: any) => {
    this.state.workPackagesOnProject.push(value)
    const state: State = {...this.state};
    state.workPackagesOnProject = this.state.workPackagesOnProject
  }

  render() {
    return (
      <Container>
      {/* <div>
        <div className='formControlBoxes'> 
          <FormControl>
            <InputLabel htmlFor="my-input" className='adminProjectlabel'>Project Name</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text"  onChange={(e) => this.setDataProject('projectName', (e.target as HTMLInputElement).value)}/>
            <FormHelperText id="my-helper-text">enter the project name.</FormHelperText>
          </FormControl>
          <FormControl className='formControl'>
            <InputLabel htmlFor="my-input">Project Code</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => this.setDataProject('projectCode', (e.target as unknown as HTMLInputElement).value )}/>
            <FormHelperText id="my-helper-text">enter the project codes.</FormHelperText>
          </FormControl>
        </div>
        <div className='formControlBoxes'>
          <FormControl >
            <TextField
              id="datetime-local"
              label="start date"
              type="date"
              defaultValue=""
              // className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => this.setDataProject('startDate', (e.target as unknown as HTMLInputElement).value )}
          
            />
            <FormHelperText id="my-helper-text">project start date.</FormHelperText>

          </FormControl>
          <FormControl className='formControl' >
          <TextField
            id="datetime-local"
            label="end date"
            type="date"
            defaultValue=""
            // className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => this.setDataProject('endDate', (e.target as unknown as HTMLInputElement).value )}
          />
            <FormHelperText id="my-helper-text">project end date.</FormHelperText>

          </FormControl>
        </div>
        <div className='formControlBoxes' >
        <FormControl >
          <InputLabel htmlFor="my-input">Allocated hours</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => this.setDataProject('hours', (e.target as unknown as HTMLInputElement).value )}/>
          <FormHelperText id="my-helper-text">enter the allocated hours.</FormHelperText>
        </FormControl>

        <FormControl className='formControl' >
          <InputLabel htmlFor="my-input">Allocated Budget</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => this.setDataProject('budget', (e.target as unknown as HTMLInputElement).value )}/>
          <FormHelperText id="my-helper-text">enter the allocated budget.</FormHelperText>
        </FormControl>

        <FormControl >
        <InputLabel id="demo-simple-select-label">Participant users</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
  
        >

        <FormControl component="fieldset">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          {this.props.userList.map((elem) => 
          // <div>
          // <input 
          //  key={elem.firstname}
          //  type='checkbox' value={elem.firstname} onChange={(e) =>this.defineUserOnProject(e, elem.firstname)} />
          // <label>{elem.firstname}</label>
          // </div>
     
            <FormControlLabel
            control={
            <Checkbox 
    
            checked={elem.checked} 
            onChange={(e) => this.defineUserOnProject(e, elem.firstname)} 
            name={elem.firstname} 
            value={elem.firstname}
            defaultChecked={elem.checked ? true : false}
            />}
            label={elem.firstname}
          />
          )}
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
        </FormControl>
        </Select>
        <FormHelperText id="my-helper-text">enter the participant users.</FormHelperText>
      </FormControl>
      <FormControl className='formControl' >
        <InputLabel id="demo-simple-select-label">Work packages</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(e) => this.defineWpOnProject((e.target as HTMLSelectElement).value)}
        >
          <MenuItem value={'wp1'}>wp1</MenuItem>
          <MenuItem value={'wp2'}>wp2</MenuItem>
          <MenuItem value={'wp3'}>wp3</MenuItem>
          <MenuItem value={'wp4'}>wp4</MenuItem>
          <MenuItem value={'wp5'}>wp5</MenuItem>
          <MenuItem value={'wp6'}>wp6</MenuItem> 
          <MenuItem value={'wp7'}>wp7</MenuItem>
          <MenuItem value={'wp8'}>wp8</MenuItem> 
          <MenuItem value={'wp9'}>wp9</MenuItem>
          <MenuItem value={'wp10'}>wp10</MenuItem> 
          <MenuItem value={'wp11'}>wp11</MenuItem>
          <MenuItem value={'wp12'}>wp12</MenuItem> 
          <MenuItem value={'wp13'}>wp13</MenuItem>
          <MenuItem value={'wp14'}>wp14</MenuItem> 
          <MenuItem value={'wp15'}>wp15</MenuItem>
          <MenuItem value={'wp16'}>wp16</MenuItem> 
          <MenuItem value={'wp17'}>wp17</MenuItem>
          <MenuItem value={'wp18'}>wp18</MenuItem> 
          <MenuItem value={'wp19'}>wp19</MenuItem>
          <MenuItem value={'wp20'}>wp20</MenuItem>
        </Select>
        <FormHelperText id="my-helper-text">Allocated work packages.</FormHelperText>
      </FormControl>
       </div>
      <div className='formControlBoxes' >
      <FormControl >
          <InputLabel htmlFor="my-input">Financials reporting month</InputLabel>
          <Input type='month' id="my-input" aria-describedby="my-helper-text" onChange={(e) => this.setDataProject('reportingMonth', (e.target as unknown as HTMLInputElement).value )}/>
          <FormHelperText id="my-helper-text"></FormHelperText>
        </FormControl>
        <FormControl className='formControl' >
          <InputLabel htmlFor="my-input">Financials reporting budget</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text"  onChange={(e) => this.setDataProject('reportingBudget', (e.target as unknown as HTMLInputElement).value )}/>
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl className='formControl' >
          <InputLabel htmlFor="my-input">Directs costs</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => this.setDataProject('directsCosts', (e.target as unknown as HTMLInputElement).value )}/>
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl className='formControl' >
          <InputLabel htmlFor="my-input">Indirects costs</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => this.setDataProject('indirectsCosts', (e.target as unknown as HTMLInputElement).value )}/>
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
      </div>
      </div>
      <FormControl  className='formControlInfos' >
        <Button variant="contained" color="primary"  onClick={() => this.showInfos()}>
          Show infos
        </Button>
      </FormControl>
      <FormControl  className='formControlBoxes' >
        <Button variant="contained" color="primary"  onClick={() => this.send()}>
          Send
        </Button>
      </FormControl>
      <AdminsProjectModals isModalOpened={this.props.isModalOpened} setIsModalOpened={this.props.setIsModalOpened} state={[this.state]}/> */}
    </Container>
      // <div id='admin-page-display'>
      //   <div id="admin-project-name">
      //     <label className="admin-project-label">Project name: </label>
      //     <input
      //       type="text"
      //       name="projectName"
      //       onChange={(e) => this.setDataProject('projectName', (e.target as HTMLInputElement).value)} />
      //     <label className="admin-project-label">Project code: </label>
      //     <input onChange={(e) => this.setDataProject('projectCode', (e.target as unknown as HTMLInputElement).value )}/>
      //     {/* <select onChange={(e) => this.setDataProject('projectCode', (e.target as unknown as HTMLInputElement).value )}>
      //       <AdminsProjectSelect tab={[
      //         {value: '-- options --'},
      //         {value: 'A1'},
      //         {value: 'M3'},
      //         {value: 'C5'},
      //         {value: 'B2'},
      //         {value: 'A'},
      //         {value: 'H'},
      //       ]} />
      //     </select> */}
      //     <label className="admin-project-label">month:</label>
      //     <input type="month" onChange={(e) =>
      //       this.setDataProject('month', (e.target as unknown as HTMLInputElement).value )}/>
      //     <label className="admin-project-label">start date:</label>
      //     <input type="date" id='' name="calendar" onChange={(e) => this.setDataProject('startDate', (e.target as unknown as HTMLInputElement).value )}
      //       />
      //     <label className="admin-project-label">end date:</label>
      //     <input type="date" onChange={(e) =>
      //       this.setDataProject('endDate', (e.target as unknown as HTMLInputElement).value )} />
      //     <label className="admin-project-label">Hours allowed</label>
      //     <input type='text' onChange={(e) => this.setDataProject('hours', (e.target as unknown as HTMLInputElement).value )} />
      //     <label className="admin-project-label">Budget allowed</label>  
      //     <input type='text' onChange={(e) => this.setDataProject('budget', (e.target as unknown as HTMLInputElement).value )} />
      //     <label>Users</label>
      //     <select onChange={(e) => this.defineUserOnProject((e.target as HTMLSelectElement).value)}>
      //       <option value='----'>----- select users</option>
      //       {this.props.userList.map((elem) => (
      //         <option value={elem.firstname} >
      //           {elem.firstname}
      //         </option>
      //       ))}
      //     </select>
      //     <label>Work Packages</label>
      //     <select>
      //       <option value='-----'>work packages</option>
      //       <option value='wp1'>wp1</option>
      //       <option value='wp2'>wp2</option>
      //       <option value='wp3'>wp3</option>
      //       <option value='wp4'>wp4</option>
      //       <option value='wp5'>wp5</option>
      //       <option value='wp6'>wp6</option>
      //       <option value='wp7'>wp7</option>
      //       <option value='wp8'>wp8</option>
      //       <option value='wp9'>wp9</option>
      //       <option value='wp10'>wp10</option>
      //       <option value='wp11'>wp11</option>
      //       <option value='wp12'>wp12</option>
      //       <option value='wp13'>wp13</option>
      //       <option value='wp14'>wp14</option>
      //       <option value='wp15'>wp15</option>
      //       <option value='wp16'>wp16</option>
      //       <option value='wp17'>wp17</option>
      //       <option value='wp18'>wp18</option>
      //       <option value='wp19'>wp19</option>
      //       <option value='wp20'>wp20</option>
      //     </select>
      //     <label>Financials Reporting month </label>
      //     <input type='month' />
      //     <button type="submit" onClick={this.send}>enregistrer</button>
      //     <label></label>
      //   </div>
      // </div>
    )
  }
}

const mapState = (state: RootState) => ({
  token: state.auth.token,
  userList: state.admin.usersList,
  isModalOpened: state.users.isModalOpened,
})

const mapDispatch = (dispatch: RootDispatch) => ({
  updateDataProject: dispatch.admin.updateDataProject,
  addDataProject: dispatch.admin.addDataProject,
  setIsModalOpened: dispatch.users.setIsModalOpened
})

// export default withStyles(useStyles)(AdminsProject)
export default connect(mapState, mapDispatch)(AdminsProject)
