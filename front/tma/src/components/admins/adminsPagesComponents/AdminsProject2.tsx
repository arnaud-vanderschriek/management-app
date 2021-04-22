import { FormControl, InputLabel, FormHelperText, Container } from "@material-ui/core";
import Select from '@material-ui/core/Select';
import React from "react";
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import {

  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
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

export default function AdminsProject2() {
  const classes = useStyles();
  const [users, setUsers] = React.useState('');

  const handleChange = (event: any) => {
    setUsers(event.target.value);
  };

  return(
    <Container>
      <div>
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="my-input">Project Name</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text"></FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="my-input">Project Code</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
          </FormControl>
        </div>
       <div>
       <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          // value={selectedDate}
          // onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
       {/* <FormControl className={classes.formControl}>
          <InputLabel htmlFor="my-input">Start Date</InputLabel>
          <Input type='date' id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl> */}
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="my-input">End date</InputLabel>
          <Input type='date' id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
       </div>
       
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="my-input">Hours allowed</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="my-input">Budget allowed</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Users</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={users}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText id="my-helper-text">Users allowed for project.</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Work packages</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={users}
          onChange={handleChange}
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
        <FormHelperText id="my-helper-text">Work packages allowed for project.</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
          <InputLabel htmlFor="my-input">Financials reporting month</InputLabel>
          <Input type='month' id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="my-input">Financials reporting budget</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="my-input">Directs costs</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="my-input">Indirects costs</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
      </div>
    </Container>
  )
}