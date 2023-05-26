import img from '../assets/images/features4.svg';

export default function Simply(){
    return(
        <>
            <div className='w-screen md:bg-purp flex flex-col items-center py-5 my-5 md:mt-0 md:p-0 justify-center overflow-hidden'>
                <div className='w-3/4 md:w-full flex flex-col md:flex-row items-center md:p-5 lg:px-20 md:justify-between'>
                    <div className='bg-purp md:w-1/2 p-5 md:p-0 rounded-tl-lg rounded-tr-lg'>
                        <h2 className='text-yello text-3xl md:text-4xl mb-2 font-bold'>Save Simply, Not Harder</h2>
                        <p className='text-white font-semibold text-sm md:text-xl'>Saving money doesn’t have to be complicated. With Saveply, you can save more without breaking a sweat. Making it easy for you to reach your financial goals.</p>
                    </div>
                    <div className='w-full md:w-1/2 shadow-xl md:shadow-none'>
                        <img src={img} alt="" className='mx-auto w-full md:w-2/3 md:rounded-lg'/>
                    </div>
                </div>
            </div>
        </>
    );
}