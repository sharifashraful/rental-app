import React, { useState }  from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import ReturnForm from "../Forms/ReturnForm";
import {
  useModalContainerStyles,
  modalContainerStyle,
} from "./modalContainerStyles";
import { RentalGridContext } from '../../contexts/RentalGridProvider'

const useStyles = makeStyles((theme) => ({
  buttonColor: {
    color: 'white',
    borderColor: 'white',
    marginRight: 10,
  },
}));

export default function ReturnButton() {
	const classes = useStyles();
  const modalClasses = useModalContainerStyles();
  const [open, setOpen] = React.useState(false);
  const [modalStyle] = useState(modalContainerStyle);
  const [ state, dispatch ] = React.useContext(RentalGridContext)

	const openReturnModal = () => {
    if(state.selectedRow) {
      setOpen(true);
    } else {
      alert('Please select rental grid row..')
    }
    
  };

  const handleClose = () => {
    setOpen(false);
  };
  
	return (
    <div>
  		<Button 
        variant="outlined" 
        className={classes.buttonColor}
        onClick={openReturnModal}
     	>
        Return
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={modalClasses.paper}>
          <ReturnForm 
            closeModal={handleClose} 
            name={state.selectedRow?.name} 
            mileage={state.selectedRow?.mileage} 
          />
        </div>
      </Modal>
    </div>
	)
}