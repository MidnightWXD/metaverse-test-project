'use client'
import React from "react";
import OrderTour from "@/app/component/OrderTour";
import ProductCard from '@/app/component/ProductCard'
import Image from 'next/image'
import CollapseCard from "../component/CollapseCard";

const Page = () => {
    return (
        <div className="px-[10vw]">
            <section>
                <h1 className="text-[40px] font-[400] leading-[60px] py-[10vh]">What are you looking for?</h1>
                <div className="flex flex-row ">
                    <div className="basis-1/3 p-[20px]">
                        <ProductCard className="bg-[url('/01.svg')]" productName="Visionary Brew Magic" category="Mushroom Tea" price="$25"/>
                    </div>
                    <div className="basis-1/3 p-[20px] flex justify-center">
                        <ProductCard className="bg-[url('/02.svg')]" productName="Visionary Brew Magic" category="Mushroom Tea" price="$25"/>
                    </div>
                    <div className="basis-1/3 p-[20px] flex justify-end">
                        <ProductCard className="bg-[url('/03.svg')]" productName="Visionary Brew Magic" category="Mushroom Tea" price="$25"/>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="basis-1/3 p-[20px]">
                        <ProductCard className="bg-[url('/04.svg')]" productName="Visionary Brew Magic" category="Mushroom Tea" price="$25"/>
                    </div>
                    <div className="basis-1/3 p-[20px] flex justify-center">
                        <ProductCard className="bg-[url('/05.svg')]" productName="Visionary Brew Magic" category="Mushroom Tea" price="$25"/>
                    </div>
                    <div className="basis-1/3 p-[20px] flex justify-end">
                        <ProductCard className="bg-[url('/06.svg')]" productName="Visionary Brew Magic" category="Mushroom Tea" price="$25"/>
                    </div>
                </div>
            </section>
            <section>
                <h1 className="text-[40px] font-[400] leading-[60px] text-left py-[5vw]">Explore Some <span className="font-[700] text-primary">Edibles</span></h1>
                <div className="flex flex-row">
                    <div className="text-left rounded-[70px] bg-reason-container w-[871px] h-[352px] basis-2/3 relative">
                        <div className="flex flex-col justify-evenly h-full w-[60%]">
                            <div className="basis-2/3 flex flex-col justify-center items-center">
                                <div>
                                    <h1 className="font-[600] text-[35px] leading-[52.5px]">Tomorrows Reason Why</h1>
                                    <h2 className="font-[400] text-[20px] leading-[30px]">Dosing Protocol</h2>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button className="bg-primary mb-10 px-[38px] py-[13px] rounded-[10px]">Available to Buy</button>
                            </div>
                            <Image
                                src="/KS-BLOOM-BACK.svg"
                                alt="reason"
                                width={100}
                                height={100}
                                className="absolute bottom-0 right-0 w-auto h-auto"
                            />
                        </div>
                    </div>
                    <div className="basis-1/3 pl-[40px]">
                        <Image
                            src="/BlackBerry.svg"
                            alt="reason"
                            width={100}
                            height={100}
                            className="w-auto h-auto"
                        />
                    </div>
                </div>
            </section>
            <section className="flex flex-col items-center justify-center">
                <h1 className="text-[40px] leading-[60px] text-center pt-[10vh] pb-[2vh] w-[60%] border-b-2 border-black">FAQ About <span className="text-primary font-[700]">Lorem Ipsum</span></h1>
                <CollapseCard />
                <CollapseCard />
            </section>
            <OrderTour/>
        </div>
    );
}

export default Page;