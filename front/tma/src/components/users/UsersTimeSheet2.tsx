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
import { TimeSheetDataInterface } from '.';
// import "../helpers/genericInputs/inputHooks"

interface Props {
  setTimeSheetDatas: (obj: TimeSheetDataInterface) => void,
  timeSheetDatas: TimeSheetDataInterface,
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

function createData(name: string, calories: number, fat: number, carbs: number, protein: number, price: number) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],
  };
}

function Row(props: any, setTimeSheetDatas: (obj: TimeSheetDataInterface) => void) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  // -------------------------------------------------
  
  
  const { value: Project, bind: bindProject, reset: resetBinProject} = useInput('')
  const { value: Task, bind: bindTask, reset: resetBinTask} = useInput('')
  const { value: Bill, bind: bindBill, reset: resetBinBill} = useCheck(false)
  const { value: Mon, bind: bindMon, reset: resetBindMon } = useInput('');
  const { value: Tue, bind: bindTue, reset: resetBindTue } = useInput('');
  const { value: Wed, bind: bindWed, reset: resetBindWed } = useInput('');
  const { value: Thu, bind: bindThu, reset: resetBindThu } = useInput('');
  const { value: Fri, bind: bindFri, reset: resetBindFri } = useInput('');
  const { value: Sat, bind: bindSat, reset: resetBindSat } = useInput('');
  const { value: Sun, bind: bindSun, reset: resetBindSun } = useInput('');

  const handleSendTimeSheet = () => {
    const obj = {
      projet: Project,
      task: Task,
      // bill: Bill,
      mon: Mon,
      tue: Tue,
      wed: Wed,
      thu: Thu,
      fri: Fri,
      sat: Sat,
      sun: Sun, 
    }

    setTimeSheetDatas(obj)
  }
// -----------------------------------------------------


  // const [inputValues, setInputValues] = useState({
  //   project: '', task: '', bill: false, Mon: '', Tue: '', 
  // });

  // const handleOnChange = (event: any, param: string) => {
  //   const { value } = event.target;

  //   setInputValues({ ...inputValues, [param]: value });
  //   console.log({...inputValues})
  // };

  // useEffect(() => {
  //   setInputValues({...inputValues, [param]: value })
  // }, [inputValues])
  

  // setTimesheet = (field: "project" | "task" | "Lun" | "Ma" | "Mer" | "Jeu" | "Ven" | "Sat" | "Sun", value: string) => {
  //   const state: State = {...this.state};   
  //   state[field] = value;
  //   this.setState(state)
  //   console.log(state)

  //   let pm = 4
  //   let prestedHours = 15
  //   let temsPleinNat = 38
  //   console.log("rep: ",(prestedHours / temsPleinNat) * pm )
  
  // }

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
        <InputLabel></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            // id="demo-simple-select"
            // onClick={(event) => handleOnChange(event, 'project')}
            // value
            // onChange={handleChange}
            {...bindProject}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </TableCell>
        <TableCell>
        <InputLabel></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            // id="demo-simple-select"
            // onClick={(event) => handleOnChange(event, 'task')}


            // value
            // onChange={handleChange}
            {...bindTask}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </TableCell>
        <TableCell>
        <Checkbox
          className={classes.root}
          disableRipple
          color="default"
          checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
          icon={<span className={classes.icon} />}
          inputProps={{ 'aria-label': 'decorative checkbox' }}
          // {...props}
          {...bindBill}
        />
        </TableCell>
        <TableCell>
          <TextField 
            required 
            // id="standard-size-small" 
            label="Required" 
            // onChange={(event) => setInputValues(event)}
            {...bindMon}
          />
        </TableCell>
        <TableCell>
          <TextField 
          required 
          // id="standard-size-small" 
          label="Required" 
          {...bindTue}

          />
        </TableCell>
        <TableCell>
        <TextField 
        required 
        // id="standard-size-small" 
        label="Required" 
        {...bindWed}

        />
        </TableCell>
        <TableCell>
        <TextField 
        required 
        // id="standard-size-small" 
        label="Required" 
        {...bindThu}

        />

        </TableCell>
        <TableCell>
        <TextField 
        required 
        // id="standard-size-small" 
        label="Required" 
        {...bindFri}

        />

        </TableCell>
        <TableCell>
        <TextField 
        required 
        // id="standard-size-small" 
        label="Required" 
        {...bindSat}

        />
        </TableCell>
        <TableCell>
        <TextField 
        required 
        // id="standard-size-small" 
        label="Required" 
        {...bindSun}

        />
        </TableCell>
        <TableCell>
          <Button variant="contained" color="primary">
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
                <TableBody>
                  {row.history.map((historyRow: any) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

export default function UsersTimeSheet2(props: Props) {
  return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
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
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>  
  );
}

const mapState = (state: RootState) => ({
  timeSheetDatas: state.users.timeSheetDatas,
})

const mapDispatch = (dispatch: RootDispatch) => ({
  setTimeSheetDatas: dispatch.users.setTimeSheetDatas,
})

connect(mapState, mapDispatch)(UsersTimeSheet2)


