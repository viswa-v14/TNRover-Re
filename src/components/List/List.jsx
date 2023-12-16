import React from "react";
import data from "../../utils/districts.json";
import "./List.css";
import { useNavigate } from "react-router-dom";


const List = () => {
  const navigate = useNavigate();
  const list = localStorage.getItem('category');
  const id = parseInt(localStorage.getItem('Id'));

  const handleNavigation = (id)=>{
    localStorage.setItem('newId',id);
    navigate('/TNRover-Re/property');
  }

  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth container">
        <div className="c-head flexColStart">
          <span className="primaryText ">{list} in {data[id-1].name}</span>
        </div>
        <div className="c-card-container">
        {data.map((card, i) => (
            id===card.id ? 
            card.category[list].map((items,id)=>{
                return(
                <div key={id} className="c-card" onClick={() => handleNavigation(id)}>
                    <img src='./Astro.jpg' alt="" />
                    <div className="primaryText">{items.name}</div>
                </div>
                )
            })
            :
            ""
        ))}
        </div>
      </div>
    </section>
  );
};

export default List;
