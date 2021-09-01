import React, { useEffect, useState, useRef, memo } from "react";
import type { Node } from "react";
import RentalGrid from "../components/RentalGrid";

const RentalScreen: () => Node = (props) => {
  return (
    <div>
      <RentalGrid />
    </div>
  );
};

export default RentalScreen;
