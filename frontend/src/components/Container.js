import React from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
function Container() {
  return (
    <div>
      <div className='grid md:grid-cols-2 frid-cols-1 gap-6 bg-green-100 border border-blue-500'>
        <div>
           <TaskList/>
        </div>
        <div>
          <TaskForm/>
        </div>
      </div>
    </div>
  )
}

export default Container
