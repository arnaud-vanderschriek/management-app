import React from 'react';
import '../styles/admin.css';
import { connect } from 'react-redux';
import { RootDispatch, RootState } from '../../state/store';
import Button from '@material-ui/core/Button';

interface Props {
  sendDataForUserContract: (state: State) => Promise<void>,
}

interface State {
  addOrModify: string,
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  country: string,
  supervisor: string,
  organisation: string,
  startDate: string,
  endDate: string,
  legalHours: string,
  contractualHours: string,
}

export class AdminModifyUsers extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      addOrModify: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      country: '',
      supervisor: '',
      organisation: '',
      startDate: '',
      endDate: '',
      legalHours: '',
      contractualHours: '',
    }
  }
  
  addOrModifyUser = (param: string) => {
    this.setState({addOrModify: param })
  }

  setDataForUserContract = (field: "lastname" | "firstname" | "email" | "password" | "country" | "supervisor" | "organisation" | "startDate" | "endDate" | "legalHours" | "contractualHours", value: string) => {
    const state: State = {...this.state};   
    state[field] = value;
    this.setState(state)
    console.log(state)
  }

  render() {
    return(
      <div id='admin-page-display'>
        <h1>Add / Modify User</h1>
        <div className='admin-page-add-button'>
        <Button variant="contained" color="primary" onClick={() => this.addOrModifyUser('add')}>add user
          Primary
        </Button>
        <Button variant="contained" color="primary" onClick={() => this.addOrModifyUser('modify')}>modify user 
          Primary
        </Button>
          {/* <button <FontAwesomeIcon icon={faSortDown}/></button> */}
          {/* <button onClick={() => this.addOrModifyUser('modify')}>modify user <FontAwesomeIcon icon={faSortDown}/></button>   */}
        </div>
        <form className={this.state.addOrModify === 'add' ? 'admin-page-add-user-form' : 'admin-page-add-user-form-hide'}>
          <div>
            <label>Lastname</label>
            <input onChange={(e) => this.setDataForUserContract('lastname',(e.target as HTMLInputElement).value) }/>
            <label>Firstname</label>
            <input onChange={(e) => this.setDataForUserContract('firstname',(e.target as HTMLInputElement).value) }/>
            <label>Email</label>
            <input onChange={(e) => this.setDataForUserContract('email', (e.target as HTMLInputElement).value) }/>
            <label>Password</label>
            <input onChange={(e) => this.setDataForUserContract('password', (e.target as HTMLInputElement).value) }/>
            <label>Country</label>
            <select onClick={(e) => this.setDataForUserContract('country', (e.target as HTMLInputElement).value) }>
              <option>Belgique</option>
              <option>France</option>
              <option>Allemagne</option>
              <option>Angleterre</option>
              <option>Espagne</option>
              <option>Italie</option>
            </select>
            <label>Line Supervisor</label>
            <input onChange={(e) => this.setDataForUserContract('supervisor', (e.target as HTMLInputElement).value) }/>
            <label>Organisation</label>
            <input onChange={(e) => this.setDataForUserContract('organisation', (e.target as HTMLInputElement).value) }/>
          </div>
          <div>
            {  /* prévoir une option pour rajouter autant de start date et de end date que l'on souhaite  */ }
            <label>start date</label>
            <input type='date' onChange={(e) => this.setDataForUserContract('startDate', (e.target as HTMLInputElement).value) }/>
            <label>end date</label>
            <input type='date' onChange={(e) => this.setDataForUserContract('endDate', (e.target as HTMLInputElement).value) }/>
            { /* ci dessous doit etre fourni par l'api pour disposer de tous les temps de travail legaux des pays  */}
            <label>legal hours per week</label>
            <input onChange={(e) => this.setDataForUserContract('legalHours', (e.target as HTMLInputElement).value) }/> 
            <label>Contractual hours per week</label>
            <input onChange={(e) => this.setDataForUserContract('contractualHours', (e.target as HTMLInputElement).value) }/>
          </div>
          <button type='button' onClick={() => this.props.sendDataForUserContract(this.state)}>envoyer</button>
        </form>
      </div>
    )
  }
}

const mapState = (state: RootState) => ({
  
})

const mapDispatch = (dispatch: RootDispatch) => ({
  sendDataForUserContract: dispatch.admin.sendDataForUserContract,
})

export default connect(mapState, mapDispatch)(AdminModifyUsers);
