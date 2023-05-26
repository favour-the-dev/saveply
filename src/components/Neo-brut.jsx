import img from '../assets/images/heroimg2.svg';

export default function Neo(){
    return(
        <>
            <div className='w-screen bg-purp rounded-2xl mt-8 md:rounded-none flex flex-col items-center justify-center p-5 lg:px-20 overflow-hidden'>
                <div className='flex flex-col md:flex-row items-center md:justify-between'>
                    <div className='flex flex-col items-center sm:items-start md:w-1/2'>
                        <h2 className='font-bold text-yello text-3xl md:text-4xl mb-2'>The Neo-Piggybank you trust</h2>
                        <p className='font-semibold text-white text-xl'><span className='font-bold uppercase'>SAVEPLY</span> uses up-to-date encryption and security measures to protect the savings, informations and transactions of our users. Users can be assured that their funds are safe and secure.</p>
                    </div>
                    <div className='md:w-1/2 text-center'><img src={img} alt="" className='w-full md:w-2/3 mx-auto'/></div>
                </div>
            </div>
        </>
    );
}