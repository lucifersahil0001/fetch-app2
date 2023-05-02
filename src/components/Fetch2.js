import React, { useState } from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      {users.map(user => <UserCard user={user} key={user.id} />)}
    </div>
  );
}

const App = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setUsers(data);
  }

  return (
    <div className="app">
      <button onClick={getUsers}>Get Users</button>
      <UserList users={users} />
    </div>
  );
}

export default Fetch2;