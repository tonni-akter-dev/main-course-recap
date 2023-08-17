import React from "react";
import "./Assignment8.css";
const Card = (props) => {
  const { img, name, title, time, tag1, tag2, date } = props.caffee;
  const{handleSavedBtn}=props.handleSavedBtn
  return (
    <>
      <div className="card mb-3 card_w">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} className="rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="title">
                <div>
                  <h4>{name}</h4>
                  <span>{date}</span>
                </div>
                <div>
                  <span>{time} min read</span>
                  <button onClick={()=>handleSavedBtn}>save</button>
                </div>
              </div>

              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
              <span>{tag1}</span> 
              <span style={{margin:"10px"}}>{tag2}</span> <br />
              <button>Mark as read</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
