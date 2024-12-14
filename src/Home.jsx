import React from 'react'
import Sidebar from './component/Sidebar'
import Header from './component/Header'
import Main from './component/main/Main'
import Table from './component/table/Table'

const Home = () => {
  return (
    <div className=' w-full bg-gray-100'>
      <div className='flex justify-between'>
        <div className=''>
          <Sidebar />
        </div>
        <div className='w-full min-h-screen flex flex-col'>
           <div className='h-[10vh]'>
              <Header />
           </div>
           <div className='w-full mb-4 '>
              <Main />
           </div>
           <div className='w-full mb-8 ' >
              <Table />
           </div>
        </div>

      </div>

    </div>
  )
}

export default Home