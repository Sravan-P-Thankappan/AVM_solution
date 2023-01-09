import React from 'react'

function Display() {
    return (
        <>
            <div className='w-60 h-40 bg-[#f5f4f4] p-2 mt-5 ml-5 rounded-lg shadow-xl flex flex-col gap-y-10 pl-7 '>

                <div className=''>
                    <h1 className='text-lg text-[#404040] font-bold' >Displays</h1>

                </div>

                <div className='flex justify-between mr-10 '>
                    <div className='flex '>

                        <h1 className='text-5xl text-[#5448C8] font-bold'>10</h1>
                        <span className='text-lg mt-6 font-semibold text-[#5448C8]'>/16</span>
                    </div>
                    <div className='h-12 mt-1 w-[1px] bg-[#b4b0b0] text-[#999999]  '>
                    </div>
                     
                     <div className='mt-2'>
                        <p className='text-xs text-[#999999]'>On time</p>
                        <p className='text-xl text-[#999999] font-bold'>00:00</p> 
                     </div>
                </div>

            </div>
        </>
    )
}

export default Display