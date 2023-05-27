import img from '../assets/images/whychoose1.svg';
import img2 from '../assets/images/whychoose2.jpg';
import img3 from '../assets/images/whychoose3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export default function WhyChoose(){
    return(
        <>
            <div className="w-screen shadow-md my-4 py-8 p-5 lg:px-20 flex flex-col items-center justify-around gap-8 overflow-hidden">
                <h2 className="w-full text-center text-3xl md:text-4xl mb-4">Why Saveply?</h2>
                <div className='flex w-full'>
                    <Swiper
                        spaceBetween={1}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide>
                        <div className='bg-purp flex items-center justify-between md:gap-2 rounded-lg p-4 md:p-8'>
                            <div className='w-1/2'>
                                <h2 className='text-sm md:text-4xl font-bold text-yello mb-2'>Secure and Reliable</h2>
                                <p className='text-xs md:text-xl text-white font-semibold'>
                                SAVEPLY uses up-to-date encryption and security measures to protect the savings, informations and transactions of our users. Users can be assured that their funds are safe and secure.
                                </p>
                            </div>
                            <div className='w-1/2'><img src={img} alt="" className='mx-auto w-full md:w-2/3'/></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-yello flex items-center justify-between md:gap-2 rounded-lg p-4 md:p-8'>
                            <div className='w-1/2'>
                                <h2 className='text-sm md:text-4xl font-bold text-black mb-2'>Easy and Convenient</h2>
                                <p className='text-xs md:text-xl text-white font-semibold'>
                                At SAVEPLY, we understand the value of convenience in managing your finances. That's why we have designed our platform to make it easy for you to save and track your progress towards your financial goals.
                                </p>
                            </div>
                            <div className='w-1/2'>
                            <a href="https://www.freepik.com/free-vector/files-sent-concept-illustration_11121750.htm#query=easy%20and%20convenient%20illustration&position=4&from_view=search&track=ais"><img src={img2} alt="" className='mx-auto w-full md:w-2/3'/></a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-black flex items-center justify-between md:gap-2 rounded-lg p-4 md:p-8'>
                            <div className='w-1/2'>
                                <h2 className='text-sm md:text-4xl font-bold text-purp mb-2'>Inclusivity</h2>
                                <p className='text-xs md:text-xl text-white font-semibold'>
                                SAVEPLY caters for every demographic of the African population by providing our services both offline and online thereby representing everyone from the Tech-savvy Tech-bro to Luddite market woman.
                                </p>
                            </div>
                            <div className='w-1/2'>
                            <a href="https://www.freepik.com/free-vector/skilled-nurse-elderly-people-getting-around-clock-nursing-care-nursing-home-nursing-residential-care-physical-therapy-service-concept-bright-vibrant-violet-isolated-illustration_10780630.htm#query=young%20and%20old%20illustration%20purple&position=4&from_view=search&track=ais"><img src={img3} alt="" className='mx-auto w-full'/></a>
                            </div>
                        </div>
                    </SwiperSlide>
                    </Swiper>
                </div>
                <div className='w-full text-center'><button className='w-1/2 md:w-[30%] p-4 mx-auto bg-black text-white rounded-lg hover:bg-[#191825]'>Join waitlist</button></div>
            </div>
        </>
    );
}