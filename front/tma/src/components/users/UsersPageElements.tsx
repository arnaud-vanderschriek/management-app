import { connect } from "react-redux";
import React from "react";
import "./styles/users.css";
import { RootState } from "../state/store";

interface Props {
  isModalOpened: boolean,
  setIsModalOpened: (isModalOpened: boolean) => Promise<void>,
}

interface State {
  project: string,
  task: string,
  // checkBox: boolean,
  Lun: string,
  Ma: string,
  Mer: string,
  Jeu: string,
  Ven: string,
  Sat: string,
  Sun: string,
}

export class UsersPageElements extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      project: '',
      task: '',
      // checkBox: false,
      Lun: '',
      Ma: '',
      Mer: '',
      Jeu: '',
      Ven: '',
      Sat: '',
      Sun: '',
    
    }
  }
  modalOpened = () => {
    this.props.setIsModalOpened(true)
  }

  setTimesheet = (field: "project" | "task" | "Lun" | "Ma" | "Mer" | "Jeu" | "Ven" | "Sat" | "Sun", value: string) => {
    const state: State = {...this.state};   
    state[field] = value;
    this.setState(state)
    console.log(state)

    /* 
      Calcul des donnees "TimeSheet" pour travailleur temps plein sans congé

      nbr de mois * poucrentage calculé
      personneMonthTotal * (heure contractuelle / temps plein nat) 

      ex : 
    */

    let pm = 4
    let prestedHours = 15
    let temsPleinNat = 38
    console.log("rep: ",(prestedHours / temsPleinNat) * pm )
  
  }

  sendDataTimesheet = () => {

  }

  render() {
    return (
      <tr>
        <td>
          <select name="project" className="project-select-input" onClick={(e) => this.setTimesheet('project',(e.target as HTMLInputElement).value)}>
            <option value="">Project</option>
            <option value="project1">project1</option>
            <option value="project2">project2</option>
            <option value="project3">project3</option>
            <option value="project4">project4</option>
            <option value="project5">project5</option>
            <option value="project6">project6</option>
          </select>
        </td>
        <td>
          <select name="task" className="project-select-input" onClick={(e) => this.setTimesheet('task',(e.target as HTMLInputElement).value)}>
            <option value="">Task</option>
            <option value="task1">task1</option>
            <option value="task2">task2</option>
            <option value="task3">task3</option>
            <option value="task4">task4</option>
            <option value="task5">task5</option>
            <option value="task6">task6</option>
          </select>
        </td>
        <td>
            <input type="checkbox" className="project-date-input" 
            // onClick={(e) => this.setTimesheet('checkBox',(e.target as HTMLInputElement).value)}
            />
        </td>
        <td className="user-fields">
            <input type="text" className="project-date-input" onChange={(e) => this.setTimesheet('Lun',(e.target as HTMLInputElement).value)}/>
        </td>
        <td className="user-fields">
            <input type="text" className="project-date-input" onChange={(e) => this.setTimesheet('Ma',(e.target as HTMLInputElement).value)}/>
        </td>
        <td className="user-fields">
            <input type="text" className="project-date-input" onChange={(e) => this.setTimesheet('Mer',(e.target as HTMLInputElement).value)}/>
        </td>
        <td className="user-fields">
            <input type="text" className="project-date-input" onChange={(e) => this.setTimesheet('Jeu',(e.target as HTMLInputElement).value)}/>
        </td>
        <td className="user-fields">
            <input type="text" className="project-date-input" onChange={(e) => this.setTimesheet('Ven',(e.target as HTMLInputElement).value)}/>
        </td>
        <td className="user-fields">
            <input type="text" className="project-date-input" onChange={(e) => this.setTimesheet('Sat', (e.target as HTMLInputElement).value)}/>
        </td>
        <td className="user-fields">
            <input type="text" className="project-date-input" onChange={(e) => this.setTimesheet('Sun',(e.target as HTMLInputElement).value)}/>
        </td>
        <td>
          <button type="button" onClick={() => this.modalOpened()}>pop-up</button>
        </td>
        <td>
          <button type="button" onClick={() => this.sendDataTimesheet()}>send</button>
        </td>
      </tr>
    )
  }
}

const mapState = (state: RootState) => ({
  // isModalOpened: state.users.isModalOpened,
})

const mapDispatch = (dispatch: any) => ({
  setIsModalOpened: dispatch.users.setIsModalOpened,
})

export default connect(mapState, mapDispatch)(UsersPageElements);