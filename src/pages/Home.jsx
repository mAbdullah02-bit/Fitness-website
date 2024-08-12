import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaArrowRight } from "react-icons/fa";
function Home() {
  return (
    <div>
<div>

<div className="relative  h-screen top-20 bg-no-repeat bg-center  " >
<div className="relative  h-[550px]  bg-[url('/images/h3-slider-img-1.jpg')]  bg-cover bg-no-repeat bg-center"></div>
{/* <img src="/images/h3-slider-img-1.jpg" className='w-full   bg-cover  bg-center bg-no-repeat' alt="" /> */}
<img src="/images/h1-slider-img-1.png"
 alt=""
 className="object-left-bottom object-scale-down  z-0 rotate-180 size-[800px] absolute -top-40 -right-[350px]"/>
<div className='bg-local' >
    <h1 className=' tracking-[.40em]  text-6xl text-orange-700 font-popins font-extrabold absolute top-[110px] left-[60px]'>STRONG</h1>
<h2 className='text-white uppercase absolute top-[170px] left-[120px] max-w-[300px]'>Beat the routine. Train at the Caliber of world Champions and get in the best shape of your life.</h2>
</div>

</div>
<div className=' w-[600px] bg-fixed absolute  -bottom-10'>

<div   className="relative  bg-[url('/images/h1-slider-img-2.png')] h-[220px]   bg-center bg-cover bg-no-repeat text-gray-600 opacity-5  ">
</div>
    </div>
<div>

<div className="relative w-full h-[250px] bg-[#111111] text-white flex items-center justify-center text-center">
  <div className="absolute top-[130px] transform -translate-y-1/2 w-full flex flex-col items-center">
    <h1 className="text-nowrap uppercase text-3xl font-extrabold mb-4">
      Push your limits forward
    </h1>
    <h2 className="text-gray-400 mx-10">
      Train with the best experts in bodybuilding
      field. Your results will speak to themselves.
      Try the latest exercising trends, innovative
      equipment and special nutrition plans.
    </h2>
  </div>
</div>

</div>
<div className=' flex gap-8 mx-[70px] m-20'>


<div className=' h-[150px] w-[200px] text-white justify-center text-center m-5 relative'>
<img src="/images/dumbell.png" alt="" className='mx-auto' />
<h1 className='text-nowrap '>Quality Equipment</h1>
<h2 className='text-sm font-light text-gray-400'>Experience top-quality, durable 
    fitness equipment for effective,
     reliable workouts. </h2>
</div>

<div className=' h-[150px] w-[200px] text-white justify-center text-center m-5 relative'>
<img src="/images/register.png" alt="" className='mx-auto' />
<h1 className='text-nowrap '>Healthy Nutrition Plan</h1>
<h2 className='text-sm font-light text-gray-400'>Wholesome meals, balanced nutrition, 
    fueling your body for optimal health daily </h2>
</div>
<div className=' h-[150px] w-[200px] text-white justify-center text-center m-5 relative'>
<img src="/images/shower.png" alt="" className='mx-auto' />
<h1 className='text-nowrap '>Shower Service</h1>
<h2 className='text-sm font-light text-gray-400'>Refreshing showers, clean environment, 
    rejuvenating experience, start your day fresh.</h2>
</div>
<div className=' h-[150px] w-[200px] text-white justify-center text-center m-5 relative'>
<img src="/images/Heart.png" alt="" className='mx-auto' />
<h1 className='text-nowrap '>Unique to Your Needs</h1>
<h2 className='text-sm font-light text-gray-400'>
    Personalized showers, 
    tailored to your needs, 
    refreshing and revitalizing
     every time.</h2>
</div>
</div>


</div>

<div className=' flex  '>
<div className='h-[500px] bg-[#1f1f1f] w-full relative '>

<h1 className=' text-white uppercase font-popins font-extrabold text-3xl text-wrap m-5 absolute top-[120px] left-[60px]'>Built to bring<br />
best results</h1>
<h3 className='absolute top-56 left-20 w-[350px] text-gray-300 font-extralight'>Tune up your shoulders, legs and lower back.
     Choose a workout that can improve your balance,
      strength and overall condition.
     Our team of experts will follow you
      through the whole workout process. 
      Your body will thank you.</h3>
      <button className="absolute bottom-20 left-20 px-8 pr-14 bg-[#f04b37] rounded-sm overflow-hidden flex
            text-white p-3 transition-all duration-300 ease-in-out hover:bg-[#e43e2c] group">
            Read More
            <hr className="rotate-90 h-[1px] w-[48px] absolute right-[19px] top-[22px] bg-white" />
            <FaArrowRight className="absolute right-3 bottom-4 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
        </button>
</div>
<div className='h-[500px] w-full bg-center'><img src="/images/oldmangym.jpg" alt="" /></div>

</div>

<div className="bg-[url('https://images.pexels.com/photos/17840/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-cover bg-fixed">

<Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="relative flex items-center justify-center h-[550px]  ">
                    <div className="bg-black bg-opacity-60 p-8 rounded text-center mx-5 cursor-grab">
                        <p className="text-white text-2xl font-bold mb-4">"
                            I AM AT AN AGE WHERE I JUST WANT 
                            TO BE FIT AND HEALTHY. OUR BODIES
                             ARE OUR RESPONSIBILITY! SO START 
                            CARING FOR YOUR BODY AND IT WILL 
                            CARE FOR YOU. EAT CLEAN AND WORKOUT
                            HARD."</p>
                        <p className="text-white font-semibold">Henry Walker, Nutritionist</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative flex items-center justify-center h-[550px]  ">
                    <div className="bg-black bg-opacity-60 p-8 rounded text-center mx-5 cursor-grab">
                        <p className="text-white text-2xl font-bold mb-4">
                        "SUCCESS IS NOT ABOUT PERFECTION,
                         IT'S ABOUT CONSISTENCY. 
                        EVERY SMALL STEP YOU 
                        TAKE TODAY LEADS TO A BIGGER RESULT TOMORROW. 
                        STAY COMMITTED AND KEEP MOVING FORWARD."</p>
                        <p className="text-white font-semibold">Chris Johnson, Fitness Coach</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative flex items-center justify-center h-[550px]  ">
                    <div className="bg-black bg-opacity-60 p-8 rounded text-center mx-5 cursor-grab">
                        <p className="text-white text-2xl font-bold mb-4">"
                        THE JOURNEY TO FITNESS IS NOT A 
                        DESTINATION BUT A LIFESTYLE. 
                        EMBRACE THE CHALLENGES AND REJOICE 
                        IN YOUR PROGRESS. YOUR BODY AND MIND
                         WILL THANK YOU."</p>
                        <p className="text-white font-semibold">Emily Smith, Wellness Expert</p>
                    </div>
                </div>
            </SwiperSlide>

            
        </Swiper>

</div>






 </div>

  )
}

export default Home