import { connect } from "react-redux";
import React from "react";
import "./styles/users.css";
import { RootState } from "../state/store";

interface Props {
  isModalOpened: boolean,
  setIsModalOpened: (isModalOpened: boolean) => Promise<void>,
}

interface State {
  isModalOpened: boolean,
}

export class UsersPageElements extends React.Component<Props, State> {
  modalOpened = () => {
    this.props.setIsModalOpened(true)
  }

  render() {
    return (
      <tr>
        <td>
          <select name="project" className="project-select-input">
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
          <select name="task" className="project-select-input">
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
            <input type="checkbox" className="project-date-input" />
        </td>
        <td className="user-fields">
            <input type="text" className="project-date-input" />
        </td>
        <td className="user-fields">
            <input type="text" className="project-date-input" />
        </td>
        <td className="user-fields">
            <input type="text" className="project-date-input" />
        </td>
        <td className="user-fields">
            <input type="text" className="project-date-input" />
        </td>
        <td className="user-fields">
            <input type="text" className="project-date-input"/>
        </td>
        <td className="user-fields">
            <input type="text" className="project-date-input"/>
        </td>
        <td className="user-fields">
            <input type="text" className="project-date-input"/>
        </td>
        <td>
          <button type="button" onClick={() => this.modalOpened()}>pop-up</button>
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