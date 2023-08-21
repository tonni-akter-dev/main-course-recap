import React from "react";
import Myself from "./Myself";
import Sister from "./Sister";
import Brother from "./Brother";

const Father = ({ring}) => {
  return (
    <div>
      <h2>This is father</h2>
      <section className="flex">
        <Myself ring={ring}/>
        <Sister />
        <Brother />
      </section>
    </div>
  );
};

export default Father;
