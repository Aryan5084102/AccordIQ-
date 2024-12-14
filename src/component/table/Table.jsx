import React from 'react'
import TableHeader from './table-content/TableHeader'
import TableMain from './table-content/TableMain'

const Table = () => {
  return (
    <div className='flex flex-col mr-3   bg-white shadow-2xl  rounded-3xl   '>
      <div>
          <TableHeader />
      </div>
      <div>
          <TableMain />
      </div>
    </div>
  )
}

export default Table