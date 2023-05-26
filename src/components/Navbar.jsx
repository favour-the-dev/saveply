import React, {useState, useEffect} from 'react';
import logo from '../assets/images/SavePly_logo.svg';

export default function Navbar(){
    const [shadow, setShadow] = useState('');
    function handleScroll(){
        if(window.scrollY > 0){
            setShadow('shadow-lg');
        }
    }
    useEffect(()=>{
        window.addEventListener(scroll, handleScroll);

        return ()=>{
            window.removeEventListener(scroll, handleScroll);
        }
    })
    return(
        <>
            <div className={`w-screen bg-purp sticky top-[0px] z-40 text-white p-5 lg:px-20 ${shadow}`}>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center text-sm md:text-base font-semibold gap-1 uppercase cursor-pointer'><img src={logo} alt="our-log" className='w-6 md:w-8'/>Saveply</div>
                    <a href="/"><button className='bg-white text-purp font-medium capitalize py-1 px-4 rounded-sm text-xs md:text-base hover:bg-[#FFFFDF]'>Join waitlist</button></a>
                </div>
            </div>
        </>
    );
}