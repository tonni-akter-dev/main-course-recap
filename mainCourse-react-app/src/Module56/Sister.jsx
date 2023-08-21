import React, { useContext } from "react";
import { MoneyContext } from "./Grandpa";

const Sister = () => {
  const [money, setMoney] = useContext(MoneyContext);

  return (
    <div>
      <h2>Sister</h2>
      <p>
        <small>Grandpa money :{money}</small>
      </p>
    </div>
  );
};

export default Sister;
