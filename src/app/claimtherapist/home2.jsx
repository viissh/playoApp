"use client"

export const Home2 = () => {

    return (
        <div className="container">
            <div className="first md:flex p-4">

                <div className="left text-xl text-white p-2 md:w-[50%] md:h-screen border-4 border-black">
                    <img className='' src="https://claimtherapist.com/assets/Shapes/Shape%201/Home%20Banner%20Shape%201%20Red.png" alt="photo" />
                    <p className='absolute ml-5 z-10 -mt-36 w-44'>
                        <span>Give your patients a <span className='font-semibold'>hassle-free claim</span> and hospital experience</span>
                    </p>
                    <button className='absolute ml-5 z-10 -mt-20' >Get Started</button>

                </div>

                <div className="right  p-2 md:w-[50%] md:right-0 md:h-screen border-black border-4">
                    {/* <img className='' src="https://claimtherapist.com/assets/Shapes/Shape%204/Home%20Banner%20Shape%204%20Grey.png" alt="bg-image" /> */}
                    <div className=' '>
                        <div className='absolute h-[400px] w-[350px] border-y-[16px] border-x-[18px] rounded-[120px]'>
                        </div>
                        <img className='object-contain' src="https://claimtherapist.com/assets/images/hero/Home%20Banner.jpg" alt="bg-image" />

                    </div>
                </div>
            </div>
        </div>
    )
}

// comment
