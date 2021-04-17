import  ActualChart from './ActualChart';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { UserDataInterface } from '.';
import { UserLoginInterface } from '../login';
import CurrentChart from './CurrentChart';

interface Props {
  user: UserLoginInterface,
  userData: UserDataInterface[],
  fetchDataUser: ( data: UserLoginInterface ) => Promise<void>,
}

// function Tick() {

//   var ctx = 

//   return( 
//     <canvas id='myCharts' width='400' height='400'></canvas>
//   )
// }

export default function UsersInfo(props: Props) {
  useEffect(() => {
    props.fetchDataUser(props.user)
  }, [])


  return (
    <div>
      <div id="userInfosOptions">
        <label>Select month</label>
        <input type='month' value='Select month'></input>
        <label>Bill</label>
        <input type='checkbox'></input>
      </div>  
      <div id='usersInfo'>
        <div>
          <h1>Actual figures</h1>
          <div>
            <p>Project 1: 20% - 256hrs</p>
            <p>Project 2: 59% - 368hrs</p>
            <p>Project 3: 80% - 672hrs</p>
            <p>Project 4: 81% - 112hrs</p>
            <p>Project 5: 56% - 176hrs</p>
            <p>Project 6: 100% - 456hrs</p>
          </div>
        </div>
        
        {/* {props.userData.map((elem, index) => (
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
          
          <FormGroup>
            <Label for="exampleFile">File</Label>
            <Input type="file" name="file" id="exampleFile" />
          </FormGroup>
        </Form>
      ))} */}
    
      <ActualChart />
    </div>
    <div id='currentBudget'>
    <div>
    <h1>Current budget</h1>
      <div>
        <p>Budget1 - Danone: 65%</p>
        <p>Budget2 - Coca-Cola: 59%</p>
        <p>Budget3 - Guimbarde: 80%</p>
        <p>Budget4 - Billy Bike: 81%</p>
        <p>Budget5 - Nestle: 56%</p>
        <p>Budget6 - Estaminet: 100%</p>
      </div>
    </div>
    <CurrentChart />
    </div>
    </div>
    
  )
}

//  { <FormGroup>
//             <Label for="exampleSelect">Select</Label>
//             <Input type="select" name="select" id="exampleSelect">
//               <option>1</option>
//               <option>2</option>
//               <option>3</option>
//               <option>4</option>
//               <option>5</option>
//             </Input>
//           </FormGroup> */}
//         {<FormGroup>
//           <Label for="exampleSelectMulti">Select Multiple</Label>
//           <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
//             <option>1</option>
//             <option>2</option>
//             <option>3</option>
//             <option>4</option>
//             <option>5</option>
//           </Input>
//         </FormGroup> }
// export class UsersInfo extends React.Component<Props> {
//   componentDidMount = () => { 
//     this.props.fetchDataUser(this.props.user);
//   }

//   render() {
//     var ctx = ReactDOM.render(element, document.getElementById('chartInfos').getContext('2d'));
//     var myChart = new Chart(ctx, {
//       type: 'bar',
//       data: {
//           labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//           datasets: [{
//               label: '# of Votes',
//               data: [12, 19, 3, 5, 2, 3],
//               backgroundColor: [
//                   'rgba(255, 99, 132, 0.2)',
//                   'rgba(54, 162, 235, 0.2)',
//                   'rgba(255, 206, 86, 0.2)',
//                   'rgba(75, 192, 192, 0.2)',
//                   'rgba(153, 102, 255, 0.2)',
//                   'rgba(255, 159, 64, 0.2)'
//               ],
//               borderColor: [
//                   'rgba(255, 99, 132, 1)',
//                   'rgba(54, 162, 235, 1)',
//                   'rgba(255, 206, 86, 1)',
//                   'rgba(75, 192, 192, 1)',
//                   'rgba(153, 102, 255, 1)',
//                   'rgba(255, 159, 64, 1)'
//               ],
//               borderWidth: 1
//           }]
//       },
//       options: {
//           scales: {
//               y: {
//                   beginAtZero: true
//               }
//           }
//       }
//   });
//       console.log(this.props.userData, 'zaezaea')
//     return (
//       // <div id="user-page-display">
//       //   <h1>PAGE INFOS EN CONSTRUCTION</h1>
//         // {/* {this.props.userData.map((elem, index) => (
//         //   <form key={index}>
//         //     <input value={elem.lastname}/>
//         //     <input value={elem.firstname}/>
//         //     <input value={elem.start_date}/>
//         //     <input value={elem.end_date}/>
//         //     <input value={elem.email}/>
//         //     <input value={elem.legalhours}/>
//         //     <input value={elem.contracthours}/>
//         //     <input value={elem.organisation}/>
//         //   </form>
//         //   )
//         //   )} */}

//           <div>
//             {this.props.userData.map((elem, index) => (
//               <Form key={index}>
//                 <FormGroup>
//                 <Label for="exampleEmail">Email</Label>
//                 <Input value={elem.email} type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="example">Lastname</Label>
//                 <Input value={elem.lastname} type="text" name="password" id="examplePassword" placeholder="password placeholder" />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="example">Firstname</Label>
//                 <Input value={elem.firstname} type="text" name="password" id="examplePassword" placeholder="password placeholder" />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="example">Organisation</Label>
//                 <Input value={elem.organisation} type="text" name="password" id="examplePassword" placeholder="password placeholder" />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="example">Legal hours</Label>
//                 <Input value={elem.legalhours} type="text" name="password" id="examplePassword" placeholder="password placeholder" />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="example">Contractual hours</Label>
//                 <Input value={elem.contracthours} type="text" name="password" id="examplePassword" placeholder="password placeholder" />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="example">start date</Label>
//                 <Input value={elem.start_date} type="text" name="password" id="examplePassword" placeholder="password placeholder" />
//               </FormGroup> <FormGroup>
//                 <Label for="example">end date</Label>
//                 <Input value={elem.end_date} type="text" name="password" id="examplePassword" placeholder="password placeholder" />
//               </FormGroup>
//                 {/* <FormGroup>
//                   <Label for="exampleSelect">Select</Label>
//                   <Input type="select" name="select" id="exampleSelect">
//                     <option>1</option>
//                     <option>2</option>
//                     <option>3</option>
//                     <option>4</option>
//                     <option>5</option>
//                   </Input>
//                 </FormGroup> */}
//               {/* <FormGroup>
//                 <Label for="exampleSelectMulti">Select Multiple</Label>
//                 <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
//                   <option>1</option>
//                   <option>2</option>
//                   <option>3</option>
//                   <option>4</option>
//                   <option>5</option>
//                 </Input>
//               </FormGroup> */}
//               <FormGroup>
//                 <Label for="exampleFile">File</Label>
//                 <Input type="file" name="file" id="exampleFile" />
//               </FormGroup>
             
//     </Form>
//             ))}
//             <canvas id="chartInfos" width="400" height="400"></canvas>
//     </div>
//     )
//   }
// }

// const mapState = (state: RootState) => ({
//   user: state.auth.user,
//   usersData: state.users.usersData,
// })

// const mapDispatch = (dispatch: RootDispatch) => ({
//   fetchDataUser: dispatch.users.fetchDataUser
// })

// export default connect(mapState, mapDispatch)(UsersInfo);