import React from "react";
import type { Node } from "react";
import { DataGrid } from "@material-ui/data-grid";
import ToolBar from "./ToolBar";
import { RentalGridContext } from '../../contexts/RentalGridProvider'

const columns = [
  { field: "id", headerName: "Id", width: 120, hide: true },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "mileage",
    headerName: "Mileage",
    type: "number",
    width: 170,
  },
  {
    field: "durability",
    headerName: "Durability",
    type: "number",
    width: 150,
  },
  {
    field: "rentalFees",
    headerName: "Rental Fees",
    type: "number",
    width: 200,
  },
];

const RentalGrid: () => Node = (props) => {
	const [ state, dispatch ] = React.useContext(RentalGridContext)
	
  return (
    <div style={{ height: 400, width: "100%" }}>
      <ToolBar />
      <DataGrid 
      	rows={state.records} 
      	columns={columns} 
      	pageSize={5} 
      	onRowClick={({row})=>{
      		dispatch({ type: "selection_row", row: row })
      	}}
      />
    </div>
  );
};

export default RentalGrid;
