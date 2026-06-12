import { useState } from "react";

function ManageOrders() {
  const [orders, setOrders] =
    useState([
      {
        id: 1001,
        customer: "Kiran",
        amount: 2500,
        status: "Pending",
      },
      {
        id: 1002,
        customer: "Rahul",
        amount: 3200,
        status: "Shipped",
      },
      {
        id: 1003,
        customer: "Ramesh",
        amount: 4500,
        status: "Delivered",
      },
    ]);

  const deleteOrder = (id) => {
    setOrders(
      orders.filter(
        (order) => order.id !== id
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
        }}
      >
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>₹{order.amount}</td>
              <td>{order.status}</td>

              <td>
                <button
                  onClick={() =>
                    deleteOrder(
                      order.id
                    )
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageOrders;