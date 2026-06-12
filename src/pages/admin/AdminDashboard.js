import { Link } from "react-router-dom";

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

      <p>Welcome Admin 👑</p>

      <div
        style={{
          marginTop: "30px",
          display: "grid",
          gap: "20px",
        }}
      >
        <Link
          to="/admin/users"
          style={linkStyle}
        >
          <div style={cardStyle}>
            👥 Manage Users
          </div>
        </Link>

        <Link
          to="/admin/orders"
          style={linkStyle}
        >
          <div style={cardStyle}>
            🛒 Manage Orders
          </div>
        </Link>

        <Link
          to="/admin/settings"
          style={linkStyle}
        >
          <div style={cardStyle}>
            ⚙️ Site Settings
          </div>
        </Link>

        <Link
          to="/admin/analytics"
          style={linkStyle}
        >
          <div style={cardStyle}>
            📊 Analytics
          </div>
        </Link>
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
  color: "#000",
  cursor: "pointer",
};

const linkStyle = {
  textDecoration: "none",
};

export default AdminDashboard;