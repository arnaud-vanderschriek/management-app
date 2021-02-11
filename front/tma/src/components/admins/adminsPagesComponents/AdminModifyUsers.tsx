import React from 'react';

export class AdminModifyUsers extends React.Component {
  render() {
    return(
      <div id='admin-page-display'>
        <h1>Add / Modify User</h1>
        <form id='admin-page-add-user-form'>
          <label>Lastname</label>
          <input/>
          <label>Prenom</label>
          <input/>
          <label>Email</label>
          <input/>
          <label>Password</label>
          <input/>
          <label>Nom</label>
          <select>
            <option>Belgique</option>
            <option>France</option>
            <option>Allemagne</option>
            <option>Angleterre</option>
            <option>Espagne</option>
            <option>Italie</option>
          </select>
          <label>Line Supervisor</label>
          <input/>
        </form>
      </div>
    )
  }
}

export default AdminModifyUsers
