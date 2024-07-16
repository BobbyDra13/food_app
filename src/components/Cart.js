import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utilis/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center">
      <h1 className="p-4 mx-4 text-2xl font-bold">Cart</h1>
      <div className="w-6/12 mx-auto my-3 p-4">
        <button
          className="p-2 my-2 bg-red-500 text-black rounded-md"
          onClick={handleClearCart}>
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Cart is empty. Add some food to checkout!!!</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
