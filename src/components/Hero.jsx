import React from 'react';
import img1 from '../assets/images/heroimg.svg';

const Hero = ()=>{
    return(
        <>
            <div className='p-5 lg:px-20 w-screen lg:h-screen flex flex-col items-center justify-center'>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <div className='flex flex-col md:w-1/2'>
                        <div className='font-bold text-5xl lg:text-6xl my-4'>
                            <h2 className='w-2/3'>Join the Savings</h2>
                            <h2 className='text-purp'>Revolution!</h2>
                        </div>
                        <p className='font-semibold text-lg mb-4'>Save more money and earn simply and securely with Saveply. With Saveply, you can take control of your financial future and enjoy peace of mind knowing your money is working for you. Start your journey to financial freedom today with <span className='text-purp'>Saveply.</span></p>
                        <div className='md:hidden'>
                            <img src={img1} alt="hero" className='mx-auto w-full sm:w-2/3'/>
                        </div>
                        <h3 className='text-purp capitalize font-bold text-3xl my-6'>Join Our Waitlist </h3>
                        <form action="/" className='border-2 border-purp w-fit flex gap-1 rounded-lg'>
                            <input type="text" placeholder='Enter Email to join waitlist' className='p-2 py-4 sm:p-4 
                            focus:outline-none text-sm sm:text-base'/>
                            <button className='bg-purp hover:bg-[#9A208C] text-sm lg:text-base text-white px-4 m-1 rounded-lg'>Join Waitlist</button>
                        </form>
                    </div>
                    <div className='hidden md:block md:w-1/2 lg:text-center'>
                        <img src={img1} alt="hero" className='mx-auto w-full'/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;