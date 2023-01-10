import "./App.css";
import { useEffect, useState } from "react";
import { getSelectedUsers } from "./modules/myhelper";
import { Card } from "./modules/Card";
let userIdList = [1, 2, 3, 4];

function App() {
  const [users, setUsers] = useState(
    new Array(userIdList.length).fill("Loading")
  );

  useEffect(() => {
    try {
      getSelectedUsers([1, 2, 3, 4]).then((data) => setUsers(data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      <div className="card-container">
        {users.map((user) => {
          return typeof user === "string" ? (
            <div className="card-internal-container" key={Math.random()}>
              <div className="loading">Loading...</div>
            </div>
          ) : (
            <Card key={user.id} data={user} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
