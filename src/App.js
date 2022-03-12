import React, { useState } from 'react';
import './App.css';

const App=()=>{
  const [users, setUser]=useState([]);
  const loadUsers=async()=>{
    console.log("before");
    const response = await fetch ("https://api.github.com/users");
    const jsonresponse = await response.json();
    setUser(jsonresponse);
  };
  return (
    <div className='App'>
      <h1>Hello All</h1>
      <button onClick={loadUsers}>Get Data</button>
      <h2>Users :</h2>
      <ul>
        {users.map(({id, login, avatar_url, node_id})=>(
          <li key={id}>
          Name : { login }<br></br>
          Avatar : {avatar_url}{" "}<br></br>
          Node_id : {node_id}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
