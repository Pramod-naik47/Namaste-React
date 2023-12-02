import FoodItem from "./FoodItem";
import { useSelector } from "react-redux";

const Cart = () => {

const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Cart</h1>
      {cartItems.map((item, index) => {
        console.log(item);
        return (
            <FoodItem key={index} {...item}/>
        )
      })}
      
    </>
  );
};

export default Cart;
