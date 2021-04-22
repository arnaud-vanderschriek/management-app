import { FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { RootDispatch, RootState } from '../../state/store';
import { UsersList } from '../index';

interface Props {
  usersList: UsersList[],
  fetchUsers: () => Promise<void>,
}

function AdminsUsers(props: Props) {
  useEffect(() => {
    props.fetchUsers()
  }, [])

  return(
    <div id='admin-page-display'>
      {props.usersList.map((elem, index) => (
        <><FormControl key={index}>
          <InputLabel htmlFor="my-input">Lastname</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" value={elem.lastname} />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl><FormControl>
            <InputLabel htmlFor="my-input">Firstname</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" value={elem.firstname} />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
          </FormControl><FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" value={elem.email} />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
          </FormControl><FormControl>
            <InputLabel htmlFor="my-input">Organisation</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" value={elem.organisation} />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
          </FormControl><FormControl>
            <InputLabel htmlFor="my-input">Phone</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" value={elem.phone} />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
          </FormControl><FormControl>
            <InputLabel htmlFor="my-input">Username</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" value={elem.username} />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
          </FormControl></>
      ))}
    </div>
  )
}

// export class AdminsUsers extends React.Component<Props> {
//   componentDidMount() {
//     this.props.fetchUsers();
//     console.log(this.props.usersList, 'userslist in ADminsUsers')
//   }
//   render() {
//     return (
//       <div id='admin-page-display'>
//         <h1>Users </h1>
//         <div id='admin-page-users'>
//           {this.props.usersList.map(( elem, index) =>
//             <form key={index} id='admin-page-users-form'>
//               <label>Firstname: </label>
//               <input type='text' value={elem.firstname}/>
//               <label>Lastname: </label>
//               <input type='text' value={elem.lastname}/>
//               <label>email: </label>
//               <input type='text' value={elem.email}/>
//               <label>Organisation: </label>
//               <input type='text' value={elem.organisation}/>
//               <label>Phone: </label>
//               <input type='text' value={elem.phone}/>
//               <label>Username: </label>
//               <input type='text' value={elem.username}/>
//             </form>
//           )}
//         </div>
//       </div>
//     )
//   }
// }

const mapState = (state: RootState) => ({})

const mapDispatch = (dispatch: RootDispatch) => ({
  fetchUsers: dispatch.admin.fetchUsers,
})


export default connect(mapState, mapDispatch)(AdminsUsers)
