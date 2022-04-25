import React from 'react'
import Chack from './assets/chuck.png'
import '../App.css'

function ChacNoris() {

  const getJoke = async () => {
    const res = await fetch('https://api.chucknorris.io/jokes/random')
    const random_joke = await res.json()
    document.querySelector('.joke').innerText = random_joke.value
    document.querySelector('small').style.display = 'none'
  }

  return (
    <div className='container text-center' >
      <img src={Chack} style={{width:"200px", height:"250px"}}/>
      <div className='jockes-container'>
        <p className='joke'></p>
        <small className='text-small '>Not Found</small>
      </div>
      <div></div>
      
      <button onClick={getJoke} >Generate</button>
      
    </div>
  )
}

export default ChacNoris
