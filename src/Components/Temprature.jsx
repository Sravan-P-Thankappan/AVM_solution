import React from 'react'


function Temprature() {
    return (
        <>
            <div className='w-60 h-40 bg-[#f5f4f4] p-2 mt-5 ml-5 rounded-lg shadow-xl '>

                <div className='px-5'>
                    <h1 className='text-lg text-[#404040] font-bold' >Temprature</h1>

                </div>

                <div className='flex justify-evenly mt-3 md:mr-3 lg:mr-10'>

                    <div className='w-[70px] h-[70px] bg-[#5448C8] rounded-full relative  '>


                        <h1 className='absolute top-5 left-3 text-4xl text-slate-50 font-bold'>21 </h1>
                        <span className='absolute top-7 font-thin f left-11 text-xs text-slate-50 '>o</span>
                        <span className='absolute top-8 left-[52px] font-medium text-slate-50 '>C</span>



                    </div>


                    <div className='flex flex-col mt-1'>

                        <div className=''>
                            <div className='flex items-center gap-2 '>

                                <svg id="Group_1811" className='mt-1' data-name="Group 1811" xmlns="http://www.w3.org/2000/svg" width="12.233" height="20.949" viewBox="0 0 18.233 22.949">
                                    <path id="Path_3445" data-name="Path 3445" d="M66.8,7.163c-4.1-2.492-2.175-6.01-2.093-6.156A.672.672,0,0,0,64.126,0a6.556,6.556,0,0,0-4.908,1.781c-1.961,2.019-1.87,5.161-1.832,6.5,0,.149.008.277.008.372a15.639,15.639,0,0,0,.3,2.728,11.168,11.168,0,0,1,.183,1.33c.015.38-.054.467-.057.471a.552.552,0,0,1-.315.056.754.754,0,0,1-.608-.269c-.649-.728-.694-2.714-.57-3.795a.672.672,0,0,0-.668-.75c-1.746,0-3.05,2.855-3.05,5.407a8.874,8.874,0,0,0,.717,3.493,9.272,9.272,0,0,0,1.95,2.9,9.1,9.1,0,0,0,15.565-6.393C70.844,10.743,68.427,8.152,66.8,7.163ZM61.727,21.6a7.876,7.876,0,0,1-7.771-7.772,6.8,6.8,0,0,1,.671-2.95,4.055,4.055,0,0,1,.3-.513,5.616,5.616,0,0,0,.965,3.495,2.1,2.1,0,0,0,1.613.72,1.665,1.665,0,0,0,1.344-.535c.558-.663.387-1.649.17-2.9a14.574,14.574,0,0,1-.281-2.5c0-.115,0-.252-.009-.411-.037-1.271-.113-3.916,1.452-5.527A4.736,4.736,0,0,1,63.108,1.4a6.14,6.14,0,0,0-.266,1.717c-.01,1.457.547,3.54,3.261,5.191,1.313.8,3.4,3,3.4,5.521A7.781,7.781,0,0,1,61.727,21.6Z" transform="translate(-52.611 0)" fill="#ff3b52" />
                                </svg>
                                <div className='flex gap-[1px]'>

                                    <h1 className='text-2xl font-bold text-[#999999]'>26</h1>
                                    <span className='mt-2 text-xs text-[#999999]'>0</span>
                                    <span className='mt-1 text-lg text-[#999999]'>C</span>
                                </div>
                            </div>
                        </div>

                        <div className="ml-2   text-xs border-b border-[#bdbbbb] text-[#999999]">
                        </div>

                        <div>
                            <div className='flex items-center gap-2'>

                                <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="12.901" height="20.166" viewBox="0 0 22.901 26.166">
                                    <path id="snowflake"
                                        d="M36.169,18.405l-2.658-1.534,2.3-1.358a.893.893,0,0,0-.907-1.538l-3.173,1.871-4.784-2.762,4.783-2.761,3.174,1.87a.893.893,0,0,0,.907-1.539L33.511,9.3l2.658-1.535a.893.893,0,0,0-.893-1.547L32.618,7.749l-.024-2.674a.893.893,0,1,0-1.786.016l.033,3.684-4.783,2.762V6.014L29.265,4.2a.893.893,0,1,0-.879-1.555L26.058,3.962V.893a.893.893,0,1,0-1.786,0V3.962L21.944,2.646A.893.893,0,0,0,21.065,4.2l3.207,1.813v5.523L19.489,8.775l.033-3.684a.893.893,0,0,0-.885-.9h-.008a.893.893,0,0,0-.893.885l-.024,2.674L15.055,6.215a.893.893,0,1,0-.893,1.547L16.82,9.3l-2.3,1.358a.893.893,0,1,0,.907,1.539l3.174-1.87,4.783,2.761L18.6,15.845l-3.173-1.871a.893.893,0,1,0-.907,1.538l2.3,1.358L14.162,18.4a.893.893,0,1,0,.893,1.547l2.658-1.535.024,2.674a.893.893,0,0,0,.893.885h.008a.893.893,0,0,0,.885-.9l-.033-3.684,4.783-2.762v5.523l-3.207,1.813a.893.893,0,1,0,.879,1.555L24.272,22.2v3.069a.893.893,0,1,0,1.786,0V22.2l2.328,1.316a.893.893,0,1,0,.879-1.555l-3.207-1.813V14.63l4.783,2.762-.034,3.684a.893.893,0,0,0,.885.9H31.7a.893.893,0,0,0,.893-.885l.025-2.675,2.658,1.535a.893.893,0,1,0,.893-1.547Z" transform="translate(-13.715)" fill="#3cd8e5" />
                                </svg>

                                <div className='flex gap-[1px]'>

                                    <h1 className='text-2xl  font-bold text-[#999999]'>18</h1>
                                    <span className='mt-2 text-xs text-[#999999]'>0</span>
                                    <span className='mt-1 text-lg text-[#999999]'>C</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Temprature