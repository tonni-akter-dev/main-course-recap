import React from "react";
import Cousin from "./Cousin";

const Aunty = () => {
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin>Abir</Cousin>
        <Cousin>Nibir</Cousin>
      </section>
    </div>
  );
};

export default Aunty;
