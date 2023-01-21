import { IMG_CDN_URL } from "../constant";

export const  RestaurantCard = ({name, cuisines, cloudinaryImageId, lastMileTravelString}) => {
    return (
      <div className="restaurant-card">
        <img
          src={IMG_CDN_URL+cloudinaryImageId}
          alt="Tandoor express"
        ></img>
        <div className="restaurant-card-info">
          <h2>{name}</h2>
          <h3>{cuisines?.join(", ")}</h3>
          <h4>{lastMileTravelString}</h4>
        </div>
      </div>
    );
}