function ManageUsers() {
  const users = [
    {
      id: 1,
      name: "Kiran",
      email: "kiran@gmail.com",
      role: "Customer",
    },
    {
      id: 2,
      name: "Rahul",
      email: "rahul@gmail.com",
      role: "Seller",
    },
    {
      id: 3,
      name: "Admin",
      email: "admin@gmail.com",
      role: "Admin",
    },
  ];

  return (
    <div style={{ padding: "30px" }}>
      <h1>Manage Users</h1>

      <table
        style={{
          width: "100%",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageUsers;