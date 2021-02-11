import React from 'react';
import { UsersList } from '../index';

interface Props {
  usersList: UsersList[],
}

export class AdminsUsers extends React.Component<Props> {
  render() {
    return (
      <div id='admin-page-display'>
        <h1>Users</h1>
        <div id='admin-page-users'>
          {this.props.usersList.map(( elem, index) =>
            <form key={index} id='admin-page-users-form'>
              <label>Firstname: </label>
              <input type='text' value={elem.firstname}/>
              <label>Lastname: </label>
              <input type='text' value={elem.lastname}/>
              <label>email: </label>
              <input type='text' value={elem.email}/>
              <label>Organisation: </label>
              <input type='text' value={elem.organisation}/>
              <label>Phone: </label>
              <input type='text' value={elem.phone}/>
              <label>Username: </label>
              <input type='text' value={elem.username}/>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default AdminsUsers
