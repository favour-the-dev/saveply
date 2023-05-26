const Feature = ({header, body, src, order1, order2, mdorder, mdorder2})=>{
    return(
        <>
            <div className="flex flex-col md:flex-row md:justify-between items-center">
                <div className={`flex flex-col md:w-1/2 ${order1} ${mdorder}`}>
                    <h3 className="text-purp font-bold text-3xl md:text-4xl mb-2">{header}</h3>
                    <p className="font-semibold text-xl">{body}</p>
                </div>
                <div className={`md:w-1/2 ${order2} ${mdorder2}`}><img src={src} alt="" className="w-full mx-auto"/></div>
            </div>
        </>
    );
}

export default Feature;