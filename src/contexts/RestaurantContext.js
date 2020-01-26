import React, { useState, createContext } from "react";
import data from "../data/restaurants.json";

export const RestaurantContext = createContext();

export const RestaurantProvider = props => {
  const [restaurantsArr, setRestaurantsArr] = useState(data);

  return (
    <RestaurantContext.Provider value={[restaurantsArr, setRestaurantsArr]}>
      {props.children}
    </RestaurantContext.Provider>
  );
};
