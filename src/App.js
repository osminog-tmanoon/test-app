import React from 'react'
import Opening from './components/Opening';
import content from './content.json'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Opening content={content}/> 
    </div>
  )
}

export default App;
