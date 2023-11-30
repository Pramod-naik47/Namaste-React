import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurant = useRestaurant(id);

  if (!restaurant) return null
  return (
    <div className="restaurant-menu">
      <div>
        <img src={IMG_CDN_URL + restaurant.cards[0]?.card?.card?.info?.cloudinaryImageId} />
        <h1>Name : {restaurant.cards[0]?.card?.card?.info?.name}</h1>
        <h3>Area : {restaurant.cards[0]?.card?.card?.info?.areaName}</h3>
        <h3>City : {restaurant.cards[0]?.card?.card?.info?.city}</h3>
        <h3>Locality : {restaurant.cards[0]?.card?.card?.info?.locality}</h3>
        <h3>Cost for two : {restaurant.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
      </div>
      <div>
          <h1>Menu</h1>
          <ul>
            {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((item) => (
              <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default RestaurantMenu;
