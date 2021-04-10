import { faEnvelopeOpenText, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { connect } from "react-redux";
import { 
  Navbar, 
  NavbarBrand, 
  NavbarToggler, 
  Collapse, 
  Nav, 
  NavItem, 
  NavLink, 
  UncontrolledDropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem, 

  Button
} from "reactstrap";
import { UserLoginInterface } from "../login";
import  NavbarMailingPopup from "../navbar/NavbarMailingPopup";
import { RootState } from "../state/store";

interface Props {
  list: UserLoginInterface;
  isModalOpened: boolean,
  logout: () => Promise<void>,
  setIsModalOpened: (isModalOpened: boolean) => Promise<void>
}

export class Navbar2Container extends React.Component<Props> {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">{this.props.list.status} : {this.props.list.username}</NavbarBrand>
          <NavbarToggler onClick={() => this.props.setIsModalOpened(true)} />
          <Collapse isOpen={this.props.isModalOpened} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavItem>
              <Button id='navbar-mail-button' onClick={() => this.props.setIsModalOpened(true)}>
                <FontAwesomeIcon icon={faEnvelopeOpenText} />
              </Button>
            </NavItem>
            <NavItem>
              <Button id='navbar-logout-button' onClick={() => this.props.logout()}>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </Button> 
            </NavItem>
          </Collapse>
        </Navbar>
        {/* <NavbarMailingPopup list={this.props.list}/> */}
      </div>
    )
  }
}

const mapState = (state: RootState) => ({
  list: state.auth.user,
  isModalOpened: state.navbar.isModalOpened,
}) 

const mapDispatch = (dispatch: any) => ({
  logout: dispatch.auth.logout,
  setIsModalOpened: dispatch.navbar.setIsModalOpened,
})

export default connect(mapState, mapDispatch)(Navbar2Container);