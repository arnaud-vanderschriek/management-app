import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, FormHelperText, Container, TextField } from "@material-ui/core";
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import { DataProject, UsersList } from "../index";
import AdminsProjectUsersCheckBox from "./AdminsProjectUsersCheckBox";
import AdminsProjectModals from "./AdminsProjectModals";
import AdminsProjectWpCheckBox from "./AdminsProjectWpCheckBox";

interface Props {
  userList: UsersList[],
  dataProject: DataProject,
  isModalOpened: boolean,
  isDataProject: boolean,
  updateDataProject: (payload: DataProject) => void,
  addDataProject: (payload: DataProject ) => Promise<void>,
  setIsModalOpened: (isModalOpened: boolean) => void,
  setIsDataProject: (isDataProject: boolean) => void,
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

  const [validatedString, setValidatedString] = useState(false)
  let obj = {
    'projectName': false,
    'projectCode': false,
    'startDate' : false,
    'endDate': false,
    'hours': false,
    'budget': false,
    'reportingMonth': false,
    'reportingBudget': false,
    'directsCosts': false,
    'indirectsCosts': false,
    }
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

  const validationString = (string: string, data: string) => {
  
    let stringRegExp = new RegExp('^[^;|<>/][a-zA-Z0-9.-_]+[^;|<>/]$')
    let testString = stringRegExp.test(string)
    
    if(testString) {
      if(data === 'projectName') obj.projectName = true
      if(data === 'projectCode') obj.projectCode = true
      return false
    } else {
      obj.projectName = false
      obj.projectCode = false
      return true
    }
  }
  
  const validationNumber = (string: string, data: string) => {
    
    let stringRegExp = new RegExp('^[0-9.-_/]+')
    let testString = stringRegExp.test(string)

    if(testString) {
      if(data === 'startDate') obj.startDate = true
      if(data === 'endDate') obj.endDate = true
      if(data === 'hours') obj.hours = true
      if(data === 'budget') obj.budget = true 
      if(data === 'reportingBudget') obj.reportingBudget = true
      if(data === 'reportingMonth') obj.reportingMonth = true
      if(data === 'directsCosts') obj.directsCosts = true
      if(data === 'indirectsCosts') obj.indirectsCosts = true

      return false
    } else {
      obj.startDate = false
      obj.endDate = false
      obj.hours = false
      obj.budget = false
      obj.reportingBudget = false
      obj.reportingMonth = false
      obj.directsCosts = false
      obj.indirectsCosts = false
      
      return true
    }
  }

  const buttonValidity = () => {
    if(obj.projectName && obj.projectCode && obj.budget && obj.directsCosts && obj.startDate && obj.endDate && obj.hours && obj.reportingBudget && obj.reportingMonth && obj.indirectsCosts  === true) {
      return false
    }
    else {
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
              error={validationString(props.dataProject.projectName, 'projectName')}
              id="my-input" 
              aria-describedby="my-helper-text" 
              value={ props.dataProject.projectName }
              onChange={ (e) => handleChangeDataProject((e.target as HTMLInputElement).value, 'projectName') } />
            <FormHelperText id="my-helper-text">enter the project name.</FormHelperText>
          </FormControl>
          <FormControl className={ classes.formControl }>
            <InputLabel htmlFor="my-input">Project Code</InputLabel>
            <Input 
              error={validationString(props.dataProject.projectCode, 'projectCode')}
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
              error={validationNumber(props.dataProject.startDate, 'startDate')}
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
              error={validationNumber(props.dataProject.endDate, 'endDate')}
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
             error={validationNumber(props.dataProject.hours, 'hours')}
            id="my-input" 
            aria-describedby="my-helper-text" 
            value={ props.dataProject.hours }
            onChange={ (e) => handleChangeDataProject((e.target as HTMLInputElement).value, 'hours') } />
          <FormHelperText id="my-helper-text">enter the allocated hours.</FormHelperText>
        </FormControl>
        <FormControl className={ classes.formControl }>
          <InputLabel htmlFor="my-input">Allocated Budget</InputLabel>
          <Input
             error={validationNumber(props.dataProject.budget, 'budget')} 
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
             error={validationNumber(props.dataProject.reportingMonth, 'reportingMonth')}
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
           error={validationNumber(props.dataProject.reportingBudget, 'reportingBudget')}
          id="my-input" 
          aria-describedby="my-helper-text" 
          value={ props.dataProject.reportingBudget }
          onChange={ (e) => handleChangeDataProject((e.target as HTMLInputElement).value, 'reportingBudget') } />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl className={ classes.formControl }>
          <InputLabel htmlFor="my-input">Directs costs</InputLabel>
          <Input 
          error={validationNumber(props.dataProject.directsCosts, 'directsCosts')}
          id="my-input" 
          aria-describedby="my-helper-text" 
          value={ props.dataProject.directsCosts }
          onChange={ (e) => handleChangeDataProject((e.target as HTMLInputElement).value, 'directsCosts') } />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl className={ classes.formControl }>
          <InputLabel htmlFor="my-input">Indirects costs</InputLabel>
          <Input 
          error={validationNumber(props.dataProject.indirectsCosts, 'indirectsCosts')}
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
        <Button type='reset' variant="contained" color="primary"  disabled={ buttonValidity() } onClick={ () => send() }>
          Send
        </Button>
      </FormControl>
      <AdminsProjectModals isModalOpened={ props.isModalOpened } setIsModalOpened={ props.setIsModalOpened } />
    </Container>
  )
}