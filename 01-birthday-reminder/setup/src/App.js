import { useState } from 'react';
import data1 from './data'
import List from './List';
function App() {
  const handlebutton= ()=>{
    setdata([])
  }
  const [data,setdata]=useState(data1)
  return <div class='container'>
    <h1>{data1.length} Birthdays Today </h1>
    <List data={data}/>
    <button onClick={handlebutton}>Clear all</button>
  </div>;
}

export default App;
