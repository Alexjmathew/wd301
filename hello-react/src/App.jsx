import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskCard from './TaskCard'
import Header from './header.jsx'

function App() {

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className='flex p-4 m-4 justify-center gap-6'>
        <div className='bg-white border-2 border-gray-300 rounded-lg p-4 w-96 shadow-md'>
          <h2 className='text-xl font-semibold mb-4 text-center text-gray-700'>Pending</h2>
          <div className="space-y-3">
            <TaskCard title="Build the website with static content" dueDate="10th April" assigneeName="Rohit S"/>
            <TaskCard title="Add a blog" dueDate="10th April" assigneeName="Rohit S"/>
          </div>
        </div>
        <div className='bg-white border-2 border-gray-300 rounded-lg p-4 w-96 shadow-md'>
          <h2 className='text-xl font-semibold mb-4 text-center text-gray-700'>Done</h2>
          <div className="space-y-3">
            <TaskCard title="Design the mockup" completedAtDate="10th April" assigneeName="Rohit S"/>
            <TaskCard title="Get the approval from principal" completedAtDate="20th April" assigneeName="Ajay S"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

export default App
