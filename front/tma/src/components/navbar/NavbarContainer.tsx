import React from "react";
import { connect } from "react-redux";
import { UserLoginInterface } from "../login";
import { RootState } from "../state/store";
import Navbar from "./Navbar";

interface Props {
  isModalOpened: boolean,
  list: UserLoginInterface;
}

export class NavbarContainer extends React.Component<Props> {
  render() {
    return (
      <Navbar list={this.props.list} />
    )
  }
}

const mapState = (state: RootState) => ({
  isModalOpened: state.navbar.isModalOpened,
})

const mapDispatch= (dispatch: any) => ({

})

export default connect(mapState, mapDispatch)(NavbarContainer);