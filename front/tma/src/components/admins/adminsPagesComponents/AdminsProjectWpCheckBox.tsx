import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { Wp } from '..';

interface Props {
  wp: Wp[],
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function AdminsProjectWpCheckBox(props: Props) {
  const classes = useStyles();
  const [tab, setTab] = useState<Wp[]>([]);

  useEffect(() => {
    // defineUserOnProjectCheckBox((e: React.ChangeEvent<HTMLInputElement>), (value: any))
    console.log(tab, 'tab de départ')  
  }, [tab]);

  const defineWpOnProjectCheckBox = ( e: React.ChangeEvent<HTMLInputElement>, value: any) => {
    if(e.target.checked) {
     setTab([...tab, value])
     console.log(tab)
    } else {
      setTab(tab.filter(item => item !== value))
    } 
  }

  return (
    <div className={classes.root}>
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Assign work packages on project</FormLabel>
      <FormGroup>
        {props.wp.map((elem) => 
          <FormControlLabel
            control={<Checkbox 
            // checked={elem.value} 
            onChange={(e) => defineWpOnProjectCheckBox(e, elem.value)} 
            name={elem.value} 
            />}
            label={elem.value} 
            />
        )} 
      </FormGroup>
      <FormHelperText>Be careful</FormHelperText>
    </FormControl>
  </div>
  );
}