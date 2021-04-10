import { faCoins, faHouseUser, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import {faCalendarTimes} from '@fortawesome/free-solid-svg-icons';
import {faCog} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { connect } from 'react-redux';

interface Props {
  setLinkList: (data: string) => void,
}

export class AdminsNavigationMenu extends React.Component<Props> {
  render() {
    return <div id='admins-nav-menu'>
      <div className='admins-nav-menu-boxes'>
        <div className='admins-nav-boxes-title'>
          <FontAwesomeIcon icon={faHouseUser} />
          <p>USERS</p>
        </div>
        <div className='admins-nav-boxes-link'>
          <a className='admins-nav-menu-link' href='/#' onClick={() => this.props.setLinkList('users')}>
            users
          </a>
        </div>
        <div className='admins-nav-boxes-link'>
          <a className='admins-nav-menu-link' href='/#' onClick={() => this.props.setLinkList('modify')}>
            add users
          </a>
        </div>
      </div>
      <div className='admins-nav-menu-boxes'>
        <div className='admins-nav-boxes-title'>
          <FontAwesomeIcon icon={faCalendarTimes} />
          <p>TIMESHEET</p>
        </div>
        <div className='admins-nav-boxes-link'>
          <a className='admins-nav-menu-link' href="/#" onClick={() => this.props.setLinkList('timesheet')}>
            users timesheet
          </a>
        </div>
      </div>
      <div className='admins-nav-menu-boxes'>
        <div className='admins-nav-boxes-title'>
          <FontAwesomeIcon icon={faCoins} />
          <p>FORECAST</p>
        </div>
        <div className='admins-nav-boxes-link'>
          <a className='admins-nav-menu-link' href='/#' onClick={() => this.props.setLinkList('forecast')}>
            forecast
          </a>
        </div>
      </div>
      <div className='admins-nav-menu-boxes'>
        <div className='admins-nav-boxes-title'>
          <FontAwesomeIcon icon={faProjectDiagram} />
          <p>PROJECT</p>
        </div>
        <div className='admins-nav-boxes-link'>
          <a className='admins-nav-menu-link' href='/#' onClick={() => this.props.setLinkList('project')}>
            project
          </a>
        </div>
      </div>
      <div className='admins-nav-menu-boxes'>
        <div className='admins-nav-boxes-title'>
          <FontAwesomeIcon icon={faCog} />
          <p>SETTINGS</p>
        </div>
        <div className='admins-nav-boxes-link'>
          <a className='admins-nav-menu-link' href="/#" onClick={() => this.props.setLinkList('settings')}>
            settings
          </a>
        </div>
      </div>
    </div>
  }
}

const mapDispatch = (dispatch: any) => ({
  setLinkList : dispatch.users.setLinkList,
})

export default connect(mapDispatch)(AdminsNavigationMenu);
