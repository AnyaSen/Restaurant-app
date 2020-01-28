import React, { useContext } from "react";
import Styles from "./Nav.module.scss";
import Button from "../Button/Button";
import { RestaurantContext } from "../../contexts/RestaurantContext";
import data from "../../data/restaurants.json";

export default function Nav() {
  const [restaurantsArr, setRestaurantsArr] = useContext(RestaurantContext);

  function handleSortAscending() {
    const newArr = restaurantsArr
      .concat()
      .sort((a, b) => (a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0));
    setRestaurantsArr(newArr);
  }
  function handleSortDescending() {
    const newArr = restaurantsArr
      .concat()
      .sort((a, b) => (a.name !== b.name ? (a.name > b.name ? -1 : 1) : 0));
    setRestaurantsArr(newArr);
  }
  const handleMix = () => {
    setRestaurantsArr(data);
  };
  return (
    <div className={Styles.nav}>
      <h1>RESTAURANTS</h1>

      <div className={Styles.btnsContainer}>
        <Button buttonText="SORT: A-Z" handleSort={handleSortAscending} />
        <Button buttonText="SORT: Z-A" handleSort={handleSortDescending} />
        <Button buttonText="MIX" handleSort={handleMix} />
      </div>
    </div>
  );
}
