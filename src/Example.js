import React from 'react'

function Example() {
  return (
    <div className='flex flex-col h-screen w-full px-10 mt-20'>
        <h1 className='mx-auto text-blue-900 font-bold text-4xl'>ABOUT US</h1>
        <div className='w-full h-12 bg-blue-900 mt-10'></div>
        <div className='flex flex-col lg:flex-row lg:flex-none w-full gap-5 mt-5'>
            <div className='flex bg-amber-500 w-full h-28'>
                <div className='w-1/3 h-full bg-gray-500'></div>
                <div className='flex flex-col w-full text-center items-center h-full justify-center'>
                    <h1 className='text-xl'>Lorem Ipsum</h1>
                    <h1 className='text-lg'>Lorem Ipsum</h1>
                </div>
            </div>
            <div className='bg-amber-500 w-full h-28'></div>
            <div className='bg-amber-500 w-full h-28'></div>
        </div>
    </div>
    
  )
}

export default Example