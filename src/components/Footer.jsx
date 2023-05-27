import twitter from '../assets/icons/twitter.svg';
import insta from '../assets/icons/ig.svg';
import lnk from '../assets/icons/linkedin.svg';
import fb from '../assets/icons/facebook.svg';

export default function Footer(){
    const Datte = new Date();
    const currentyear = Datte.getFullYear();
    return(
        <>
            <div className="w-screen p-6 lg:px-20">
                <div className='flex items-center justify-between'>
                   <div className='md:w-1/2'>
                        <div className='mb-4'>
                            <p className='font-bold text-2xl mb-2'>SAVEPLY</p>
                            <div className='flex items-center gap-4'>
                                <a href="https://twitter.com/saveplyafrica?t=bATMrkhX3MIKUOkfYfYNTg&s=09" target='blank_' className='w-8 flex'>
                                    <i className='rounded-lg w-full hover:translate-y-1 duration-200 ease-in-out shadow-md p-2'><img src={twitter} alt="" /></i>
                                </a>
                                <a href="https://www.instagram.com/saveply.ng/" target='blank_' className='flex'>
                                    <i className='rounded-lg w-8 hover:translate-y-1 duration-200 ease-in-out shadow-md p-2'><img src={insta} alt="" /></i>
                                </a>
                                <a href="https://www.linkedin.com/company/saveply/" target='blank_' className='flex'>
                                    <i className='rounded-lg w-8 hover:translate-y-1 duration-200 ease-in-out shadow-md p-2'><img src={lnk} alt="" /></i>
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=100089687713444&mibextid=ZbWKwL" target='blank_' className='flex'>
                                    <i className='rounded-lg w-8 hover:translate-y-1 duration-200 ease-in-out shadow-md p-2'><img src={fb} alt="" /></i>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className='font-bold text-xl'>Save Simply, Not Harder</h3>
                            <p className='font-medium'>Use Saveply today and say goodbye to your saving problems</p>
                            <p className='font-medium'><span>&copy; {currentyear} Saveply. All rights reserved</span></p>
                        </div>
                   </div>
                   <div className='hidden md:flex md:flex-col'>
                        <h3 className='text-purp capitalize font-bold text-3xl my-2'>Join Our Waitlist </h3>
                        <form action="/" className='border-2 border-purp w-fit flex gap-1 rounded-lg'>
                                <input type="text" placeholder='Enter Email to join waitlist' className='p-2 py-4 sm:p-4 
                                focus:outline-none text-sm sm:text-base'/>
                                <button className='bg-purp hover:bg-[#9A208C] text-sm lg:text-base text-white px-4 m-1 rounded-lg'>Join Waitlist</button>
                        </form>
                   </div>
                </div>
            </div>
        </>
    );
}