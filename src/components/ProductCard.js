import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { addToCart } from "../store/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "16px",
        background: "#fff",
        transition: "0.3s",
      }}
    >
      {/* Product Image */}
      <Link
        to={`/product/${product.id}`}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />

        {/* Title */}
        <h3
          style={{
            marginTop: "15px",
            fontSize: "18px",
          }}
        >
          {product.title}
        </h3>
      </Link>

      {/* Description */}
      <p
        style={{
          color: "#666",
          fontSize: "14px",
          margin: "10px 0",
          minHeight: "40px",
        }}
      >
        {product.description?.slice(
          0,
          60
        )}
        ...
      </p>

      {/* Price */}
      <h2
        style={{
          color: "#4f46e5",
          marginBottom: "15px",
        }}
      >
        ₹
        {product.price.toLocaleString()}
      </h2>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        {/* View Details */}
        <Link
          to={`/product/${product.id}`}
          style={{
            flex: 1,
          }}
        >
          <button
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #4f46e5",
              background: "#fff",
              color: "#4f46e5",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            View
          </button>
        </Link>

        {/* Add To Cart */}
        <button
          onClick={() =>
            dispatch(
              addToCart(product)
            )
          }
          style={{
            flex: 1,
            padding: "10px",
            border: "none",
            background: "#4f46e5",
            color: "#fff",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;