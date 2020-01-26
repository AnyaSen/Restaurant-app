import React, { useContext } from "react";
import Restaurant from "./Restaurant/Restaurant";
import Styles from "./RestaurantList.module.scss";
import { RestaurantContext } from "../../contexts/RestaurantContext";
import uuid from "uuid";

export default function RestaurantList() {
  const [restaurantsArr] = useContext(RestaurantContext);

  const changeCurrencySign = cur => {
    if (cur === "EUR") {
      return "€";
    } else if (cur === "USD") {
      return "$";
    } else {
      return "€";
    }
  };

  const movePriceComma = num => {
    return (num / 100).toFixed(2);
  };

  return (
    <div className={Styles.restaurantList}>
      {restaurantsArr.map((resturant, id) => {
        const {
          image,
          name,
          description,
          currency,
          delivery_price,
          city,
          online
        } = resturant;

        return (
          <Restaurant
            key={uuid()}
            src={image}
            name={name}
            description={description}
            price={
              changeCurrencySign(currency) + movePriceComma(delivery_price)
            }
            city={city}
            online={online}
          />
        );
      })}
    </div>
  );
}
