import React, { useEffect } from "react";
import { FormControl, InputLabel, FormHelperText, Container, TextField } from "@material-ui/core";
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import { DataProject, UsersList } from "../index";
import AdminsProjectUsersCheckBox from "./AdminsProjectUsersCheckBox";
import AdminsProjectModals from "./AdminsProjectModals";
import AdminsProjectWpCheckBox from "./AdminsProjectWpCheckBox";
import { TramOutlined } from "@material-ui/icons";

interface Props {
  userList: UsersList[],
  dataProject: DataProject,
  isModalOpened: boolean,
  updateDataProject: (payload: DataProject) => void,
  addDataProject: (payload: DataProject ) => Promise<void>,
  setIsModalOpened: (isModalOpened: boolean) => void,
  resetDataProject: () => void,
}

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


export default function AdminsProject2(props: Props) {
  useEffect(() => {
    console.log(props.dataProject, 'useEffect')
  }, [props.dataProject])

  const classes = useStyles();
  
  const showInfos = () => {
    props.setIsModalOpened(true)
  }

  const send = () => {
    console.log(props.dataProject)
    props.addDataProject(props.dataProject)
    // props.resetDataProject()
  }

  const handleChangeDataProject = (value: string, field: 'projectName' | 'projectCode' | 'startDate' | 'endDate' | 'hours' | 'budget' | 'reportingMonth' | 'reportingBudget' | 'directsCosts' | 'indirectsCosts' ) => {
    const state = props.dataProject
    state[field] = value
    props.updateDataProject(state)
  }

  const validationString = (string: string) => {
    
    let stringRegExp = new RegExp('^[^;|<>/][a-zA-Z0-9.-_]+[^;|<>/]$')
    let testString = stringRegExp.test(string)
    console.log(testString, 'test du String')
    if(testString) {
      return false
    } else {
      return true
    }
  }
  

  const validationNumber = (string: string) => {
    
    let stringRegExp = new RegExp('^[0-9.-_/]+')
    let testString = stringRegExp.test(string)
    console.log(testString, 'test du String')
    if(testString) {
      return false
    } else {
      return true
    }
  }

  return(
    <Container>
      <div>
        <div className={ classes.formBox }>
          <FormControl className={ classes.formControl }>
            <InputLabel htmlFor="my-input">Project Name</InputLabel>
            <Input
              error={validationString(props.dataProject.projectName)}
              // error={ props.dataProject.projectName == '' && !props.dataProject.projectName.match("/^[a-zA-Z][0-9]$/") }
              id="my-input" 
              aria-describedby="my-helper-text" 
              value={ props.dataProject.projectName }
              onChange={ (e) => handleChangeDataProject((e.target as HTMLInputElement).value, 'projectName') } />
            <FormHelperText id="my-helper-text">enter the project name.</FormHelperText>
            {/* <Button type="reset"></Button> */}
          </FormControl>
          <FormControl className={ classes.formControl }>
            <InputLabel htmlFor="my-input">Project Code</InputLabel>
            <Input 
                error={validationString(props.dataProject.projectCode)}
              id="my-input" 
              aria-describedby="my-helper-text" 
              value={ props.dataProject.projectCode }
              onChange={ (e) => handleChangeDataProject((e.target as HTMLInputElement).value, 'projectCode') } />
            <FormHelperText id="my-helper-text">enter the project codes.</FormHelperText>
          </FormControl>
        </div>
        <div className='admins-project-form'>
          <FormControl className={ classes.formControl }>
            <TextField
              error={validationNumber(props.dataProject.startDate)}
              id="datetime-local"
              label="start date"
              type="date"
              value={ props.dataProject.startDate }
              InputLabelProps={{
                shrink: true,
              }}
              onChange={ (e) => handleChangeDataProject((e.target as HTMLInputElement).value, 'startDate') } />
            <FormHelperText id="my-helper-text">project start date.</FormHelperText>
          </FormControl>
          <FormControl className={ classes.formControl }>
            <TextField
              error={validationNumber(props.dataProject.startDate)}
              id="datetime-local"
              label="end date"
              type="date"
              value={ props.dataProject.endDate }
              InputLabelProps={{
                shrink: true,
              }}
              onChange={ (e) => handleChangeDataProject((e.target as HTMLInputElement).value, 'endDate') } />
            <FormHelperText id="my-helper-text">project end date.</FormHelperText>
          </FormControl>
        </div>
        <FormControl className={ classes.formControl }>
          <InputLabel htmlFor="my-input">Allocated hours</InputLabel>
          <Input 
             error={validationNumber(props.dataProject.hours)}
            id="my-input" 
            aria-describedby="my-helper-text" 
            value={ props.dataProject.hours }
            onChange={ (e) => handleChangeDataProject((e.target as HTMLInputElement).value, 'hours') } />
          <FormHelperText id="my-helper-text">enter the allocated hours.</FormHelperText>
        </FormControl>
        <FormControl className={ classes.formControl }>
          <InputLabel htmlFor="my-input">Allocated Budget</InputLabel>
          <Input
             error={validationNumber(props.dataProject.budget)} 
            id="my-input" 
            aria-describedby="my-helper-text" 
            value={ props.dataProject.budget }
            onChange={ (e) => handleChangeDataProject((e.target as HTMLInputElement).value, 'budget') } />
          <FormHelperText id="my-helper-text">enter the allocated budget.</FormHelperText>
        </FormControl>
        <FormControl className={ classes.formControl }>
        <InputLabel id="demo-simple-select-label">Participant users</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select" >

          <AdminsProjectUsersCheckBox 
            userList={ props.userList } 
            updateDataProject={ props.updateDataProject } />

        </Select>
        <FormHelperText id="my-helper-text">enter the participant users.</FormHelperText>
      </FormControl>
      <FormControl className={ classes.formControl }>
        <InputLabel id="demo-simple-select-label">Work packages</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select">

         <AdminsProjectWpCheckBox  />

        </Select>
        <FormHelperText id="my-helper-text">Allocated work packages.</FormHelperText>
      </FormControl>
      <FormControl className={ classes.formControl }>
          <InputLabel htmlFor="my-input">Financials reporting month</InputLabel>
          <Input 
             error={validationNumber(props.dataProject.reportingMonth)}
            type='month' 
            id="my-input" 
            aria-describedby="my-helper-text" 
            value={ props.dataProject.reportingMonth }
            onChange={ (e) => handleChangeDataProject((e.target as HTMLInputElement).value, 'reportingMonth') } />
          <FormHelperText id="my-helper-text"></FormHelperText>
        </FormControl>
        <FormControl className={ classes.formControl }>
          <InputLabel htmlFor="my-input">Financials reporting budget</InputLabel>
          <Input 
           error={validationNumber(props.dataProject.reportingBudget)}
          id="my-input" 
          aria-describedby="my-helper-text" 
          value={ props.dataProject.reportingBudget }
          onChange={ (e) => handleChangeDataProject((e.target as HTMLInputElement).value, 'reportingBudget') } />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl className={ classes.formControl }>
          <InputLabel htmlFor="my-input">Directs costs</InputLabel>
          <Input 
          error={validationNumber(props.dataProject.directsCosts)}
          id="my-input" 
          aria-describedby="my-helper-text" 
          value={ props.dataProject.directsCosts }
          onChange={ (e) => handleChangeDataProject((e.target as HTMLInputElement).value, 'directsCosts') } />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl className={ classes.formControl }>
          <InputLabel htmlFor="my-input">Indirects costs</InputLabel>
          <Input 
          error={validationNumber(props.dataProject.indirectsCosts)}
          id="my-input" 
          aria-describedby="my-helper-text" 
          value={ props.dataProject.indirectsCosts }
          onChange={ (e) => handleChangeDataProject((e.target as HTMLInputElement).value, 'indirectsCosts') } />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
      </div>
      <FormControl  className='formControlInfos' >
        <Button variant="contained" color="primary"  onClick={ () => showInfos() }>
          Show infos
        </Button>
      </FormControl>
      <FormControl  className='formControlBoxes' >
        <Button type='reset' variant="contained" color="primary"  onClick={ () => send() }>
          Send
        </Button>
      </FormControl>
      <AdminsProjectModals isModalOpened={ props.isModalOpened } setIsModalOpened={ props.setIsModalOpened } />
    </Container>
  )
}