import React from "react";
import "./menu-item.styles.scss";

/**
 * A functional component named menu-item
 * receiving props from parent component Dirctory
 * props are destructured
 * Css in JS:
 * Template strings used for accomodate props(size) and css style(menu-item)
 * Css styles(backgroundImage) written to accomodate props(imageUrl) as url value
 */

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div
      className={` ${size} menu-item`}
     
    >
      <div style={{
        backgroundImage: `url(${imageUrl})`
      }}
      className='background-image'
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
