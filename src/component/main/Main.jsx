import React from 'react'
import Contract from '../main/main-content/Contract'
import Task from '../main/main-content/Task'
import Calender from '../main/main-content/Calender'


const Main = () => {
  return (
    <div className='flex gap-5 w-full pr-3'>
      <div><Contract /></div>
      <div><Task /></div>
      <div className='w-full'><Calender /></div>
    </div>
  )
}

export default Main