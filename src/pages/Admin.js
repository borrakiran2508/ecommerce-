function AdminDashboard() {
  return (
    <div
      style={{
        padding: "40px",
      }}
    >
      <h1
        style={{
          color: "#dc2626",
        }}
      >
        Admin Dashboard
      </h1>

      <p>
        Welcome Admin 👑
      </p>

      <div
        style={{
          marginTop: "30px",
          display: "grid",
          gap: "20px",
        }}
      >
        <div style={cardStyle}>
          👥 Manage Users
        </div>

        <div style={cardStyle}>
          🛒 Manage Orders
        </div>

        <div style={cardStyle}>
          ⚙️ Site Settings
        </div>

        <div style={cardStyle}>
          📊 Analytics
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  padding: "20px",
  borderRadius: "10px",
  background: "#fef2f2",
  fontSize: "18px",
  fontWeight: "bold",
};

export default AdminDashboard;