import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container mx-auto">
      <div className="bg-white rounded- shadow-lg overflow-hidden">
        
        <div className="px-6 py-4 bg-blue-50">
            <div className="flex items-center">
              <img className="mr-2" src="./src/assets/react.svg"></img>
              <span className="text-sm font-semibold">Plugin Name</span>
            </div>
        </div>
        
        
        <div className="p-6 mt-6 text-left">
            <h5 className="text-xl">Create comment</h5>
            <div className="flex gap-x-2 gap-y-1 mt-5">
            <div className="selectable-button selected">🌟 Select Me</div>
            <div className="selectable-button">🌟 Select Me</div>
            <div className="selectable-button">🌟 Select Me</div>
            <div className="selectable-button">🌟 Select Me</div>
            <div className="selectable-button">🌟 Select Me</div>
            </div>
        </div>

      
        <div className="px-6 py-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Learn More
            </button>
        </div>
    </div>
      </div>
    </>
  );
}

export default App
