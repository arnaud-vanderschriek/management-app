import { faHouseUser} from '@fortawesome/free-solid-svg-icons';
import {faCalendarTimes} from '@fortawesome/free-solid-svg-icons';
import {faCog} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { connect } from 'react-redux';
import { RootState } from '../state/store';

interface Props {
  linkList: string,
  setLinkList: (data: string) => void,
}

export class UsersNavigationMenu extends React.Component<Props> {
  render() {
    return <div id='user-nav-menu'>
      <div className='user-nav-menu-boxes'>
        <div className='user-nav-boxes-title'>
          <FontAwesomeIcon icon={faHouseUser} />
          <p><u>HOME</u></p>
        </div>
        <a className='user-nav-menu-link' href='/#' onClick={() => this.props.setLinkList('info')}>
          Info
        </a>
      </div>
      <div className='user-nav-menu-boxes'>
        <div className='user-nav-boxes-title'>
          <FontAwesomeIcon icon={faCalendarTimes} />
          <p><u>TIMESHEET</u></p>
        </div>
        <a className='user-nav-menu-link' href="/#" onClick={() => this.props.setLinkList('timesheet')}>
          Enter your TimeSheet
        </a>
      </div>
      <div className='user-nav-menu-boxes'>
        <div className='user-nav-boxes-title'>
          <FontAwesomeIcon icon={faCog} />
          <p><u>SETTINGS</u></p>
        </div>
        <a className='user-nav-menu-link' href="/#" onClick={() => this.props.setLinkList('settings')}>
          Settings
        </a>
      </div>
      <div className='user-nav-menu-boxes'>
        <p><u>FORECAST</u></p>
        <a className='user-nav-menu-link' href='/#' onClick={() => this.props.setLinkList('forecast')}>
          Forecast
        </a>
      </div>
    </div>
  }
}

const mapState = (state: RootState) => ({
  linkList: state.users.linkList,
})

const mapDispatch = (dispatch: any) => ({
  setLinkList : dispatch.users.setLinkList,
})

export default connect(mapState, mapDispatch)(UsersNavigationMenu);
