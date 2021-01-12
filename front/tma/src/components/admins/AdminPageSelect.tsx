import React from "react";
import { Tab } from "./index";

interface Props {
  tab: Tab[],
}

export class AdminPageSelect extends React.Component<Props> {
  render() {
    console.log(this.props.tab, 'tableau');
    
    return (
      this.props.tab.map((elem, index) => (
        <option key={index} value={elem.value}>{elem.value}</option>
      ))
    )
  }
}

export default AdminPageSelect;