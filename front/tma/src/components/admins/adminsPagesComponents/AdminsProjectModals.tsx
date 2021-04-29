// import React from "react";
// import '../styles/admin.css'

// export default function AdminsProjectModal(props: Props) {
  
//   const closeModal = () => {
//     props.setIsModalOpened(false)
//   }
//   console.log(props.state, "??????")
//   return (
//     <div className={props.isModalOpened ? 'admins-Project-modal' : 'admins-project-modal-closed' }>
//     <button id='admins-project-modal-button' onClick={() => closeModal()}>x</button>
//     {/* {props.state.map((elem, index) => 
//     <div>{elem}</div> */}
//     {/* )} */}
    
//     </div>
//   )
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useEffect } from 'react';

interface Props  {
  isModalOpened: boolean,
  setIsModalOpened: (isModalOpened: boolean) => void,
  state: {},
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

export default function AdminsProjectModal(props: Props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  // const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    props.setIsModalOpened(false)
  };

  const body = (
    <div style={modalStyle} className={classes.paper} >
      <h2 id="simple-modal-title">Informations about the project</h2>
      <p id="simple-modal-description">
      </p>
      {/* {props.state} */}
      {/* <SimpleModal /> */}
    </div>
  );

  return (
    <div className={props.isModalOpened ? 'admins-Project-modal' : 'admins-project-modal-closed'}>
      {/* <button type="button" onClick={handleOpen}>
        Open Modal
      </button> */}
      <Modal
        open={props.isModalOpened}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}