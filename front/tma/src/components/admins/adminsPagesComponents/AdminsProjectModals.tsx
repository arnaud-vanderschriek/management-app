import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { RootDispatch, RootState } from '../../state/store';
import { connect } from 'react-redux';
import { DataProject } from '..';

interface Props  {
  dataProject: DataProject,
  isModalOpened: boolean,
  setIsModalOpened: (isModalOpened: boolean) => void,
}

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function AdminsProjectModal(props: Props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const handleClose = () => {
    props.setIsModalOpened(false)
  };

const obj = []
  obj.push(props.dataProject)

  const body = (
    <div style={modalStyle} className={classes.paper} >
      <h4 id="simple-modal-title">Informations about the project</h4>
      { obj === [] ?
      '' :
      obj.map((elem) => 
        <div>
          <p>ProjectName: {elem.projectName}</p>
          <p>ProjectCode: {elem.projectCode}</p>
          <p>Project start date{elem.startDate}</p>
          <p>Project end date: {elem.endDate}</p>
          <p>Project budget: {elem.budget}</p>
          <p>Hours allocated to the project: {elem.hours}</p>
          <p>Direct costs: {elem.directsCosts}</p>
          <p>Indirect costs: {elem.indirectsCosts}</p>
          <p>Work package: {elem.workPackagesOnProject.map((elem) => <li>{elem}</li>)}</p>
          <p>Users on Project: {elem.usersOnProject.map((elem) => <li>{elem}</li> )}</p>
        </div>
      )}
    </div>
  );

  return (
    <div className={props.isModalOpened ? 'admins-Project-modal' : 'admins-project-modal-closed'}>
      <Modal
        open={props.isModalOpened}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">

        {body}
      </Modal>
    </div>
  );
}

const mapState = (state: RootState) => ({
  dataProject: state.admin.dataProject,
})

const mapDispatch = (dispatch: RootDispatch) => ({})

export default connect(mapState, mapDispatch)(AdminsProjectModal)
