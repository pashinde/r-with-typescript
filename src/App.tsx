import React, { useState } from 'react';
import './App.css';
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string,
    url: string,
    age: number,
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: "Prashant",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz0DnVgk-2qQYe-4MgFmbMfeZfk8qqkb0yhg&usqp=CAU",
      age: 29,
      note: "asdf asdfa"
    }
  ])
  return (
    <div className="App">
      <h1>People invited</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
