import React, { useContext } from "react";
import { RingContext } from "./Grandpa";

const Special = () => {

const ring=useContext(RingContext)

  return (
    <div>
      <h2>Special one receive the {ring}</h2>
    </div>
  );
};

export default Special;
