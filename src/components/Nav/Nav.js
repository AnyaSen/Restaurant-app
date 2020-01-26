import React, { useContext } from "react";
import Styles from "./Nav.module.scss";
import Button from "../Button/Button";
import { RestaurantContext } from "../../contexts/RestaurantContext";

export default function Nav() {
  const [restaurantsArr, setRestaurantsArr] = useContext(RestaurantContext);

  const handleAscending = () => {
    const sortedRestaurantArr = restaurantsArr.sort((a, b) =>
      a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0
    );
    setRestaurantsArr(sortedRestaurantArr);
  };

  const handleDescending = () => {
    const sortedRestaurantArr = restaurantsArr.sort((a, b) =>
      a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0
    );
    setRestaurantsArr(sortedRestaurantArr.reverse());
  };

  return (
    <div className={Styles.nav}>
      <h1>RESTAURANTS</h1>

      <div className={Styles.btnsContainer}>
        <Button buttonText="SORT: A-Z" handleSort={handleAscending} />
        <Button buttonText="SORT: Z-A" handleSort={handleDescending} />
      </div>
    </div>
  );
}
