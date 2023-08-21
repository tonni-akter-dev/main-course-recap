import React, { useContext } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "./Grandpa";

const Uncle = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>uncle</h2>
      <p>
        <small>Grandpa money: {money}</small>
      </p>
      <button onClick={() => setMoney(money + 1000)}>Send 1000tk</button>
      <section className="flex">
        <Cousin>Akhi</Cousin>
        <Cousin>Nahida</Cousin>
      </section>
    </div>
  );
};

export default Uncle;
