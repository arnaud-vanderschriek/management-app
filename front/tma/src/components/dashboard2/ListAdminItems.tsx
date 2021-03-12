import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { connect } from 'react-redux';
import { RootDispatch } from '../state/store';

interface Props {
  setLinkList: (data: string) => void,
}

export function ListAdminItems(props: Props) {
  return(
    <div>
      <ListItem button onClick={() => props.setLinkList('users') }>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItem>
      <ListItem button onClick={() => props.setLinkList('modify') }>
        <ListItemIcon>
          <PersonAddIcon />
        </ListItemIcon>
        <ListItemText primary="Add Users" />
      </ListItem>
      <ListItem button onClick={() => props.setLinkList('timesheet') }>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="TimeSheet" />
      </ListItem>
      <ListItem button onClick={() => props.setLinkList('forecast') }>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Forecast" />
      </ListItem>
      <ListItem button onClick={() => props.setLinkList('project') }>
        <ListItemIcon>
        <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Project" />
      </ListItem>
      <ListItem button onClick={() =>  props.setLinkList('settings') }>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
      <ListSubheader inset>Saved reports</ListSubheader>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Current month" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Last month" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Year-end sale" />
      </ListItem>
  </div>
  )
};

const mapDispatch = (dispatch: RootDispatch) => ({
  setLinkList : dispatch.admin.setLinkList,
})

export default connect(mapDispatch)(ListAdminItems);


// export const secondaryListAdminItems = (
//   <div>
    
//   </div>
// );

