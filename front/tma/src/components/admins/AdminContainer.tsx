import React from "react"
import { connect } from 'react-redux';
import { RootDispatch, RootState } from '../state/store';
import AdminsPages from "./AdminsPages"
import { AdminsNavigationMenu } from './AdminsNavigationMenu';
import { UsersList } from './index';
import { useEffect } from "react";

interface Props {
  linkList: string,
  usersList: UsersList[],
  setLinkList: (data: string) => void,
  fetchUsers: () => Promise<void>,
}

export function AdminContainer(props: Props) {
  // useEffect(() => {
  //   props.fetchUsers()
  // }, []);

  return (
    <div>
      {/* <AdminsNavigationMenu setLinkList={this.props.setLinkList} /> */}
      <AdminsPages />
    </div>
  )
}

// export class AdminContainer extends React.Component<Props> {
//   componentDidMount() {
//     this.props.fetchUsers();
//     console.log(this.props.linkList, "zaeazeazeaxxfdfs")
//   }

//   render() {
//     return (
//       <div id='admins-page-container'>
//         {/* <AdminsNavigationMenu setLinkList={this.props.setLinkList} /> */}
//         <AdminsPages />
//       </div>

//     )
//   }
// }
const mapState = (state: RootState) => ({
  linkList: state.admin.linkList,
  usersList: state.admin.usersList
})

const mapDispatch = (dispatch: RootDispatch) => ({
  setLinkList: dispatch.admin.setLinkList,
  fetchUsers: dispatch.admin.fetchUsers,
})

export default connect(mapState, mapDispatch)(AdminContainer);
