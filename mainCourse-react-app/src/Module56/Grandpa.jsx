import React, { createContext, useState } from "react";
import Father from "./Father";
import Uncle from "./Uncle";
import Aunty from "./Aunty";
import "./common.css";
export const RingContext = createContext("gold");
export const MoneyContext = createContext(0);
const Grandpa = () => {
  const ring = "Diamond";
  //   step 1 --create a context
  // step 2--> create a provider

  const [money, setMoney] = useState(0);

  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <p>Has money {money}</p>
      {/*  <RingContext.Provider value="Golden Ring">
        <section className="flex">
          <Father ring={ring} />
          <Uncle />
          <Aunty />
        </section>
      </RingContext.Provider> */}
      <MoneyContext.Provider value={[money, setMoney]}>
        <RingContext.Provider value="Golden Ring">
          <section className="flex">
            <Father ring={ring} />
            <Uncle />
            <Aunty />
          </section>
        </RingContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;
