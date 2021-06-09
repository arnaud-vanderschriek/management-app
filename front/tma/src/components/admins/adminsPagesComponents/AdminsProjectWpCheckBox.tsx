import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { DataProject } from '..';
import { RootDispatch, RootState } from '../../state/store';
import { connect } from 'react-redux';
import { wp } from '../helpers/wpArray'

interface Props {
  dataProject: DataProject,
  updateWpOnProject: (payload: string[]) => void,
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

function AdminsProjectWpCheckBox(props: Props) {
  const classes = useStyles();

  const defineWpOnProjectCheckBox = ( e: React.ChangeEvent<HTMLInputElement>, value: any) => {
    if(e.target.checked) {
      const oldValue = props.dataProject.workPackagesOnProject || []
      props.updateWpOnProject([...oldValue, value])
    } else {
        const newValue = props.dataProject.workPackagesOnProject.filter(item => item !== value)
        props.updateWpOnProject(newValue)
    } 
  }

  return (
    <div className={ classes.root }>
    <FormControl component="fieldset" className={ classes.formControl }>
      <FormLabel component="legend">Assign work packages on project</FormLabel>
      <FormGroup>
        { wp.map((elem: any) =>
          <FormControlLabel
            control={ <Checkbox 
            checked={ 
              props.dataProject.workPackagesOnProject ? 
              props.dataProject.workPackagesOnProject.includes(elem.value) : 
              false 
            } 
            onChange={ (e) => defineWpOnProjectCheckBox(e, elem.value) } 
            name={ elem.value } /> }
            label={ elem.value } />
        ) }
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
  updateWpOnProject: dispatch.admin.updateWpOnProject,
})

export default connect(mapState, mapDispatch)(AdminsProjectWpCheckBox)