import React from "react"
import { connect } from 'react-redux';
import { RootDispatch, RootState } from '../state/store';
import AdminsPages from "./AdminsPages"
import { DataProject, UsersList } from './index';

interface Props {
  linkList: string,
  usersList: UsersList[],
  dataProject: DataProject,
  setLinkList: (data: string) => void,
  fetchUsers: () => Promise<void>,
}

export function AdminContainer(props: Props) {
  return (
    <div>
      <AdminsPages />
    </div>
  )
}

const mapState = (state: RootState) => ({
  linkList: state.admin.linkList,
  usersList: state.admin.usersList,
  dataProject: state.admin.dataProject,
})

const mapDispatch = (dispatch: RootDispatch) => ({
  setLinkList: dispatch.admin.setLinkList,
  fetchUsers: dispatch.admin.fetchUsers,
})

export default connect(mapState, mapDispatch)(AdminContainer);
