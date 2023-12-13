import React from "react";
import data from "../../utils/category.json";
import "./Category.css";
import { useNavigate } from "react-router-dom";
const Category = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem("Id");
  const handleNavigation = (name)=>{
    localStorage.setItem('category',name);
    navigate('/list');
  }
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth container">
        <div className="c-head flexColStart">
          <span className="primaryText ">Category</span>
        </div>
        <div className="c-card-container">
        {data.map((card,i) => (
          <div key={i} className="c-card" onClick={()=> handleNavigation(card.name)}>
            <img src={card.image} alt="" />
            <div className="primaryText">{card.name}</div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
