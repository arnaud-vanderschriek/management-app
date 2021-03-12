import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RootDispatch, RootState } from '../../state/store';
import { UsersList } from '../index';

interface Props {
  usersList: UsersList[],
  fetchUsers: () => Promise<void>,
}

// export function AdminsUsers(props: Props) {
//   useEffect(() => {
//     props.fetchUsers()
//   })

//   return (
//     <div id='admin-page-display'>
//     <h1>Users </h1>
//     <div id='admin-page-users'>
//       {props.usersList.map(( elem, index) =>
//         <form key={index} id='admin-page-users-form'>
//           <label>Firstname: </label>
//           <input type='text' value={elem.firstname}/>
//           <label>Lastname: </label>
//           <input type='text' value={elem.lastname}/>
//           <label>email: </label>
//           <input type='text' value={elem.email}/>
//           <label>Organisation: </label>
//           <input type='text' value={elem.organisation}/>
//           <label>Phone: </label>
//           <input type='text' value={elem.phone}/>
//           <label>Username: </label>
//           <input type='text' value={elem.username}/>
//         </form>
//       )}
//     </div>
//   </div>
//   )
// }

export class AdminsUsers extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchUsers();
    console.log(this.props.usersList, 'userslist in ADminsUsers')
  }
  render() {
    return (
      <div id='admin-page-display'>
        <h1>Users </h1>
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

const mapState = (state: RootState) => ({})

const mapDispatch = (dispatch: RootDispatch) => ({
  fetchUsers: dispatch.admin.fetchUsers,
})


export default connect(mapState, mapDispatch)(AdminsUsers)
