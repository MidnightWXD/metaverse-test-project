import React from "react";

const OrderTour = () => {
    return (
        <section className="w-full h-auto mt-[180px] py-[30px] px-[60px]">
            <h1 className="text-center font-[700] text-[40px] leading-[60px]">How your order works</h1>
            <h2 className="text-center leading-[30px] text-[20px]">let’s get your started</h2>
            <div className="flex justify-evenly my-[80px]">
                <div className="w-[620px] h-[556px] p-6 bg-white  rounded-[30px] shadow-[0_0px_23px_20px_rgba(0,0,0,0.03)]">
                    <h2 className="text-center font-bold mb-6">We Aim To Provide The Best Customer Experience</h2>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-6 bg-[#FFDAC0] rounded-[15px] w-[258px] h-[215px] relative">
                            <div className="w-[60px] h-[60px] bg-primary rounded-full flex items-center justify-center absolute -left-[15px] -top-[15px]">
                                <span className="text-white font-[600] text-[40px] leading-[60px]">1</span>
                            </div>
                            <div className="flex justify-center items-center w-full h-full">
                                <p className="text-center text-[25px] leading-[37.5px] font-[600] text-primary">Place your Order</p>
                            </div>
                        </div>
                        <div className="p-6 bg-primary text-white rounded-[15px] w-[258px] h-[215px] relative">
                        <div className="w-[60px] h-[60px] bg-black rounded-full flex items-center justify-center absolute -left-[15px] -top-[15px]">
                                <span className="text-white font-[600] text-[40px] leading-[60px]">2</span>
                            </div>
                            <div className="flex justify-center items-center w-full h-full">
                                <p className="text-center text-[25px] leading-[37.5px] font-[600] text-white">Receive a Confirmation Email</p>
                            </div>
                        </div>
                        <div className="p-6 bg-primary text-white rounded-[15px] w-[258px] h-[215px] relative">
                        <div className="w-[60px] h-[60px] bg-black rounded-full flex items-center justify-center absolute -left-[15px] -top-[15px]">
                                <span className="text-white font-[600] text-[40px] leading-[60px]">3</span>
                            </div>
                            <div className="flex justify-center items-center w-full h-full">
                                <p className="text-center text-[25px] leading-[37.5px] font-[600] text-white">Receive Product Tracking Details</p>
                            </div>
                        </div>
                        <div className="p-6  bg-[#FFDAC0] rounded-[15px] w-[258px] h-[215px] relative">
                        <div className="w-[60px] h-[60px] bg-primary rounded-full flex items-center justify-center absolute -left-[15px] -top-[15px]">
                                <span className="text-white font-[600] text-[40px] leading-[60px]">4</span>
                            </div>
                            <div className="flex justify-center items-center w-full h-full">
                                <p className="text-center text-[25px] leading-[37.5px] font-[600] text-primary">Get Product to your Door Step</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[620px] h-[556px] rounded-[30px] bg-[#FFDAC0] flex justify-center items-center pt-5">
                    <div className="w-[512px] h-[354px] relative bg-[url('/NorthAmericaMap.svg')] bg-no-repeat bg-contain bg-center rounded-[30px]">
                        <p className="text-[700] text-[20px] leading-[30px] absolute -top-[50px]">We are delighted  to let you know</p>
                        <div className="w-[512px] h-[354px] absolute top-0 left-0 bg-primary rounded-[30px] p-8 mix-blend-multiply">
                            <p className="font-[700] text-[62px] leading-[93px] text-white">We serve all Provinces in Canada</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-[80px]">
                <div className="w-full h-[158px] rounded-[30px] shadow-[0_4px_74px_25px_rgba(0,0,0,0.03)] flex justify-between items-center px-[50px]">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="font-[700] text-[40px] leading-[60px]">Subscribing to our newsletters</h1>
                        <h2 className="text-[20px] leading-[30px] font-[400] text-primary">Get weekly insights on new products and offers avialable</h2>
                    </div>
                    <div className="rounded-[15px] w-[430px] h-[66px] border border-solid border-primary p-2 flex justify-between">
                        <input type="text" placeholder="Your email adress" className=" placeholder:pl-3 placeholder:text-gray-100 h-full rounded-[15px] focus-within:border-none focus:outline-none"/>
                        <button className="bg-[#006838] w-[150px] h-full text-white text-center rounded-[10px]">Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderTour;