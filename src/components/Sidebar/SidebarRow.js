import React from "react";

import "./SidebarRow.css";
import { Avatar } from "@material-ui/core";

function SidebarRow({ title, src, Icon }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon className="sidebarRow_icon" />}
      <p>{title}</p>
    </div>
  );
}

export default SidebarRow;
