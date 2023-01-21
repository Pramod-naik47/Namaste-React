import { useState } from "react";
import { restaurantList } from "../constant";
import { RestaurantCard } from "./RestaurantCard";


function SearchRestaturant(searchText, restaurants) {
  console.log(restaurants)
  return restaurants.filter((restaurant) => 
    restaurant.data.name.includes(searchText)
  )
}


export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurant, setRestaurant] = useState(restaurantList);
  
  return (
    <>
      <div className="search-container">
        <input type="text" 
        className="search-restaurant" 
        placeholder="Search" 
        value={searchText} 
        onChange={(e) => {
          setSearchText(e.target.value);
        }}/>

        <button onClick={ () => {
          const data = SearchRestaturant(searchText, restaurant);
          console.log(data);
          setRestaurant(data);
        }}>Search</button>
      </div>
      
      <div className="restaurent-list">
        {restaurant.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
