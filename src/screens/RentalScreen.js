import React from "react";
import type { Node } from "react";
import RentalGrid from "../components/RentalGrid";
import { RentalGridProvider } from "../contexts/RentalGridProvider"

const RentalScreen: () => Node = (props) => {
  return (
    <RentalGridProvider>
      <RentalGrid />
    </RentalGridProvider>
  );
};

export default RentalScreen;
