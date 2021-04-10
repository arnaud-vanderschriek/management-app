import React from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { UserDataInterface } from '.';
import { UserLoginInterface } from '../login';

interface Props {
  user: UserLoginInterface,
  userData: UserDataInterface[],
  fetchDataUser: ( data: UserLoginInterface ) => Promise<void>,
}

export class UsersInfo extends React.Component<Props> {
  componentDidMount = () => { 
    this.props.fetchDataUser(this.props.user);
  }

  render() {
      console.log(this.props.userData, 'zaezaea')
    return (
      // <div id="user-page-display">
      //   <h1>PAGE INFOS EN CONSTRUCTION</h1>
        // {/* {this.props.userData.map((elem, index) => (
        //   <form key={index}>
        //     <input value={elem.lastname}/>
        //     <input value={elem.firstname}/>
        //     <input value={elem.start_date}/>
        //     <input value={elem.end_date}/>
        //     <input value={elem.email}/>
        //     <input value={elem.legalhours}/>
        //     <input value={elem.contracthours}/>
        //     <input value={elem.organisation}/>
        //   </form>
        //   )
        //   )} */}

          <div>
            {this.props.userData.map((elem, index) => (
              <Form key={index}>
                <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input value={elem.email} type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="example">Lastname</Label>
                <Input value={elem.lastname} type="text" name="password" id="examplePassword" placeholder="password placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="example">Firstname</Label>
                <Input value={elem.firstname} type="text" name="password" id="examplePassword" placeholder="password placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="example">Organisation</Label>
                <Input value={elem.organisation} type="text" name="password" id="examplePassword" placeholder="password placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="example">Legal hours</Label>
                <Input value={elem.legalhours} type="text" name="password" id="examplePassword" placeholder="password placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="example">Contractual hours</Label>
                <Input value={elem.contracthours} type="text" name="password" id="examplePassword" placeholder="password placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="example">start date</Label>
                <Input value={elem.start_date} type="text" name="password" id="examplePassword" placeholder="password placeholder" />
              </FormGroup> <FormGroup>
                <Label for="example">end date</Label>
                <Input value={elem.end_date} type="text" name="password" id="examplePassword" placeholder="password placeholder" />
              </FormGroup>
                {/* <FormGroup>
                  <Label for="exampleSelect">Select</Label>
                  <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup> */}
              {/* <FormGroup>
                <Label for="exampleSelectMulti">Select Multiple</Label>
                <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup> */}
          
              <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input type="file" name="file" id="exampleFile" />
              </FormGroup>
             
    </Form>
            ))}
    </div>
    )
  }
}

// const mapState = (state: RootState) => ({
//   user: state.auth.user,
//   usersData: state.users.usersData,
// })

// const mapDispatch = (dispatch: RootDispatch) => ({
//   fetchDataUser: dispatch.users.fetchDataUser
// })

export default UsersInfo;