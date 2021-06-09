import React from 'react';

export function AdminsUsersTimesheet() {
  return (
    <div id='admin-page-display'>
      <label>Select year</label>
      <input type='month' />
      <label>Select month</label>
      <input type='month' />
      <label>Select project</label>
      <select>
        <option>project1</option>
        <option>project2</option>
        <option>project3</option>
        <option>project4</option>
        <option>project5</option>
        <option>project6</option>
        <option>project7</option>
      </select>
      <label>with comments</label>
      <input type='checkbox' checked/>
      <table id='tableAdminsTimesheet'>
        <thead id='theadTabelAdminsTimeSheet'>
          <div id='boxRightTheadTabelAdminsTimeSheet'>
            <p>Period:</p>
            <p>Name:</p>
            <p>type of personnel</p>
          </div>
         <div id='boxLeftTheadTabelAdminsTimeSheet'>
           <p>Hrs:</p>
           <p>Employee ref:</p>
           <p>Supervisor:</p>
         </div>
        </thead>
        <tbody id='tbodyTableAdminsTimeSheet'>
            <tr className='tbodyAdminsTimeSHeetTr'>
              <th></th>
              <th>Project1</th>
              <th>Project2</th>
              <th>Project3</th>
              <th>Project4</th>
              <th>TTL</th>
            </tr>
            <tr className='tbodyAdminsTimeSHeetTr'>
              <td>Monday 1 Oct</td>
              <td>
                <p>wp1</p>
              </td>
              <td>wp1</td>
              <td>wp1</td>
              <td>wp1</td>
              <td></td>
            </tr>
            <tr>
              <td>Thusday 2 Oct</td>
            </tr>
            <tr>
             <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
        </tbody>
        <tfoot id='tfootTabelAdminsTimeSheet'>
          <div className='boxTfoot'>
            <h4>Total:</h4>
            <h4>Carried forward:</h4>
          </div>
          <div className='boxTfoot'>
            <h4>I confirmed that the best of my knowledge, the information on this form is correct</h4>
            <p>name:</p>
            <p>date:</p>
          </div>
          <div>
            <h4>Signature of supervisor</h4>
            <p>name:</p>
            <p>date:</p>
          </div>
        </tfoot>
      </table>
    {/* fetch de toutes les timesheet présentent dans la db */}
    <button>print</button>
    </div>
  )
}

// export class AdminsUsersTimesheet extends React.Component {
//   render() {
//     return(
//       <div id='admin-page-display'>
//         <h1>TimeSheet</h1>
//         {/* commencer par pouvoir choisir entre voir toutes les timesheets rentrer entre telle date et telle date */}
//       </div>
//     )
//   }
// }

export default AdminsUsersTimesheet
