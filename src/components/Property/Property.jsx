import React from "react";
import "./Property.css";
import data from "../../utils/districts.json";
import {
  MdCall,
  MdLocationPin
} from "react-icons/md";

function Property() {
  const oldId = parseInt(localStorage.getItem("Id")) - 1;
  const list = localStorage.getItem("category");
  const newId = parseInt(localStorage.getItem("newId"));

  const propertyName = data[oldId].category[list][newId].name;
  const propertyAddress = data[oldId].category[list][newId].address;
  const propertyContact = data[oldId].category[list][newId].contact;
  const propertyLocation = data[oldId].category[list][newId].location;
  console.log(propertyLocation)

  return (
    <div className="wrapper">
      <div className="flexColStart paddings innerWidth property-container">
        <img src="./astro1.jpg" />

        <div className="flexCenter property-details">
          <div className="flexColStart left">
            <div className="flexStart head">
              <span className="primaryText">{propertyName}</span>
            </div>

            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} />
              <span className="secondaryText">{propertyAddress}</span>
            </div>
            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdCall size={20} />
              <span className="secondaryText">{propertyContact}</span>
            </div>
          </div>

          <div className="right">
            <a href={propertyLocation} target="_blank" rel="noopener">
              <button className="button">Locate in GoogleMaps</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Property;
