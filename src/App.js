import { useEffect, useState } from 'react';
import './App.css';
import ChacNoris from './components/ChacNoris';
import axios from 'axios';

function App() {
  
  // const[fact, setFact] = useState([]);

  // async function getFact() {
  //   const urlAPI = 'https://api.chucknorris.io/jokes/random'
  //   axios
  //   .request(urlAPI)
  //   .then(response => setFact(response.data.value))
    
  // }

  // useEffect(() => {
  //   getFact()
  // },[])

  return (
    <div className="App">
      {/* <h1>{fact}</h1>
      <button
       type="button"
      onClick={() =>{ 
        getFact();
        }}
        >
          New Fact</button> */}

      <ChacNoris />     
    </div>
  );
}

export default App;
