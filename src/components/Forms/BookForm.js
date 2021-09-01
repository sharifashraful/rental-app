import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
  },
  marginRight10: {
    marginRight: 10,
  },
  actionContainer: {
    marginTop: 20,
  },
}));

export default function BookForm(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    name: "gas..",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const closeForm = () => {
    if (props.closeModal) {
      props.closeModal();
    }
  };

  return (
    <div>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Book a product
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <InputLabel htmlFor="filled-name-native-simple">
              Please Select Product
            </InputLabel>
            <Select
              native
              fullWidth
              value={state.name}
              onChange={handleChange}
              inputProps={{
                name: "name",
                id: "filled-name-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              <option value={10}>dfg dfg</option>
              <option value={20}>fdg fdgdf</option>
              <option value={30}>fgf dfgfd</option>
            </Select>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="date"
              label="From"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="date"
              label="To"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
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
