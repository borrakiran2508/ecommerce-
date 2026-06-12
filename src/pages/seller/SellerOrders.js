import { useState } from "react";

function SellerOrders() {
  const [orders, setOrders] = useState([
    {
      id: 1001,
      customer: "Rahul",
      total: 2500,
      status: "Pending",
    },
    {
      id: 1002,
      customer: "Kiran",
      total: 4200,
      status: "Shipped",
    },
    {
      id: 1003,
      customer: "Ramesh",
      total: 1800,
      status: "Delivered",
    },
  ]);

  const updateStatus = (
    id,
    status
  ) => {
    setOrders(
      orders.map((order) =>
        order.id === id
          ? { ...order, status }
          : order
      )
    );
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Manage Orders</h1>

      <table
        style={{
          width: "100%",
          marginTop: "20px",
          borderCollapse:
            "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>

              <td>
                {order.customer}
              </td>

              <td>
                ₹{order.total}
              </td>

              <td>
                {order.status}
              </td>

              <td>
                <select
                  value={
                    order.status
                  }
                  onChange={(e) =>
                    updateStatus(
                      order.id,
                      e.target.value
                    )
                  }
                >
                  <option>
                    Pending
                  </option>

                  <option>
                    Processing
                  </option>

                  <option>
                    Shipped
                  </option>

                  <option>
                    Delivered
                  </option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SellerOrders;