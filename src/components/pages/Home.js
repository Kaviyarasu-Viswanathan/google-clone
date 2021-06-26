import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="header__left">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="header__right">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>

          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body"></div>
    </div>
  );
}

export default Home;
