import React from 'react';
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import TaskCard from './TaskCard'


function App() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="font-bold text-4xl">Smarter Tasks</h1>
        <p className='text-gray-700'><b>Project:</b>  Project  </p>
      </div>
      <div className="flex justify-center mt-8">
        <div className="border p-4 rounded-xl">
          <h1 className="font-bold text-3xl mb-3 text-gray-800">Pending</h1>
          <TaskCard title="Build the website with static content" dueDate="11th April" assigneeName="Rohit S"/>
          <TaskCard title="Add a blog" dueDate="22nd March" assigneeName="Rohit M"/>
        </div>
        <div className="border p-4 rounded-xl ml-4">
          <h1 className="font-bold text-3xl mb-3 text-gray-800">Done</h1>
          <TaskCard title="Design the mockup" completedAtDate="10th April" assigneeName="Rohit M"/>
          <TaskCard title="Get the approval from principal" completedAtDate="20th April" assigneeName="Ajay S"/>
        </div>
      </div>
    </div>
  );
}

export default App

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
