import React from "react";
import { connect } from "react-redux";
import { RootState } from "../state/store";

interface Props {
  isModalOpened: boolean,
  setIsModalOpened: (isModalOpened: boolean) => Promise<void>
}

export class UserPagePopup extends React.Component<Props> {

  closeUserPage = () => {
    this.props.setIsModalOpened(false);
  }

  render() {
    console.log(this.props.isModalOpened);
    return(
      <div id={this.props.isModalOpened ? 'userPage-Popup' : 'userPage-Popup-hide'}>
        <div id='button-box'>
          <button className='userPage-button' type='submit' onClick={() => this.closeUserPage()}>x</button>
        </div>
          <h4>Commentary</h4>
          <textarea id='userPagePopupTextarea'></textarea>
         <div>
           <button type='submit'>envoyer</button>
         </div>
      </div>
    );
  }
}

const mapState = (state: RootState) => ({
  isModalOpened: state.users.isModalOpened,
})

const mapDispatch = (dispatch: any) => ({
  setIsModalOpened: dispatch.users.setIsModalOpened
})

export default connect(mapState, mapDispatch)(UserPagePopup);