import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-[#EEEEEE] p-8">
            <div className="container grid grid-cols-4 gap-8 mx-auto">
                <div className='mx-auto'>
                    <h5 className="mb-4 text-lg font-bold">Cannabises Strains</h5>
                    <ul className="space-y-2 list-none text-sm">
                        <li><a href="#" className="text-gray-400 hover:text-black">Hybrid</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-black">Sativa</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-black">Indica</a></li>
                    </ul>
                </div>
                
                <div className='mx-auto'>
                    <h5 className="mb-4 text-lg font-bold">Mushroom Spices</h5>
                    <ul className="space-y-2 list-none text-sm">
                        <li><a href="#" className="text-gray-400 hover:text-black">Saprotrophic</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-black">Dried Magic Mushrooms</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-black">Edibles</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-black">Teas</a></li>
                    </ul>
                </div>

                <div className='mx-auto'>
                    <h5 className="mb-4 text-lg font-bold">Interested Links</h5>
                    <ul className="space-y-2 list-none text-sm">
                        <li><a href="#" className="text-gray-400 hover:text-black">Blog</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-black">FAQ</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-black">Coupons</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-black">Contact</a></li>
                    </ul>
                </div>

                <div className='mx-auto'>
                    <h5 className="mb-4 text-lg font-bold">Follow Us</h5>
                    <ul className="flex items-center space-y-2 list-none">
                        <a href="#" className="text-gray-400 hover:text-black"><li className="w-[20px] h-[20px] bg-[#F47820] bg-[url('/Facebook.svg')] bg-center bg-[length:20px_20px] rounded-full bg-no-repeat p-3"></li></a>
                        <a href="#" className="text-gray-400 hover:text-black"><li className="w-[20px] h-[20px] bg-[#F47820] bg-[url('/InstagramIcon.svg')] bg-center bg-[length:15px_15px] rounded-full bg-no-repeat p-3 mb-2 ml-2"></li></a>
                    </ul>
                </div>
            </div>

            <div className="flex pt-8 mt-8 text-center border-t border-gray-300 justify-between text-sm mx-4">
                <div className='flex justify-between items-end'>
                    <p className="text-black text-center pr-[50px] font-bold">Copyright &copy; 2023 Three Amigos</p>
                    <div className="flex mt-4 space-x-4 items-center">
                        <a href="#" className="text-gray-400 hover:text-black border-r-[1px] border-gray-500 pr-3">Terms & Conditions</a>
                        <a href="#" className="text-gray-400 hover:text-black border-r-[1px] border-gray-500 pr-3">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-black">Sales and Refunds</a>
                    </div>
                </div>
                <Image 
                    src="/PositiveSSL_SectigoTag.svg"
                    width={100}
                    height={50}
                />
            </div>
        </footer>
    )
};

export default Footer;