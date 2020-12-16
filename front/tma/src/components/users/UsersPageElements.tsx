import React from "react";
import "./styles/users.css";

export class UsersPageElements extends React.Component {
    render() {
        return (
            <tr>
                <td>
                <select name="project" id="project-select">
                    <option value="">--Please choose an option--</option>
                    <option value="project1">project1</option>
                    <option value="project2">project2</option>
                    <option value="project3">project3</option>
                    <option value="project4">project4</option>
                    <option value="project5">project5</option>
                    <option value="project6">project6</option>
                </select>
                </td>
                <td>
                <select name="task" id="task-select">
                    <option value="">--Please choose an option--</option>
                    <option value="task1">task1</option>
                    <option value="task2">task2</option>
                    <option value="task3">task3</option>
                    <option value="task4">task4</option>
                    <option value="task5">task5</option>
                    <option value="task6">task6</option>
                </select>
                </td>
                <td>
                    <input type="checkbox"/>
                </td>
                <td className="user-fields">
                    <input type="text"/>
                </td>
                <td className="user-fields">
                    <input type="text"/>
                </td>
                <td className="user-fields">
                    <input type="text"/>
                </td>
                <td className="user-fields">
                    <input type="text"/>
                </td>
                <td className="user-fields">
                    <input type="text"/>
                </td>
                <td className="user-fields">
                    <input type="text"/>
                </td>
                <td className="user-fields">
                    <input type="text"/>
                </td>
                <td>
                  <button type="button">pop-up</button>
                </td>
            </tr>
        )
    }
}