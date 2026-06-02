import { useEffect, useState } from "react";
import axios from "axios";

import ProductCard from "../components/ProductCard";
import ProductCategories from "../components/ProductCategories";

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://fakestoreapi.com/products"
        );

        setProducts(res.data);
      } catch (err) {
        setError(
          "Failed to fetch products"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => {
          if (
            selectedCategory ===
            "electronics"
          ) {
            return (
              product.category ===
              "electronics"
            );
          }

          if (
            selectedCategory ===
            "fashion"
          ) {
            return (
              product.category ===
                "men's clothing" ||
              product.category ===
                "women's clothing"
            );
          }

          return true;
        });

  if (loading)
    return <h2>Loading...</h2>;

  if (error)
    return <h2>{error}</h2>;

  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <ProductCategories
        setSelectedCategory={
          setSelectedCategory
        }
      />

      <h1
        style={{
          margin: "30px 0",
        }}
      >
        Products
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {filteredProducts.map(
          (product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Products;