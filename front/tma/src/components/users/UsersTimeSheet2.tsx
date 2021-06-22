import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import { useInput, useCheck } from '../helpers/genericInputs/inputHooks';
import { RootDispatch, RootState } from '../state/store';
import { connect } from 'react-redux';
import { TimeSheetDataInterface, UserProjectInterface } from '.';
import { UserLoginInterface } from '../login';
import { useEffect } from 'react';
import UserPagePopup from './UsersPagePopup';
import { UsersTimeSheet } from './UsersTimeSheet';

interface Props {
  userDataID: UserLoginInterface,
  userProject: UserProjectInterface[],
  isModalOpened: boolean,
  timeSheetDatas: TimeSheetDataInterface,
  setIsModalOpened: (isModalOpened: boolean) => Promise<void>
  setTimeSheetDatas: (obj: TimeSheetDataInterface) => void,
  postTimeSheetDatas: (obj: TimeSheetDataInterface) => Promise<void>,
  fetchDataProject: (id: number) => Promise<void>,
}

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  icon: {
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
});

function Row(props: Props) {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();


  const handleChangeTimeSheet = (value: string , field: 'week' | 'project'| 'task' |'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun' ) => {
    const state = props.timeSheetDatas
    state[field] = value
    console.log(state, 'timesheetdatas in function')
    props.setTimeSheetDatas(state)
  }

  const handleBillable = (value: boolean , field: 'bill') => {
    const state = props.timeSheetDatas
    state[field] = value
    console.log(state, 'timesheetdatas in function')
    props.setTimeSheetDatas(state)
  }
 
  const handleSendTimeSheet = () => {
    props.postTimeSheetDatas(props.timeSheetDatas)
  }

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell component="th" scope="row">
          <InputLabel></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            onChange={(e) => handleChangeTimeSheet((e.target as HTMLInputElement).value, 'project')} 
          >

          {props.userProject.map((elem: any) => (
            <MenuItem value={elem}>{elem}</MenuItem>
          ))}

          </Select>
        </TableCell>
        <TableCell>
        <InputLabel></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            onChange={(e) => handleChangeTimeSheet((e.target as HTMLInputElement).value, 'task')} 
          >

            <MenuItem value={'10'}>Ten</MenuItem>
            <MenuItem value={'20'}>Twenty</MenuItem>
            <MenuItem value={'30'}>Thirty</MenuItem>

          </Select>
        </TableCell>
        <TableCell>
          <Checkbox
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            onClick={(e) => handleBillable((e.target as HTMLInputElement).checked, 'bill')}
            icon={<span className={classes.icon} />}
            inputProps={{ 'aria-label': 'decorative checkbox' }} />
        </TableCell>
        <TableCell>
          <TextField 
            required 
            label="Required" 
            onChange={(e) => handleChangeTimeSheet((e.target as HTMLInputElement).value, 'mon')} />
        </TableCell>
        <TableCell>
          <TextField 
            required 
            label="Required" 
            onChange={(e) => handleChangeTimeSheet((e.target as HTMLInputElement).value, 'tue')} />
        </TableCell>
        <TableCell>
        <TextField 
            required 
            label="Required" 
            onChange={(e) => handleChangeTimeSheet((e.target as HTMLInputElement).value, 'wed')} />
        </TableCell>
        <TableCell>
        <TextField 
            required 
            label="Required" 
            onChange={(e) => handleChangeTimeSheet((e.target as HTMLInputElement).value, 'thu')} />
        </TableCell>
        <TableCell>
        <TextField 
            required 
            label="Required" 
            onChange={(e) => handleChangeTimeSheet((e.target as HTMLInputElement).value, 'fri')} />
        </TableCell>
        <TableCell>
        <TextField 
            required 
            label="Required"  
            onChange={(e) => handleChangeTimeSheet((e.target as HTMLInputElement).value, 'sat')} />
        </TableCell>
        <TableCell>
        <TextField 
          required 
          label="Required" 
          onChange={(e) => handleChangeTimeSheet((e.target as HTMLInputElement).value, 'sun')} />
        </TableCell>
        <TableCell>
          <Button variant="contained" color="primary" onClick={() => props.setIsModalOpened(true) } >
            Popup
          </Button>
        </TableCell>
        <TableCell>
          <Button variant="contained" color="primary" onClick={() => handleSendTimeSheet()}>
            Send
        </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <UserPagePopup />
    </React.Fragment>
  );
}

function UsersTimeSheet2(props: Props) {
  useEffect(() => {
    props.fetchDataProject(props.userDataID.id)
    console.log('userDataID: ', props.userDataID.id)
    // console.log('######', props.userDataID.id )
  }, [])

  const weekFunction = (value: string, data: 'week') => {
    const state = props.timeSheetDatas
    state[data] = value
    props.setTimeSheetDatas(state)
  }

  return (
      <TableContainer component={Paper}>
        <div>
          <label>Enter the choosen week</label>
          <input type='week' onChange={(e) => weekFunction((e.target as HTMLInputElement).value, 'week')}></input>
        </div>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>Project</TableCell>
              <TableCell>Task</TableCell>
              <TableCell>Billable</TableCell>
              <TableCell>Mon</TableCell>
              <TableCell>Tue</TableCell>
              <TableCell>Wed</TableCell>
              <TableCell>Thu</TableCell>
              <TableCell>Fri</TableCell>
              <TableCell>Sat</TableCell>
              <TableCell>Sun</TableCell>
              <TableCell>Pop-up</TableCell>
              <TableCell>Send</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Row  fetchDataProject={props.fetchDataProject}
                  postTimeSheetDatas={props.postTimeSheetDatas}
                  isModalOpened={props.isModalOpened}
                  userDataID={props.userDataID}
                  setTimeSheetDatas={props.setTimeSheetDatas}
                  userProject={props.userProject} 
                  setIsModalOpened={props.setIsModalOpened} 
                  timeSheetDatas={props.timeSheetDatas} />
           </TableBody>
        </Table>
        <UserPagePopup />
        <div>
          <hr></hr>
          <h5>BILLABLE TOTAL :</h5>
          <hr></hr>
          <h5>NON BILLABLE TOTAL:</h5>
          <hr></hr>
        </div>
        <div>
          <p>current overtime :</p>
          <p>budget holidays left: </p>
          <p>extra budget holidays left: </p>
          <p>running sickness count: </p>
        </div>
      </TableContainer>  
  );
}

const mapState = (state: RootState) => ({
  isModalOpened: state.users.isModalOpened,
})

const mapDispatch = (dispatch: any) => ({
  setIsModalOpened: dispatch.users.setIsModalOpened
})

export default connect(mapState, mapDispatch)(UsersTimeSheet2);

