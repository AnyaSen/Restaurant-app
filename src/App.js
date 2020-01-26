import React from "react";
import Nav from "./components/Nav/Nav";
import RestaurantList from "./components/ReastaurantList/RestaurantList";
import "./App.scss";
import { RestaurantProvider } from "./contexts/RestaurantContext";

function App() {
  return (
    <div className="App">
      <RestaurantProvider>
        <Nav />
        <RestaurantList />
      </RestaurantProvider>
    </div>
  );
}

export default App;
