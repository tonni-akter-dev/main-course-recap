import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Assignment8.css";
import Saved from "./Saved";
const Assignment8 = () => {
  const [caffe, setCaffe] = useState([]);
  const [saved, setSaved] = useState(0);
  useEffect(() => {
    fetch("/fakeData/cafe.json")
      .then((res) => res.json())
      .then((data) => setCaffe(data));
  }, []);

  const handleSavedBtn = () => {
    setSaved(saved + 1);
    console.log(saved)
  };
  return (
    <div>
      <h1>Knowledge Cafe</h1>
      <div className="container card_flex">
        <div>
          {caffe.map((caffee) => (
            <Card caffee={caffee} handleSavedBtn={handleSavedBtn}></Card>
          ))}
        </div>
        <div>
          <Saved handleSavedBtn={handleSavedBtn} />
        </div>
      </div>
    </div>
  );
};

export default Assignment8;
