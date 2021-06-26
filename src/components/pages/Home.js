import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "./Search";
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
          <Avatar src="https://miro.medium.com/max/3150/1*NRHgi5WbOiSYvPxniDldyg.png" />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="home__inputContainer">
          {/* search input */}
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
