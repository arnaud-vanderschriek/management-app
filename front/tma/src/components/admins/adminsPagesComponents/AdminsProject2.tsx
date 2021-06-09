import React, { useEffect } from "react";
import { FormControl, InputLabel, FormHelperText, Container, TextField } from "@material-ui/core";
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { useInput } from "../../helpers/genericInputs/inputHooks";
import { Button } from "@material-ui/core";
import { DataProject, UsersList, WorkPackages } from "../index";
import AdminsProjectUsersCheckBox from "./AdminsProjectUsersCheckBox";
import AdminsProjectModals from "./AdminsProjectModals";
import AdminsProjectWpCheckBox from "./AdminsProjectWpCheckBox";

const useStyles = makeStyles((theme) => ({
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


interface Props {
  userList: UsersList[],
  dataProject: DataProject,
  isModalOpened: boolean,
  updateDataProject: (payload: DataProject) => void,
  addDataProject: (payload: DataProject ) => Promise<void>,
  setIsModalOpened: (isModalOpened: boolean) => void,
}

interface State {
  projectName: string,
  projectCode: string,
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

export default function AdminsProject2(props: Props, state: State) {
  const classes = useStyles();
  console.log(state.usersOnProject, 'state.userOnProject de AdminsProject2')

  useEffect(() => {
    console.log(props.dataProject, 'DataProject')
  }, [props.dataProject]);

  let dataProject = {
    projectName: '',
    projectCode: '',
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

  const { value: projectName, bind: bindProjectName, reset: resetProjectName } = useInput('')
  const { value: projectCode, bind: bindProjectCode, reset: resetProjectCode } = useInput('')
  const { value: startDate, bind: bindStartDate, reset: resetStartDate } = useInput('')
  const { value: endDate, bind: bindEndDate, reset: resetEndDate } = useInput('')
  const { value: hoursAllowed, bind: bindHoursAllowed, reset: resetHoursAllowed } = useInput('')
  const { value: budgetAllowed, bind: bindBudgetAllowed, reset: resetBudgetAllowed } = useInput('')
  const { value: users, bind: bindUsers, reset: resetUsers } = useInput('')
  const { value: workPackages, bind: bindWorkPackages, reset: resetWorkPackages } = useInput('')
  const { value: financialsReportingMonth, bind: bindFinancialsReportingMonth, reset: resetFinancialsReportingMonth } = useInput('')
  const { value: financialsReportingBudget, bind: bindFinancialsReportingBudget, reset: resetFinancialsReportingBudget } = useInput('')
  const { value: directsCosts, bind: bindDirectsCosts, reset: resetDirectsCosts } = useInput('')
  const { value: indirectsCosts, bind: bindIndirectsCosts, reset: resetIndirectsCosts } = useInput('')

  const defineUserOnProject = (value: string) => {

  }

  const showInfos = () => {
    props.setIsModalOpened(true)
  }

  const send = () => {

    dataProject = {
      projectName: projectName,
      projectCode: projectCode,
      startDate: startDate,
      endDate: endDate,
      hours: hoursAllowed,
      budget: budgetAllowed,
      usersOnProject: [],
      workPackagesOnProject: [],
      reportingMonth: financialsReportingMonth,
      reportingBudget: financialsReportingBudget,
      directsCosts: directsCosts,
      indirectsCosts: indirectsCosts,    
    }

    props.updateDataProject(dataProject);
    props.addDataProject(dataProject);
    

    resetProjectName();
    resetProjectCode();
    resetStartDate();
    resetEndDate();
    resetHoursAllowed();
    resetBudgetAllowed();
    resetFinancialsReportingMonth();
    resetFinancialsReportingBudget();
    resetDirectsCosts();
    resetIndirectsCosts();
  }

  return(
    <Container>
      <div>
        <div className={classes.formBox}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="my-input">Project Name</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" {...bindProjectName}/>
            <FormHelperText id="my-helper-text">enter the project name.</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="my-input">Project Code</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" {...bindProjectCode}/>
            <FormHelperText id="my-helper-text">enter the project codes.</FormHelperText>
          </FormControl>
        </div>
        <div className='admins-project-form'>
          <FormControl className={classes.formControl}>
            <TextField
              id="datetime-local"
              label="start date"
              type="date"
              defaultValue=""
              // className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              {...bindStartDate}
            />
            <FormHelperText id="my-helper-text">project start date.</FormHelperText>

          </FormControl>
          <FormControl className={classes.formControl}>
          <TextField
            id="datetime-local"
            label="end date"
            type="date"
            defaultValue=""
            // className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            {...bindEndDate}
          />
            <FormHelperText id="my-helper-text">project end date.</FormHelperText>

          </FormControl>
        </div>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="my-input">Allocated hours</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" {...bindHoursAllowed}/>
          <FormHelperText id="my-helper-text">enter the allocated hours.</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="my-input">Allocated Budget</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" {...bindBudgetAllowed}/>
          <FormHelperText id="my-helper-text">enter the allocated budget.</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Participant users</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select" 
        >
          <AdminsProjectUsersCheckBox 
            userList={props.userList} 
            updateDataProject={props.updateDataProject} 
            
          />
        </Select>
        <FormHelperText id="my-helper-text">enter the participant users.</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Work packages</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          {...bindWorkPackages} 
        >
         <AdminsProjectWpCheckBox wp={[
          { value: 'wp1'},
          { value: 'wp2'},
          { value: 'wp3'},
          { value: 'wp4'},
          { value: 'wp5'},
          { value: 'wp6'},
          { value: 'wp7'},
          { value: 'wp8'},
          { value: 'wp9'},
          { value: 'wp10'},
          { value: 'wp11'},
          { value: 'wp12'},
          { value: 'wp13'},
          { value: 'wp14'},
          { value: 'wp15'},
          { value: 'wp16'},
          { value: 'wp17'},
          { value: 'wp18'},
          { value: 'wp19'},
          { value: 'wp20'}, ]} 
        />
        </Select>
        <FormHelperText id="my-helper-text">Allocated work packages.</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
          <InputLabel htmlFor="my-input">Financials reporting month</InputLabel>
          <Input type='month' id="my-input" aria-describedby="my-helper-text" {...bindFinancialsReportingMonth} />
          <FormHelperText id="my-helper-text"></FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="my-input">Financials reporting budget</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" {...bindFinancialsReportingBudget}/>
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="my-input">Directs costs</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" {...bindDirectsCosts}/>
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="my-input">Indirects costs</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" {...bindIndirectsCosts}/>
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
      </div>
      <FormControl  className='formControlInfos' >
        <Button variant="contained" color="primary"  onClick={() => showInfos()}>
          Show infos
        </Button>
      </FormControl>
      <FormControl  className='formControlBoxes' >
        <Button variant="contained" color="primary"  onClick={() => send()}>
          Send
        </Button>
      </FormControl>
      <AdminsProjectModals isModalOpened={props.isModalOpened} setIsModalOpened={props.setIsModalOpened} state={[state]}/>
    </Container>
  )
}