import React from 'react';
import Image from 'next/image';

const NavBar = () => {
    return (
        <header className='bg-[#EEEEEE] flex justify-evenly h-[140px] top-0 sticky'>
            <div className='mt-[60px]'>
                <Image
                    src='/Layer_1.svg'
                    alt='Canalife Logo'
                    width={212}
                    height={75}
                />
            </div>
            <div className='mt-[50px] flex items-center'>
                <nav>
                    <ul>
                        <li className='grid grid-cols-2 gap-4'>
                            <a href='#'>CANNABIS</a>
                            <a href="#">MUSHROOM</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='flex justify-between mt-[50px]'>
                <div className='flex items-center'>
                    <div className='flex items-center bg-white rounded-lg border-r h-[30px]'>
                        <input 
                            type="text" 
                            className='border-l rounded-lg w-[400px] max-[1150px]:w-[200px] max-[980px]:w-[100px] max-[980px]:placeholder:text-xs h-full placeholder:text-gray-200 placeholder:pl-2 focus-within:border-none focus:outline-none'
                            placeholder='What do you want'
                        />
                        <span className='flex items-center'>
                            <Image
                                src='/Magnifier.svg'
                                alt='Search'
                                width={20}
                                height={20}
                                className='pr-1 mr-2'
                            />
                        </span>
                    </div>
                </div>
                <div className='flex items-center mr-5'>
                    <button className='text-white bg-black w-[115px] h-[30px] rounded-lg border flex items-center justify-center ml-6'>
                        <span className='pr-3'>
                            <Image
                                src='/Icon-sign-in.svg'
                                alt='login-icon'
                                width={13.18}
                                height={16.67}
                            />
                        </span>
                        Sign In
                    </button>
                </div>
                <div className='flex items-center'>
                    <ul className="flex items-center space-y-2 list-none">
                        <a href="#" className="text-gray-400 hover:text-black"><li className="w-[20px] h-[20px] bg-[#F47820] bg-[url('/Wishing-list.svg')] bg-center bg-[length:20px_20px] rounded-lg bg-no-repeat p-3"></li></a>
                        <a href="#" className="text-gray-400 hover:text-black"><li className="w-[20px] h-[20px] bg-[#F47820] bg-[url('/shopping-basket.svg')] bg-center bg-[length:20px_20px] rounded-lg bg-no-repeat p-3 mb-2 ml-2"></li></a>
                    </ul>
                </div>
            </div>
        </header>
    )
};

export default NavBar;