"use client"
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
//import {video_CT} from '/video_CT1.4'

export const Home = () => {



  return (
    <div className="conatiner bg-slate-50">

      <div className='first&second md:w-full md:flex'>

        <div className='first h-screen md:border-4 md:border-black md:max-w-lg'>
          <img className=' object-cover h-[430px] absolute' src="https://claimtherapist.com/assets/Shapes/Shape%201/Home%20Banner%20Shape%201%20Red.png" alt="photo" />
          <p className='absolute mt-32 m-3 text-white text-4xl'>
            <span>Give your patients a <span className='font-semibold'>hassle-free claim</span> and hospital experience</span>
          </p>
          <button className='absolute bg-white px-8 py-4 rounded-md mt-80 mx-3 text-base' >Get Started</button>

        </div>

        <div className='second absolute -mt-96 md:w-[50%] md:relative md:mt-0 md:border-4 md:border-black ' >
          <img className='md:relative w-28 absolute' src="https://claimtherapist.com/assets/Shapes/Shape%204/Home%20Banner%20Shape%204%20Grey.png" alt="bg-image" />
          <div className='mt-12 '>
            <div className=' md:relative absolute mt-10 h-96 w-[300px] border-y-[16px] border-x-[18px] rounded-[120px]'>
            </div>
            <img className=' -ml-5 w-96 pt-10 object-fill h-full ' src="https://claimtherapist.com/assets/images/hero/Home%20Banner.jpg" alt="bg-image" />

          </div>
        </div>

      </div>


      <p className='mt-44 font-bold text-3xl ml-[30%] md:ml-[40%] object-fill'> Without Us </p>

      <div className='third mt-28 flex flex-col md:flex-row p-4'>

        <div className="third-one md:w-[33%]">

          <div className='bg-white  shadow-md hover:translate-y-2 flex rounded-2xl mx-6 my-4 items-center space-x-2 px-6 py-3' >
            <img className='w-20' src="https://claimtherapist.com/assets/images/challenges/challenges1.png" alt="img" />
            <p>Losing patients due to non empanelment</p>
          </div>
          <div className='bg-white  shadow-md hover:translate-y-2 flex rounded-2xl mx-6 my-4 items-center space-x-2 px-6 py-3'>
            <img className='w-20' src="https://claimtherapist.com/assets/images/challenges/challenges2.png" alt="img" />
            <p>Manual pre auth process with multiple insurance at the same time</p>
          </div>
          <div className='bg-white  shadow-md hover:translate-y-2 flex rounded-2xl mx-6 my-4 items-center space-x-2 px-6 py-3'>
            <img className='w-20' src="https://claimtherapist.com/assets/images/challenges/challenges3.png" alt="img" />
            <p>Missing technological support in insurance management</p>
          </div>
          <div className='bg-white  shadow-md hover:translate-y-2 flex rounded-2xl mx-6 my-4 items-center space-x-2 px-6 py-3'>
            <img className='w-20' src="https://claimtherapist.com/assets/images/challenges/challenges4.png" alt="img" />
            <p>Prolonged discharge taking 8-10 hours or more</p>
          </div>
        </div>

        <div className="third-two md:w-[33%]">

          <video className='h-[480px] w-full object-cover' autoPlay controls muted style={{ pointerEvents: 'none' }}>
            <source src="/video_CT1.mp4" type="video/mp4" />
          </video>

        </div>

        <div className="third-three md:w-[33%]">

          <div className='bg-white  shadow-md hover:translate-y-2 flex rounded-2xl mx-6 my-4 items-center space-x-2 px-6 py-3' >
            <img className='w-20' src="https://claimtherapist.com/assets/images/challenges/challenges5.png" alt="img" />
            <p>Unpleasant patient experience</p>
          </div>

          <div className='bg-white  shadow-md hover:translate-y-2 flex rounded-2xl mx-6 my-4 items-center space-x-2 px-6 py-3'>
            <img className='w-20' src="https://claimtherapist.com/assets/images/challenges/challenges6.png" alt="img" />
            <p>Inefficient receivable management</p>
          </div>

          <div className='bg-white  shadow-md hover:translate-y-2 flex rounded-2xl mx-6 my-4 items-center space-x-2 px-6 py-3'>
            <img className='w-20' src="https://claimtherapist.com/assets/images/challenges/challenges7.png" alt="img" />
            <p>Delay in settlement from insurance company</p>
          </div>

          <div className='bg-white  shadow-md hover:translate-y-2 flex rounded-2xl mx-6 my-4 items-center space-x-2 px-6 py-3'>
            <img className='w-20' src="https://claimtherapist.com/assets/images/challenges/challenges4.png" alt="img" />
            <p>Maintaining stakeholder relationships</p>
          </div>

        </div>

      </div>

      <div className='bg-green-300 font-bold text-xl'>
        hello world
      </div>

    </div>
  )
}