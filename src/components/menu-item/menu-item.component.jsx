import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";

/**
 * A functional component named menu-item
 * receiving props from parent component Dirctory
 * props are destructured
 * Css in JS:
 * Template strings used for accomodate props(size) and css style(menu-item)
 * Css styles(backgroundImage) written to accomodate props(imageUrl) as url value.
 * Passing in linkUrl on every ecommerce categories as a received props 
 * and match with Router component after getting router history with "withRouter" wrapped when 
 * exporting component.
 */

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      className={` ${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
