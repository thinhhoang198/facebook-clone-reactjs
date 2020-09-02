import React from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import TvIcon from "@material-ui/icons/Tv";
import StoreIcon from "@material-ui/icons/Store";
import PeopleIcon from "@material-ui/icons/People";
import AddIcon from "@material-ui/icons/Add";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { Avatar, IconButton } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__leftIcon"
          src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
          alt=""
        />
        <div className="header__searchBar">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <TvIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StoreIcon fontSize="large" />
        </div>
        <div className="header__option">
          <PeopleIcon fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>Thinh</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ChatIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
