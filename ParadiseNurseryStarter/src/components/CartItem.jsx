import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {items.length === 0 && <p>Your cart is empty</p>}

      {items.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.img} alt={item.name} width="80" />

          <h4>{item.name}</h4>
          <p>R{item.price}</p>

          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: item.quantity - 1
                })
              )
            }
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: item.quantity + 1
                })
              )
            }
          >
            +
          </button>

          {item.quantity <= 1 && (
            <button onClick={() => dispatch(removeItem(item.id))}>
              Remove
            </button>
          )}
        </div>
      ))}

      <h3>Total: R{total}</h3>
    </div>
  );
}

export default CartItem;
