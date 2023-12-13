import React from "react";
import "./Home.css";
import CountUp from "react-countup";

const Home = () => {
  return (
    <div>
      <section className="home-wrapper">
        <div className="paddings innerWidth flexCenter home-container">
          {/* left side */}
          <div className="flexColStart home-left">
            <div className="home-title">
              <div className="orange-circle"></div>
              <h1>
                Discover <br />
                The <br />
                Undiscovered
              </h1>
            </div>
            <div className="flexColStart home-des">
              <span className="secondaryText">
              Discover a range of amenities tailored to your preferences
              </span>
              <span className="secondaryText">
              Ease the process of locating amenities in different places by putting aside any challenges
              </span>
            </div>
            <div className="flexCenter stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={365} end={380} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Amenities</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={54} end={62} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Happy Customers</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={22} end={27} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Top Visiting Places</span>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="flexCenter home-right">
            <div className="image-container">
              <img src="./Astro.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
