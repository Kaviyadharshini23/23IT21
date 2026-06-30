import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzdHVkZW50cHJvZmVzc29yQGV4YW1wbGUuY29tIiwiZXhwIjoxNzgyODAwNDczLCJpYXQiOjE3ODI3OTk1NzMsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJhNDk1YzFlZC0yN2FmLTQ1MjYtYmQwZC02YzE5YzVkMjZmYzYiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJrYXZpeWEgZGhhcnNoaW5pIiwic3ViIjoiYTVkYmI0MzAtZDQ5Yy00MDQxLWI4OWItYjYwM2QwMjk5MTBjIn0sImVtYWlsIjoic3R1ZGVudHByb2Zlc3NvckBleGFtcGxlLmNvbSIsIm5hbWUiOiJrYXZpeWEgZGhhcnNoaW5pIiwicm9sbE5vIjoic3R1ZGVudHByb2Zlc3NvciIsImFjY2Vzc0NvZGUiOiJXak55Q1QiLCJjbGllbnRJRCI6ImE1ZGJiNDMwLWQ0OWMtNDA0MS1iODliLWI2MDNkMDI5OTEwYyIsImNsaWVudFNlY3JldCI6IlJSblFxTkN6VG5CTVFkdHcifQ.nOs4aGcG_XJPYgsDltJzy1p1KJuE9IxeNuxi8zJ8l58")
      .then((response) => {
        setUsers(response.data);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>

      <h1>User List</h1>

      <input
        type="text"
        placeholder="Search User"
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><br />

      {filteredUsers.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <hr />
        </div>
      ))}

    </div>
  );
}

export default App;