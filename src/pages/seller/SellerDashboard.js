import { Link } from "react-router-dom";

function SellerDashboard() {
  return (
    <div
      style={{
        padding: "40px",
      }}
    >
      <h1
        style={{
          color: "#16a34a",
        }}
      >
        Seller Dashboard
      </h1>

      <p>Welcome Seller 🛍️</p>

      <div
        style={{
          marginTop: "30px",
          display: "grid",
          gap: "20px",
        }}
      >
        <Link
          to="/seller/products"
          style={linkStyle}
        >
          <div style={cardStyle}>
            📦 Manage Products
          </div>
        </Link>

        <Link
          to="/seller/orders"
          style={linkStyle}
        >
          <div style={cardStyle}>
            🧾 Orders
          </div>
        </Link>

        <Link
          to="/seller/reports"
          style={linkStyle}
        >
          <div style={cardStyle}>
            💰 Sales Reports
          </div>
        </Link>

        <Link
          to="/seller/add-product"
          style={linkStyle}
        >
          <div style={cardStyle}>
            ➕ Add Product
          </div>
        </Link>
      </div>
    </div>
  );
}

const cardStyle = {
  padding: "20px",
  borderRadius: "10px",
  background: "#ecfdf5",
  fontSize: "18px",
  fontWeight: "bold",
  color: "#000",
  cursor: "pointer",
};

const linkStyle = {
  textDecoration: "none",
};

export default SellerDashboard;