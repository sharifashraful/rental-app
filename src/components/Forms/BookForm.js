import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import products from "../../data/products";
import { RentalGridContext } from '../../contexts/RentalGridProvider'
const activeProducts = products.filter(p => p.availability)

const useStyles = makeStyles((theme) => ({
  marginRight10: {
    marginRight: 10,
  },
  actionContainer: {
    marginTop: 20,
  },
}));

export default function BookForm(props) {
  const classes = useStyles();
  const [formData, setFormData] = React.useState({});
  const [ state, dispatch ] = React.useContext(RentalGridContext);

  const handleChange = (event) => {
    const name = event.target.name;
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  const closeForm = () => {
    if (props.closeModal) {
      props.closeModal();
    }
  };

  const getSelectedProduct = () => {
    let products = activeProducts.filter(p=> p.code === formData.code);
    return products.length?products[0]: null;
  }

  const addRecord = () => {
    const product = getSelectedProduct();
    if(product) {
      dispatch({ type: "set_record", row: { 
        id: Date.now(), 
        durability: product.durability, 
        name: product.name, 
        mileage: product.mileage 
      }})
      closeForm();
    } else {
      alert("Please select a product")
    }
  }

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
              value={formData.code}
              onChange={handleChange}
              inputProps={{
                name: "code",
                id: "filled-name-native-simple",
              }}
            >
              <option aria-label="None" value="" />              
              {activeProducts.map((p, index) => {
              	return(
              		<option key={"option-" + index} value={p.code}>{p.name} / {p.type}</option>
              	)
              })}
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
            <Button variant="outlined" onClick={addRecord}>Yes</Button>
          </Grid>
        </Grid>
      </React.Fragment>
    </div>
  );
}
