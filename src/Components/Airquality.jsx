import React from 'react'
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

function Airquality() {
    return (
        <>




            <div className='w-60 h-40 bg-[#f5f4f4] p-2 mt-5 ml-5 rounded-lg shadow-xl '>

                <div className='px-5'>
                    <h1 className='text-lg text-[#404040] font-bold' >Air Quality</h1>

                </div>

                <div className='flex justify-evenly mt-3 md:mr-3 lg:mr-10'>

                    <div className='w-[70px] h-[70px] bg-[#6DD0A5] rounded-full relative  '>
                        <h1 className='absolute top-5 left-4 text-4xl text-slate-50 font-bold'>72</h1>

                    </div>


                    <div className='flex flex-col mt-1'>

                        <div className=''>
                            <div className='flex items-center'>
                                <span>{<FiArrowUp size={20} style={{color:'#6DD0A5',marginTop:'2px'}} />}</span>
                                <h1 className='text-2xl font-bold text-[#999999]'>93</h1>
                            </div>
                        </div>

                        <div className="ml-2 text-xs border-b border-[#bdbbbb] text-[#999999]">
                        </div>

                        <div>
                            <div className='flex items-center'>

                                <span>{<FiArrowDown size={20} style={{color:'#de635b',marginTop:'4px'}} />}</span>
                                <h1 className='text-2xl  font-bold text-[#999999]'>61</h1>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>


    )
}

export default Airquality