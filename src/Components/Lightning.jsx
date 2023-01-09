import React from 'react'

function Lightning() {
    return (
        <>
            <div className='w-60 h-40 bg-[#f5f4f4] p-2 mt-5 ml-5 rounded-lg shadow-xl flex flex-col gap-y-10 pl-7 '>

                <div className=''>
                    <h1 className='text-lg text-[#404040] font-bold' >Lightning</h1>

                </div>

                <div className='flex justify-around mr-10 '>
                    <h1 className='text-5xl text-[#5448C8] font-bold'>32</h1>
                    <button className='h-6 text-white rounded px-3  pt-[1px] bg-[#6DD0A5]'>ON</button>
                    <div>
                        <p className='font-light text-sm text-[#999999]'>Total</p>
                        <p className='font-bold text-xl text-[#676565]'>43</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Lightning