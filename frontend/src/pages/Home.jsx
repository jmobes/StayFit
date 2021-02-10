import React from "react";
import "./Home.css";
import HeaderButton from "../components/HeaderButton";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import HistoryIcon from "@material-ui/icons/History";
import TimelineIcon from "@material-ui/icons/Timeline";
import FlagIcon from "@material-ui/icons/Flag";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <HeaderButton text="logout" />
      </div>
      <div className="home__nav">
        <ul className="home__nav__list">
          <li className="home__nav__list__item">
            <div className="home__nav__list__item--bg">
              <FitnessCenterIcon style={{ fontSize: 100 }} />
            </div>
            <p className="home__nav__list__item__text">workout</p>
          </li>
          <li className="home__nav__list__item">
            <div className="home__nav__list__item--bg">
              <HistoryIcon style={{ fontSize: 100 }} />
            </div>
            <p className="home__nav__list__item__text">history</p>
          </li>
          <li className="home__nav__list__item">
            <div className="home__nav__list__item--bg">
              <TimelineIcon style={{ fontSize: 100 }} />
            </div>
            <p className="home__nav__list__item__text">progress</p>
          </li>
          <li className="home__nav__list__item">
            <div className="home__nav__list__item--bg">
              <FlagIcon style={{ fontSize: 100 }} />
            </div>
            <p className="home__nav__list__item__text">records</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
