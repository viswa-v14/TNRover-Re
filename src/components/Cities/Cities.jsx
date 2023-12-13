import React from "react";
import data from "../../utils/districts.json";
import "./Cities.css";
import { useNavigate } from "react-router-dom";
const Cities = () => {
  const navigate = useNavigate();
  const handleNavigation=(id)=>{
    localStorage.setItem('Id',id);
    navigate('/category');
  }
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth container">
        <div className="c-head flexColStart">
          <span className="primaryText ">Top Cities</span>
        </div>
        <div className="c-card-container">
        {data.map((card) => (
          <div key={card.id} className="c-card" onClick={()=> handleNavigation(card.id)}>
            <img src={card.image} alt="" />
            <div className="primaryText">{card.name}</div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Cities;
