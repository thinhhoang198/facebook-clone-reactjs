import React from "react";

import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import FlagIcon from "@material-ui/icons/Flag";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StoreIcon from "@material-ui/icons/Store";
import TvIcon from "@material-ui/icons/Tv";
import FavoriteIcon from "@material-ui/icons/Favorite";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow src="src" title="Thinh D Hoang" />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={FlagIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StoreIcon} title="Marketplace" />
      <SidebarRow Icon={TvIcon} title="Videos" />
      <SidebarRow Icon={FavoriteIcon} title="Fundraisers" />
    </div>
  );
}

export default Sidebar;
