'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useGlobalContext } from '../../../state-management/ReactContext/GlobalContext'

const NavBar = () => {
    const [ categoryNav, setCategoryNav ] = useState(false);

    return (
        <header className='bg-[#EEEEEE] top-0 sticky z-10 mb-[20px]'>
            <div className={`h-[140px] max-md:h-[100px] relative mx-[10vw] ${categoryNav&&'border-b-2 border-[#969696]'}`}>
                <div className='mt-[50px] fixed max-lg:w-[159px] max-lg:h-[56.25px] max-md:w-[106px] max-md:h-[37.5px] max-md:mt-[50px]'>
                    <Image
                        src='/Layer_1.svg'
                        alt='Canalife Logo'
                        width={212}
                        height={75}
                        priority={true}
                        className='object-scale-down'
                    />
                </div>
                <div className='mt-[85px] flex items-center fixed left-[30vw] max-xl:left-[33vw] max-md:mt-[65px] max-md:left-[28vw]'>
                    <nav>
                        <ul>
                            <li className='grid grid-cols-2 gap-4 '>
                                <a href='#' className='max-lg:text-[13px] max-xl:text-[15px] max-md:text-[8px]'>MARIJUANA</a>
                                <a href="#" onClick={()=>setCategoryNav(true)} className={`max-lg:text-[13px] max-xl:text-[15px] max-md:text-[8px] ${categoryNav&&'border-b-[3px] border-primary'} pb-[33px]`}>MUSHROOM</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='flex justify-between mt-[80px] fixed right-[15vw] max-md:mt-[60px]'>
                    <div className='flex items-center'>
                        <div className='flex items-center bg-white rounded-lg border-r h-[30px] max-md:h-[25px]'>
                            <input 
                                type="text" 
                                className='border-l rounded-lg w-[10vw] max-[2560px]:w-[30vw] max-2xl:w-[20vw] max-xl:w-[15vw] max-lg:w-[10vw] max-[980px]:placeholder:text-xs max-md:placeholder:text-[10px] h-full placeholder:text-gray-200 placeholder:pl-2 focus-within:border-none focus:outline-none'
                                placeholder='What do you want'
                            />
                            <span className='flex items-center'>
                                <Image
                                    src='/Magnifier.svg'
                                    alt='Search'
                                    width={20}
                                    height={20}
                                    className='pr-1 mr-2 object-contain max-md:mr-0'
                                />
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <button className='text-white bg-black w-[115px] h-[30px] rounded-lg border flex items-center justify-center ml-6 max-xl:mx-2 max-xl:text-[13px] max-xl:w-[80px] max-lg:ml-6'>
                            <span className='pr-3 max-xl:pr-1'>
                                <Image
                                    src='/Icon-sign-in.svg'
                                    alt='login-icon'
                                    width={13.18}
                                    height={16.67}
                                    className='h-auto w-auto object-contain'
                                />
                            </span>
                            Sign In
                        </button>
                    </div>
                    <div className='flex fixed right-[10vw] top-[75px] max-lg:right-[7vw] max-md:top-[55px]'>
                        <ul className="flex items-center space-y-2 list-none">
                            <a className="text-gray-400 hover:text-black">
                                <li className="w-[20px] h-[20px] bg-primary bg-[url('/Wishing-list.svg')] bg-center bg-[length:20px_20px] rounded-lg bg-no-repeat p-3"></li>
                            </a>
                            <a className="text-gray-400 hover:text-black">
                                <li className="w-[20px] h-[20px] bg-primary bg-[url('/shopping-basket.svg')] bg-center bg-[length:20px_20px] rounded-lg bg-no-repeat p-3 mb-2 ml-2"></li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
            {categoryNav&&
                <div className='category-container flex justify-between w-full absolute bot-0 bg-[#EEEEEE] px-[10vw] py-[30px]' style={{ height: 'calc(50vh - 140px)' }}>
                    <nav className='ml-[5vw]'>
                        <ul className='h-full'>
                            <li className='flex flex-col h-full justify-evenly text-[15px] font-[400] leading-[22.5px]'>
                                <a href='/production-list' className='hover:font-[700]'>Mirodosing Capsules</a>
                                <a href="#" className='hover:font-[700]'>Dried Magic Mashrooms</a>
                                <a href="#" className='hover:font-[700]'>Edibles</a>
                                <a href="#" className='hover:font-[700]'>Teas</a>
                                <a href="#" className='hover:font-[700]'>Magic Mushroom Grow Kits</a>
                                <a href="#" className='hover:font-[700]'>Specials</a>
                            </li>
                        </ul>
                    </nav>
                    <Image
                        src={'/DriedMushroomMultiple.svg'}
                        alt='Dried Mushroom'
                        width={500}
                        height={500}
                        className='object-contain'
                    />
                    <button 
                        className='fixed right-[10vw] w-fit h-fit'
                        onClick={()=>setCategoryNav(false)}
                    >
                        <Image 
                            src='/CloseIcon.svg'
                            alt='Close'
                            width={20}
                            height={20}
                            className='object-contain'
                        />
                    </button>
                </div>
            }
        </header>
    )
};

export default NavBar;