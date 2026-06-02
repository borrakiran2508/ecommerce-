import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  removeFromCart,
  updateQuantity,
} from "../store/cartSlice";

import { useNavigate } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { items } = useSelector(
    (state) => state.cart
  );

  // If cart empty
  if (items.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        <h2>
          Cart is Empty 🛒
        </h2>

        <button
          onClick={() =>
            navigate("/products")
          }
          style={{
            padding: "10px 20px",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          Back To Shop
        </button>
      </div>
    );
  }

  // Total Price
  const totalPrice =
    items.reduce(
      (acc, item) =>
        acc +
        item.price *
          item.quantity,
      0
    );

  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <h1>Shopping Cart</h1>

      {items.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            border:
              "1px solid #ddd",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "10px",
          }}
        >
          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            width="100"
          />

          {/* Product Info */}
          <div
            style={{ flex: 1 }}
          >
            <h3>{item.title}</h3>

            <p>
              ₹
              {item.price.toLocaleString()}
            </p>
          </div>

          {/* Quantity */}
          <div>
            <button
              onClick={() =>
                dispatch(
                  updateQuantity({
                    id: item.id,
                    quantity:
                      item.quantity -
                      1,
                  })
                )
              }
            >
              -
            </button>

            <span
              style={{
                margin: "0 10px",
              }}
            >
              {item.quantity}
            </span>

            <button
              onClick={() =>
                dispatch(
                  updateQuantity({
                    id: item.id,
                    quantity:
                      item.quantity +
                      1,
                  })
                )
              }
            >
              +
            </button>
          </div>

          {/* Total */}
          <h3>
            ₹
            {(
              item.price *
              item.quantity
            ).toLocaleString()}
          </h3>

          {/* Remove */}
          <button
            onClick={() =>
              dispatch(
                removeFromCart(
                  item.id
                )
              )
            }
          >
            Remove
          </button>
        </div>
      ))}

      {/* Grand Total */}
      <div
        style={{
          textAlign: "right",
          marginTop: "30px",
        }}
      >
        <h2>
          Total: ₹
          {totalPrice.toLocaleString()}
        </h2>
      </div>
    </div>
  );
}

export default Cart;