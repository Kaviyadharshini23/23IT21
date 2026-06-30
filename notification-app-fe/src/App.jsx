import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://4.224.186.213/evaluation-service/register")
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