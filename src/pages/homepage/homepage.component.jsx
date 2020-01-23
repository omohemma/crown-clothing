import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";

/*This is Homepage Page
 **Import Directory Component and Style page with flexbox
 */

const Homepage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default Homepage;
