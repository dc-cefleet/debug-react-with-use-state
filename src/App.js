import React from 'react';
import './App.css';
import Card from "./Card";
import {users as AllUsers} from "./data.js";

function App() {

  return (
    <div class="App">
      <div class="cards">
        {AllUsers.map(user=><Card user={AllUsers} />)}
      </div>
    </div>
  );
}

export default App;
