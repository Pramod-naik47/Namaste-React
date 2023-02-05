import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    GetRestaurantDetails();
  }, []);

  async function GetRestaurantDetails() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.89677083799695&lng=74.8346296325326&menuId=74132"
    );
    const json = await data.json();
    setRestaurant(json?.data);
    console.log(json?.data);
  }

  if (!restaurant) return null
  return (
    <div className="restaurant-menu">
      <div>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h1>Name : {restaurant?.name}</h1>
        <h3>Area : {restaurant?.area}</h3>
        <h3>City : {restaurant?.city}</h3>
        <h3>Locality : {restaurant?.locality}</h3>
        <h3>Cost for two : {restaurant?.costForTwoMsg}</h3>
        <h3>Cost for two : {restaurant?.avgRatingString} stars</h3>
      </div>
      <div>
          <h1>Menu</h1>
          <ul>
            {Object.values(restaurant?.menu?.items).map((item) => (
              <li key={item?.id}>{item?.name}</li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default RestaurantMenu;
