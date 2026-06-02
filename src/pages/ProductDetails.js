import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import { useDispatch } from "react-redux";

import { addToCart } from "../store/cartSlice";

function ProductDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  // Fetch single product
  useEffect(() => {
    const fetchProduct =
      async () => {
        try {
          const res =
            await axios.get(
              `https://fakestoreapi.com/products/${id}`
            );

          setProduct(res.data);

          setLoading(false);
        } catch (err) {
          setError(
            "Product not found"
          );

          setLoading(false);
        }
      };

    fetchProduct();
  }, [id]);

  // Loading
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Error
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div
      style={{
        padding: "40px",
      }}
    >
      {/* Back Button */}
      <button
        onClick={() =>
          navigate("/products")
        }
        style={{
          marginBottom: "20px",
          padding: "10px 15px",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "1fr 1fr",
          gap: "40px",
          alignItems: "center",
        }}
      >
        {/* Image */}
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "50%",
            borderRadius: "12px",
          }}
        />

        {/* Product Info */}
        <div>
          <h1
            style={{
              marginBottom: "20px",
            }}
          >
            {product.title}
          </h1>

          <p
            style={{
              color: "#666",
              marginBottom: "20px",
              lineHeight: "1.7",
            }}
          >
            {product.description}
          </p>
          
          <h2
            style={{
              color: "#4f46e5",
              marginBottom: "20px",
            }}
          >
            ₹
            {product.price?.toLocaleString()}
          </h2>

          <button
            onClick={() =>
              dispatch(
                addToCart(product)
              )
            }
            style={{
              padding:
                "12px 20px",
              background:
                "#4f46e5",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;