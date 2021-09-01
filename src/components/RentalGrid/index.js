import React, { useEffect, useState, useRef, memo } from "react";
import type { Node } from "react";
import { DataGrid } from "@material-ui/data-grid";
import ToolBar from "./ToolBar";
import { RentalGridContext } from '../../contexts/RentalGridProvider'

const columns = [
  { field: "id", headerName: "ID", width: 90 },
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

const rows = [
  { id: 1, durability: 213, name: "Jon", mileage: 35 },
  { id: 2, durability: 213, name: "Cersei", mileage: 42 },
  { id: 3, durability: 213, name: "Jaime", mileage: 45 },
  { id: 4, durability: 213, name: "Arya", mileage: 16 },
  { id: 5, durability: 213, name: "Daenerys", mileage: null },
  { id: 6, durability: 213, name: null, mileage: 150 },
  { id: 7, durability: 213, name: "Ferrara", mileage: 44 },
  { id: 8, durability: 213, name: "Rossini", mileage: 36 },
  { id: 9, durability: 213, name: "Harvey", mileage: 65 },
];

const RentalGrid: () => Node = (props) => {
	const [ state, dispatch ] = React.useContext(RentalGridContext)
	
  return (
    <div style={{ height: 400, width: "100%" }}>
      <ToolBar />
      <DataGrid 
      	rows={rows} 
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
