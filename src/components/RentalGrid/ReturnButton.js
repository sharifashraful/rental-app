import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttonColor: {
    color: 'white',
    borderColor: 'white',
    marginRight: 10,
  },
}));

export default function ReturnButton() {
	const classes = useStyles();

	const openReturnModal = () => {
    alert('return')
  }


	return (
		<Button 
      variant="outlined" 
      className={classes.buttonColor}
      onClick={openReturnModal}
   	>
      Return
    </Button>
	)
}