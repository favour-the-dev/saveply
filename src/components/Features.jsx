import img1 from '../assets/images/features1.svg';
import img2 from '../assets/images/features2.svg';
import img3 from '../assets/images/features3.svg';
import Feature from '../components/Feature';
export default function Features(){
    return(
        <>
            <div className="w-screen overflow-hidden">
                <h2 className="w-full mx-auto text-center capitalize py-12 my-4 shadow-md text-4xl">Our Key Features</h2>
                <div className="w-full p-5 lg:px-20 shadow-md flex flex-col items-center justify-center">
                    <Feature 
                        header='Personal Wallet'
                        body='Our secure and user-friendly digital wallet allows you to store, send, and receive money with just a few taps on your smartphone.'
                        src={img1}
                        order1='order-1'
                        order2= 'order-2'
                        mdorder='md:order-1'
                        mdorder2 ='md:order-2'
                    />
                    <Feature 
                        header='Target Your Savings'
                        body = 'With customizable savings plans and a user-friendly interface, saving has never been this effortless'
                        src={img2}
                        order1='order-1'
                        order2 = 'order-2'
                        mdorder='md:order-2'
                        mdorder2='md:order-1'
                    />
                    <Feature 
                        header='Efficient Budget Tracking'
                        body='Say goodbye to overspending and hello to financial freedom with our easy budget planner and tracker.'
                        src={img3}
                        order1='order-1'
                        order2='order-2'
                        mdorder='md:order-1'
                        mdorder2 ='md:order-2'
                    />
                </div>
            </div>
        </>
    );
} 