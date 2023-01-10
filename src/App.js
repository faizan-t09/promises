import { useEffect, useState } from "react";
import { getAllUsers, getUserById, getSelectedUsers } from "./modules/myhelper";
import {Card} from "./modules/Card"
let userIdList = [1,2,3,4]

function App() {
  const [users, setUsers] = useState(new Array(userIdList.length).fill("Loading"));
  
  useEffect(() => {
    console.log("Called useEffect");
    // getUserById(1).then((data) => setUsers(data));
    getSelectedUsers([1,2,3,4]).then(data=>setUsers(data));
  }, []);

  return (
    <div>
      <h1>All up and running</h1>
      {users.map((user)=>{return <p>{typeof user === "string"? user :<Card data={user}/>}</p>})}
    </div>
  );
}

export default App;
