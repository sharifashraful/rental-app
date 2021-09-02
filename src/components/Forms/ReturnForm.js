import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({

  marginRight10: {
    marginRight: 10,
  },
  actionContainer: {
    marginTop: 20,
  },
}));

export default function ReturnForm(props) {
  const classes = useStyles();
  const closeForm = () => {
    if (props.closeModal) {
      props.closeModal();
    }
  };

  return (
    <div>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Return a product
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="name"
              name="name"
              value={props?.name}
              label="Product Name"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="mileage"
              name="mileage"
              label="Used Mileage"
              value={props?.mileage}
              fullWidth
            />
          </Grid>

          <Grid
            container
            justify="flex-end"
            className={classes.actionContainer}
          >
            <Button
              onClick={closeForm}
              variant="outlined"
              className={classes.marginRight10}
            >
              No
            </Button>
            <Button variant="outlined">Yes</Button>
          </Grid>
        </Grid>
      </React.Fragment>
    </div>
  );
}
