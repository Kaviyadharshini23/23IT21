import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://kaviyadharshini2307-4803734.postman.co/workspace/Kaviya-Dharshini's-Workspace~73d4aa5b-118a-4158-85ab-9c241deae4ef/request/49189299-eb80e40d-7eee-45b0-8275-0a135cf46fad?historyId=49189299-5992e3e2-8e14-4e8f-8cd8-b809dd234d4c&utm_source=postman&utm_medium=response_tab&utm_campaign=core&utm_content=link")
      .then((response) => {
        setUsers(response.data);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
s
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