'use client';
import React, { useState } from "react";
import Image from 'next/image'

const CollapseCard = ({ children }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className={`z-10 w-full sm:w-[60%] rounded-[20px] bg-faq mt-5 sm:mt-20 transition-all duration-[1500ms] overflow-hidden ${isExpanded ? 'h-auto max-h-[60vh]' : 'h-20 max-h-20'}`}>
            <div className={`relative transition-all duration-[1500ms] ${isExpanded ? 'h-auto max-h-60' : 'h-0 max-h-0'}`}>
                <div className="p-4 sm:p-8">
                    Lorem ipsum dolor sit amet
                </div>
                <div className={`p-6 transition-all duration-[1500ms] overflow-hidden ${isExpanded ? 'h-auto' : 'h-0'}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </div>
                <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="absolute top-4 sm:top-8 right-2 transform transition-transform duration-[800ms]"
                    style={{ transform: `rotate(${isExpanded ? '90deg' : '0deg'})` }}
                >
                    <span className="w-6 h-6 sm:w-10 sm:h-10 bg-[url('/Arrow-Right.svg')]"></span>
                    <Image
                        src="/Arrow-Right.svg"
                        alt="reason"
                        width={100}
                        height={100}
                        className="w-auto h-auto"
                    />
                </button>
            </div>
        </div>
    );
};

export default CollapseCard;