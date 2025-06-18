import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="flex-shrink-0 p-5 h-full w-[300px] bg-yellow-400 rounded-xl">
    <div className="flex justify-between items-center">
      <h3 className="px-3 py-1 bg-red-600 text-sm rounded-md">{data.category}</h3>
      <h4 className="text-sm">{data.taskDate}</h4>
    </div>
    <h2 className="text-2xl font-semibold mt-4">{data.taskTitle}</h2>
    <p className="mt-2 text-sm">
      {data.taskDescription}
    </p>
    <div className='mt-6'>
        <button className='bg-red-500 px-2 py-1 rounded-md'>Failed</button>
    </div>
  </div>
  )
}

export default FailedTask
