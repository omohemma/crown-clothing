import React from "react";
import MenuItem from "../../components/menu-item/menu-item.component";
import "./homepage.styles.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <MenuItem title={"HATS"} subtitle={"SHOP NOW"} />
        <MenuItem title={"JACKETS"} subtitle={"SHOP NOW"} />
        <MenuItem title={"SNICKERS"} subtitle={"SHOP NOW"} />
        <MenuItem title={"WOMENS"} subtitle={"SHOP NOW"} />
        <MenuItem title={"MENS"} subtitle={"SHOP NOW"} />
      </div>
    </div>
  );
};

export default Homepage;
