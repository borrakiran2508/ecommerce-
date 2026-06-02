import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:3000/dashboard",
          {
            headers: {
              Authorization: token
            }
          }
        );

        setData(res.data.message);

      } catch (error) {
        alert("Unauthorized");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>{data}</p>
      <button onClick={() => {
        localStorage.removeItem("token");
        window.location.href = "/";
        }}>
        Logout
    </button>
    </div>
  );
}

export default Dashboard;