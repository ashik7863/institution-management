import React from "react";
import RecentTable from "./RecentTable";
const Cards = () => {
  return (
    <div className="main-content">
      <div className="cards">
        <div className="card-single">
          <div>
            <h1>54</h1>
            <span>CITA</span>
          </div>
          <div>
            <span className="las la-laptop"></span>
          </div>
        </div>
        <div className="card-single">
          <div>
            <h1>54</h1>
            <span>DITA</span>
          </div>
          <div>
            <span className="las la-keyboard"></span>
          </div>
        </div>
        <div className="card-single">
          <div>
            <h1>54</h1>
            <span>CFAS</span>
          </div>
          <div>
            <span className="las la-file-invoice-dollar"></span>
          </div>
        </div>
        <div className="card-single">
          <div>
            <h1>162</h1>
            <span>Students</span>
          </div>
          <div>
            <span className="las la-users"></span>
          </div>
        </div>
      </div>
      <RecentTable />
    </div>
  );
};

export default Cards;
