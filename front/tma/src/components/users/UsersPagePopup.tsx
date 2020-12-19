import React from "react";
import { connect } from "react-redux";
import { RootState } from "../state/store";

interface Props {
  isModalOpened: boolean,
  setIsModalOpened: (isModalOpened: boolean) => Promise<void>
}

interface State {
  text: string,
}

export class UserPagePopup extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      text: '',
    }
  }

  closeUserPage = () => {
    this.props.setIsModalOpened(false);
  }

  handleChange = (field: 'text', value: string) => {
    const state: State = {...this.state}
    state[field] = value;
    this.setState(state)
    console.log(this.state.text, 'texte ecrit');
  }

  render() {
    console.log(this.props.isModalOpened);
    return(
      <div id={this.props.isModalOpened ? 'userPage-Popup' : 'userPage-Popup-hide'}>
        <div id='button-box'>
          <button className='userPage-button' type='submit' onClick={() => this.closeUserPage()}>x</button>
        </div>
          <h4>Commentary</h4>
          <textarea id='userPagePopupTextarea' onChange={(e) => this.handleChange('text',(e.target as unknown as HTMLInputElement).value)}></textarea>
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