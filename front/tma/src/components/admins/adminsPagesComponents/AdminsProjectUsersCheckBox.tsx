import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { DataProject, UsersList, WorkPackages } from '..';
import { RootDispatch, RootState } from '../../state/store';
import { connect } from 'react-redux';

interface Props {
  userList: UsersList[],
  dataProject: DataProject,
  updateUsersOnProject: (payload: string[]) => void,
  updateDataProject: (payload: DataProject) => void,
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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

function AdminsProjectUsersCheckBox(props: Props, state: State) {

  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  
  const defineUserOnProjectCheckBox = ( e: React.ChangeEvent<HTMLInputElement> , value: any) => {
    if(e.target.checked) {
      const oldValue = props.dataProject.usersOnProject || []
      console.log({ oldValue })
     props.updateUsersOnProject([...oldValue, value])
   
    } else {
      const newValue = props.dataProject.usersOnProject.filter(item => item !== value)
      // setChecked(false)
      props.updateUsersOnProject(newValue)
    } 
  }
  console.log(props, 'props')
  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Assign users on project</FormLabel>
        <FormGroup>
          {props.userList.map((elem) => 
            <FormControlLabel
              control={<Checkbox 
              checked={ props.dataProject.usersOnProject ? props.dataProject.usersOnProject.includes(elem.firstname) : false} 
              defaultChecked={elem.checked}
              onChange={(e) => defineUserOnProjectCheckBox(e, elem.firstname)} 
              // onClick={(e) => e.stopPropagation()}
              name={elem.firstname} />}
              label={elem.firstname} />
          )}
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
    </div>
  );
}
  
const mapState = (state: RootState) => ({
  dataProject: state.admin.dataProject
})

const mapDispatch = (dispatch: RootDispatch) => ({
  updateUsersOnProject: dispatch.admin.updateUserOnProject,
})

export default connect(mapState, mapDispatch)(AdminsProjectUsersCheckBox)