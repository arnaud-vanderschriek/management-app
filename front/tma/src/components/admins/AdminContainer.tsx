import React from "react"
import { connect } from 'react-redux';
import { RootDispatch, RootState } from '../state/store';
import AdminsPages from "./AdminsPages"
import { AdminsNavigationMenu } from './AdminsNavigationMenu';

interface Props {
  linkList: string,
  setLinkList: (data: string) => void,
}

export class AdminContainer extends React.Component<Props> {
  render() {
    return (
      <div id='admins-page-container'>
        <AdminsNavigationMenu setLinkList={this.props.setLinkList}/>
        <AdminsPages />
      </div>

    )
  }
}
const mapState = (state: RootState) => ({
  linkList: state.admin.linkList,
})

const mapDispatch = (dispatch: RootDispatch) => ({
  setLinkList: dispatch.admin.setLinkList,
})

export default connect(mapState, mapDispatch)(AdminContainer);
