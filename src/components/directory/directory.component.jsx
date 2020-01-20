import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

const DirectoryItem = () => {
  return (
    <div className="directory-menu">
      <MenuItem title={"HATS"} subtitle={"SHOP NOW"} />
      <MenuItem title={"JACKETS"} subtitle={"SHOP NOW"} />
      <MenuItem title={"SNICKERS"} subtitle={"SHOP NOW"} />
      <MenuItem title={"WOMENS"} subtitle={"SHOP NOW"} />
      <MenuItem title={"MENS"} subtitle={"SHOP NOW"} />
    </div>
  );
};

export default DirectoryItem;
