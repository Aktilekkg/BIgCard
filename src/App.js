import React from 'react';
import './App.css';
import BigCard from './BigCard'

const bigcard=[
  {h2:'Card one',p:'lorem ipsum dolor sit amet, consectetur adipicing elit, sed to eiusmud tempor incididunt ut labore etdolore magna aliqua',a:'Read More'},
  {h2:'Card two',p:'lorem ipsum dolor sit amet, consectetur adipicing elit, sed to eiusmud tempor incididunt ut labore etdolore magna aliqua',a:'Read More'},
  {h2:'Card three',p:'lorem ipsum dolor sit amet, consectetur adipicing elit, sed to eiusmud tempor incididunt ut labore etdolore magna aliqua',a:'Read More'},
]
function App() {
  return (
    <div className='App'>
      <BigCard bigcard={bigcard}/>
    </div>
  )
}
export default App;
