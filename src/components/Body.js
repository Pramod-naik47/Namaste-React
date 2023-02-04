import { useState, useEffect } from "react";
import { restaurantList } from "../constant";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";


function SearchRestaturant(searchText, restaurants) {
  return restaurants.filter((restaurant) => 
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  )
}

export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [allRestaurants, setaAllRestaurants] = useState([]);
  
  useEffect(() => {
    GetAllRestaurants();
  }, [])
  
  async function  GetAllRestaurants() {
   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89677083799695&lng=74.8346296325326&page_type=DESKTOP_WEB_LISTING");
   const json = await data.json();
   setaAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
   setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!allRestaurants) return null;
  if(filteredRestaurant?.length === 0) return <h1>No restaurant found</h1>

  return (allRestaurants.length === 0) ? <Shimmer/> : (
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
          const data = SearchRestaturant(searchText, allRestaurants);
          setFilteredRestaurant(data);
        }}>Search</button>
      </div>
      
      <div className="restaurent-list">
        {filteredRestaurant.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
