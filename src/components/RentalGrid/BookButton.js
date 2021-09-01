import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import BookForm from "../Forms/BookForm";
import {
  useModalContainerStyles,
  modalContainerStyle,
} from "./modalContainerStyles";

const useStyles = makeStyles((theme) => ({
  buttonColor: {
    color: "white",
    borderColor: "white",
    marginRight: 10,
  },
}));

export default function BookButton() {
  const classes = useStyles();
  const modalClasses = useModalContainerStyles();
  const [open, setOpen] = React.useState(false);
  const [modalStyle] = useState(modalContainerStyle);

  const openBookModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        className={classes.buttonColor}
        onClick={openBookModal}
      >
        Book
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={modalClasses.paper}>
          <BookForm closeModal={handleClose} />
        </div>
      </Modal>
    </div>
  );
}
