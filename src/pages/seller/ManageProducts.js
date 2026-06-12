import { useEffect, useState } from "react";

function ManageProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch(
      "https://fakestoreapi.com/products"
    );

    const data = await res.json();
    setProducts(data);
  };

  const deleteProduct = (id) => {
    const filteredProducts = products.filter(
      (product) => product.id !== id
    );

    setProducts(filteredProducts);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Manage Products</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "contain",
              }}
            />

            <h4>{product.title}</h4>

            <p>
              ₹
              {Math.round(
                product.price * 85
              )}
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <button>
                Edit
              </button>

              <button
                onClick={() =>
                  deleteProduct(
                    product.id
                  )
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageProducts;