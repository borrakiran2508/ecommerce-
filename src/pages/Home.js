import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const { darkMode } =
    useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: darkMode
          ? "#121212"
          : "#f5f5f5",
        minHeight: "100vh",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "60px 8%",
          gap: "40px",
        }}
      >
        {/* Left Content */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
          }}
        >
          <h1
            style={{
              fontSize: "55px",
              lineHeight: "1.2",
              marginBottom: "20px",
            }}
          >
            Discover Amazing <br />
            Products Online
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              marginBottom: "30px",
              color: darkMode
                ? "#d1d1d1"
                : "#555",
            }}
          >
            Shop the latest fashion,
            electronics, accessories,
            and more with the best
            deals and fast delivery.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/products"
              style={{
                backgroundColor: "#4f46e5",
                color: "#fff",
                padding: "14px 28px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Shop Now
            </Link>

            <Link
              to="/seller"
              style={{
                border: "2px solid #4f46e5",
                color: "#4f46e5",
                padding: "14px 28px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Become Seller
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            textAlign: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1200&auto=format&fit=crop"
            alt="Shopping"
            style={{
              width: "100%",
              maxWidth: "550px",
              borderRadius: "20px",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.2)",
            }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section
        style={{
          padding: "40px 8%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
        }}
      >
        {features.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: darkMode
                ? "#1e1e1e"
                : "#fff",
              padding: "30px",
              borderRadius: "14px",
              textAlign: "center",
              boxShadow:
                "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                fontSize: "22px",
                marginBottom: "15px",
              }}
            >
              {item.icon}
            </h2>

            <h3
              style={{
                marginBottom: "10px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: darkMode
                  ? "#cfcfcf"
                  : "#555",
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </section>

      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            h1 {
              font-size: 38px !important;
              text-align: center;
            }

            p {
              text-align: center;
            }

            section {
              text-align: center;
            }
          }
        `}
      </style>
    </div>
  );
};

const features = [
  {
    icon: "🚚",
    title: "Fast Delivery",
    desc: "Quick and safe delivery to your doorstep.",
  },
  {
    icon: "💳",
    title: "Secure Payment",
    desc: "100% secure payment methods available.",
  },
  {
    icon: "🔥",
    title: "Best Deals",
    desc: "Amazing discounts on trending products.",
  },
  {
    icon: "⭐",
    title: "Top Quality",
    desc: "Premium quality products from trusted brands.",
  },
];

export default Home;