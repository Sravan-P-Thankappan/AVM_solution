import React from 'react'
import Airquality from '../Components/Airquality'
import Audio from '../Components/Audio'
import Display from '../Components/Display'
import Lightning from '../Components/Lightning'
import Temprature from '../Components/Temprature'
import logoDD from '../asset/logoDD.png'
function Home() {
    return (
        <>

            <div className='w-full  h-full flex justify-center mt-28'>
                 <img className='w-40' src={logoDD} alt="" />
            </div>

            <div className='grid grid-cols-1  sm:mt-10 md:mt-5 sm:h-[85vh] md:h-[60vh] justify-center content-center sm:grid-cols-2 md:grid-cols-6 sm:gap-2 font-rota'>
                <div className='flex justify-center md:col-span-2'>
                    <Airquality  />

                </div>
                <div className='flex justify-center md:col-span-2'>
                    <Temprature />

                </div>
                <div className='flex justify-center md:col-span-2'>
                    <Audio />

                </div>
                <div className='flex justify-center md:col-span-2 md:col-start-2 '>
                    <Display />

                </div>
                <div className='flex justify-center  md:col-span-2'>
                    <Lightning />

                </div>


            </div>


        </>
    )
}

export default Home