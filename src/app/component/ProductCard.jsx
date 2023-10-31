import React from "react";

const ProductCard = ({ className, productName, category, price }) => {
    
    return (
      // <div className="border rounded-[20px] w-[426px] h-[486px]">
      //   <div className={`product-container border rounded-[20px] w-full h-full shadow-[0_4px_39px_0px_rgba(0,0,0,0.04)] bg-no-repeat bg-center relative ${className}`}>
      //     <div className='flex flex-col justify-between absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 '>
      //         <ul className="flex flex-col items-end space-y-2 list-none mr-[30px] mt-[30px]">
      //             <a href="#" className="text-gray-400 hover:text-black"><li className="w-[20px] h-[20px] bg-primary bg-[url('/Wishing-list.svg')] bg-center bg-[length:20px_20px] rounded-lg bg-no-repeat p-3"></li></a>
      //             <a href="#" className="text-gray-400 hover:text-black"><li className="w-[20px] h-[20px] bg-primary bg-[url('/shopping-basket.svg')] bg-center bg-[length:20px_20px] rounded-lg bg-no-repeat p-3"></li></a>
      //         </ul>
      //         <div className='flex justify-evenly bg-[#FFDAC0] rounded-b-[21px] h-[18%] pt-[10px]'>
      //             <div className='text-[20px] text-[700] leading-[30px] text-primary'>{productName} <br /> {category}</div>
      //             <div className='text-[40px] leading-[60px] text-center font-[700] text-primary mr-6'>{price}</div>
      //         </div>
      //     </div>
      //   </div>
      // </div>
    <div className="border rounded-lg w-full max-w-screen-md md:max-w-md h-auto md:h-[486px]">
      <div className={`product-container border rounded-lg w-full h-full shadow-md bg-no-repeat bg-center relative ${className}`}>
        <div className='flex flex-col justify-between absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100'>
        <ul className="flex flex-col items-end space-y-2 list-none mr-2 md:mr-4 lg:mr-[30px] mt-2 md:mt-4 lg:mt-[30px]">
          <a href="#" className="text-gray-400 hover:text-black"><li className="w-[20px] h-[20px] bg-primary bg-[url('/Wishing-list.svg')] bg-center bg-[length:20px_20px] rounded-lg bg-no-repeat p-3"></li></a>
          <a href="#" className="text-gray-400 hover:text-black"><li className="w-[20px] h-[20px] bg-primary bg-[url('/shopping-basket.svg')] bg-center bg-[length:20px_20px] rounded-lg bg-no-repeat p-3"></li></a>
        </ul>
        <div className='flex justify-evenly bg-[#FFDAC0] rounded-b-lg h-[1/5] pt-1 md:pt-2 lg:pt-[10px]'>
          <div className='text-sm md:text-lg lg:text-[20px] font-semibold leading-5 md:leading-7 lg:leading-[30px] text-primary'>{productName} <br /> {category}</div>
          <div className='text-xl md:text-3xl lg:text-[40px] leading-7 md:leading-9 lg:leading-[60px] text-center font-semibold text-primary mr-1 md:mr-2 lg:mr-6'>{price}</div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;