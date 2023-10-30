import React from "react";
import Image from "next/image";

const ReviewHighlightCard = ({ review }) => {
    return (
        <div className="flex justify-between p-[50px] gap-[90px]">
            <div className="flex shrink gap-7 items-center">
                <Image
                    src={'/LeftArrowIcon.svg'}
                    alt='Left Arrow Icon'
                    width={30}
                    height={30}
                    className="hover:cursor-pointer"
                />
                <div className='flex flex-col justify-evenly rounded-[20px]  items-center bg-white p-[60px] w-[35vw]'>
                    <p className='text-[#F47820] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <Image
                        src={'/UserIcon2.svg'}
                        alt='UserIcon2'
                        width={30}
                        height={30}
                        className="mt-[60px]"
                    />
                    <p className="text-[15px] text-center">John Doe</p>
                </div>
            </div>
            <div className="flex shrink gap-7 items-center">
                <div className='flex flex-col justify-evenly rounded-[20px]  items-center bg-white p-[60px] w-[35vw]'>
                    <p className='text-[#F47820] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <Image
                        src={'/UserIcon1.svg'}
                        alt='UserIcon1'
                        width={30}
                        height={30}
                        className="mt-[60px]"
                    />
                    <p className="text-[15px] text-center">Mary Jane</p>
                </div>
                <Image
                    src={'/RightArrowIcon.svg'}
                    alt='Right Arrow Icon'
                    width={30}
                    height={30}
                    className="hover:cursor-pointer"
                />
            </div>
        </div>
    )
};

export default ReviewHighlightCard;