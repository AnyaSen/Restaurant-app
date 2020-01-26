import React from "react";
import Styles from "./Restaurant.module.scss";
import locationSvg from "../../../assets/img/location.svg";

export default function Restaurant({
  name,
  price,
  description,
  src,
  city,
  online
}) {
  return (
    <div className={Styles.restaurantContainer}>
      <div className={Styles.imgLocationContainer}>
        <div className={Styles.restaurantImgContainer}>
          <img src={src} alt={name} className={Styles.imgFood} />
        </div>

        <p className={Styles.location}>
          <img
            src={locationSvg}
            className={Styles.svgLocation}
            alt="location icon"
          />
          {city}
        </p>
      </div>

      <h2>{name}</h2>

      <h3>
        Delivery: <span className={Styles.price}>{price}</span>
      </h3>

      <h4 style={{ color: online ? "green" : "red" }}>
        {online ? "ONLINE!" : "OFFLINE"}
      </h4>

      <p>{description}</p>
    </div>
  );
}
