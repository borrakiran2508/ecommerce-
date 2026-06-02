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

      <p>
        Welcome Seller 🛍️
      </p>

      <div
        style={{
          marginTop: "30px",
          display: "grid",
          gap: "20px",
        }}
      >
        <div style={cardStyle}>
          📦 Manage Products
        </div>

        <div style={cardStyle}>
          🧾 Orders
        </div>

        <div style={cardStyle}>
          💰 Sales Reports
        </div>
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
};

export default SellerDashboard;