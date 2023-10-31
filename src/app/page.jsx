'use client';
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import OrderTour from '@/app/component/OrderTour'
import ReviewHighlightCard from '@/app/component/ReviewHighlightCard'
import DraggableContainer from '@/app/component/DraggableContainer'
import { useGlobalContext } from '@/../state-management/ReactContext/GlobalContext'

export default function Home() {

  const { 
    isHover,
    setIsHover,
  } = useGlobalContext();

  return (
    <>
      <section 
        className="min-h-screen h-[1600px] max-[1560px]:h-[1500px] max-[1920px]:h-[1700px] max-[2200px]:h-[1960px] 
        max-[2400px]:h-[2100px] max-2k:h-[2300px] max-[3280px]:h-[2600px] max-[3840px]:h-[2900px] min-[3840px]:h-[3400px] 
        bg-[url('/Background.svg')] bg-primary bg-[length:100%_auto] bg-no-repeat bg-top mt-[-5em] relative "
      >
        <div className='flex justify-evenly relative'>
          <div className='flex flex-col justify-between pl-[3em]'>
            <div className='leading-[78px] mt-[4em] text-[52px] absolute min-[3840px]:text-[5em]'>
              <div className='italic font-[700] ml-[80px]'>Canada’s</div>
              <div className='font-[600] ml-[120px]'>Best Spot to</div>
              <div className='font-[800]'>Buy <span className='text-primary'>Shroms</span> Online!</div>
            </div>
            <div 
              className='border rounded-[20px] w-[375px] h-[200px] min-[3840px]:w-[940px] min-[3840px]:h-[500px]
              mt-[30em] min-[3840px]:mt-[70em] mb-[4em] onSale-card text-white flex items-center justify-center relative opacity-[83%]'
            >
              <div className='ml-6'>
                <div className='text-[30px] min-[3840px]:text-[75px] font-[600] min-[3840px]:leading-[95px]'>Get 20% off <br />Your 1st Order</div>
                <div className='text-[20px] min-[3840px]:text-[50px] font-[400] min-[3840px]:leading-[75px]'>You get over <span className='text-[20px] font-[700]'>$99</span></div>
                <div className='text-[15px] min-[3840px]:text-[37.5px] font-[400] min-[3840px]:leading-[57px] mt-5'>Coupon Code <span className='font-[600] w-[80px] h-[30px] bg-primary rounded p-1'>FIRST20</span></div>
                  <Image 
                    src='/DicountIcon.svg'
                    alt='Discount Icon'
                    width={112}
                    height={133}
                    className='absolute top-0 left-0 w-auto h-auto min-[3840px]:w-[280px] min-[3840px]:h-[335px] min-[3840px]:top-[30px] transform -translate-x-1/2 translate-y-9'
                  />
              </div>
            </div>
          </div>
          <div className='border rounded-[20px] w-[375px] h-[200px] bg-white mt-[530px] text-black flex items-center justify-center relative'>
            <div className='ml-5'>
              <div className='text-[30px] font-[600] leading-[38px]'>Free Express <br />Shipping</div>
              <div className='text-[20px] font-[400] leading-[30px]'>Order above <span className='text-[20px] font-[700]'>$150</span></div>
              <div className='text-[15px] font-[600] leading-[22.5px] mt-5'>Discreet, Undetectable</div>
              <Image 
                src='/Delivery Van.svg'
                alt='Discount Icon'
                width={112}
                height={133}
                className='absolute w-auto h-auto top-0 left-0 transform -translate-x-1/2 translate-y-9'
              />
            </div>
          </div>
          <div className="bg-[url('/homepage-mashroom.svg')] w-[390px] h-[495px] bg-no-repeat bg-[length:390px_495px]  bg-left-top rounded-[20px] mt-[200px] homepageMushroom p-9 relative">
            <div className='font-[600] text-[24px] leading-[36px] text-white '>“Psychedelics prove to you that there’s more than one way of seeing the world”</div>
            <div className='italic text-[15px] leading-[22.5px] font-[600] text-white'>Jesse Lawler</div>
            <div className='absolute flex bottom-0 left-[45%]'>
              <span className='w-[10px] h-[10px] rounded-full bg-primary outline outline-1 outline-primary outline-offset-1 mr-3'></span>
              <span className='w-[10px] h-[10px] rounded-full bg-gray-300 mr-3'></span>
              <span className='w-[10px] h-[10px] rounded-full bg-gray-300 mr-3'></span>
            </div>
            <button className='absolute -left-[10%] bottom-[15%] w-[155px] h-[50px] rounded-[10px] bg-primary font-[600] text-[15px] leading-[22.5px] text-center text-white'>Shop Now</button>
          </div>
        </div>
        <div className='font-[700] text-[40px] leading-[60px] text-center mt-[12em] max-[1960px]:mt-[8em] max-[1560px]:mt-[3em] text-white'>Top Categories</div>
        <div className='w-full h-auto rounded-[30px] flex justify-center absolute -bottom-7 px-[30px]'>
          <div className='w-full h-[563px] rounded-[30px] bg-white flex justify-evenly items-center  drop-shadow-lg'>
            <div className='w-[294px] h-[461px] rounded-[30px] bg-[#FFDAC0] favoriteMushroom p-4 relative'>
              <Image
                src={'/DriedMushroom.svg'}
                alt='Dried Mushroom'
                width={263}
                height={361}
                className='rounded-[20px]'
              />
              <div className='font-[700] text-[24px] text-center leading-[30px] mt-6 text-primary'>Dried Magic <br />Mushrooms</div>
              <div className='w-[294px] h-[461px] rounded-[30px] bg-primary favoriteMushroom p-4 absolute left-0 top-0 opacity-0 hover:opacity-60 flex items-center justify-center transition-all duration-1000'>
                <button className='font-[400] text-[20px] leading-[30px] border-2 border-white rounded-[20px] w-[80%] h-[72px] text-center text-white'>Shop Now</button>
              </div>
            </div>
            <div className='w-[294px] h-[461px] rounded-[30px] bg-[#FFDAC0] favoriteMushroom p-4 relative'>
              <Image
                src={'/ShromEdibles.svg'}
                alt='Shrom Edibles'
                width={263}
                height={361}
                className='rounded-[20px]'
              />
              <div className='font-[700] text-[24px] text-center leading-[30px] mt-6 text-primary'>Dried Magic <br />Mushrooms</div>
              <div className='w-[294px] h-[461px] rounded-[30px] bg-primary favoriteMushroom p-4 absolute left-0 top-0 opacity-0 hover:opacity-60 flex items-center justify-center transition-all duration-1000'>
                <button className='font-[400] text-[20px] leading-[30px] border-2 border-white rounded-[20px] w-[80%] h-[72px] text-center text-white'>Shop Now</button>
              </div>
            </div>
            <div className='w-[294px] h-[461px] rounded-[30px] bg-[#FFDAC0] favoriteMushroom p-4 relative'>
              <Image
                src={'/MagicMushroomTea.svg'}
                alt='Magic Mushroom Tea'
                width={263}
                height={361}
                className='rounded-[20px]'
              />
              <div className='font-[700] text-[24px] text-center leading-[30px] mt-6 text-primary'>Dried Magic <br />Mushrooms</div>
              <div className='w-[294px] h-[461px] rounded-[30px] bg-primary favoriteMushroom p-4 absolute left-0 top-0 opacity-0 hover:opacity-60 flex items-center justify-center transition-all duration-1000'>
                <button className='font-[400] text-[20px] leading-[30px] border-2 border-white rounded-[20px] w-[80%] h-[72px] text-center text-white'>Shop Now</button>
              </div>
            </div>
            <div className='w-[294px] h-[461px] rounded-[30px] bg-[#FFDAC0] favoriteMushroom p-4 relative'>
              <Image
                src={'/MicrodosingCapsules.svg'}
                alt='Microdosing Capsules'
                width={263}
                height={361}
                className='rounded-[20px]'
              />
              <div className='font-[700] text-[24px] text-center leading-[30px] mt-6 text-primary'>Dried Magic <br />Mushrooms</div>
              <div className='w-[294px] h-[461px] rounded-[30px] bg-primary favoriteMushroom p-4 absolute left-0 top-0 opacity-0 hover:opacity-60 flex items-center justify-center transition-all duration-1000'>
                <button className='font-[400] text-[20px] leading-[30px] border-2 border-white rounded-[20px] w-[80%] h-[72px] text-center text-white'>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className='mt-[100px]'>
        <div className='flex justify-between px-[166px]'>
          <div className='font-[700] text-[40px] leading-[60px] text-right'>Getting to <br />Knowing <span className='font-[500] text-primary'>us</span></div>
          <div className='text-[20px] leading-[30px] w-[556px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</div>
        </div>
        <div className="bg-[url('/Rectangle.svg')] bg-center bg-no-repeat bg-[length:auto_100%] h-[650px] mt-[60px] min-[2560px]:h-[1000px] relative">
          <div className='w-[663px] h-[445px] rounded-[30px] bg-white absolute top-[110px] left-[120px] p-6 ring-[13px] ring-gray-200/40 ring-offset-4 transform flex flex-col justify-center items-center'>
            <div className='font-[700] pl-4 text-[40px] leading-[60px]'>Lorem ipsum dolor sit a sectetur <span className='text-primary'>adipiscing</span> elit sed do <span className='text-primary'>eiusmod</span> tempor </div>
            <div className='my-8 pl-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</div>
            <button className='w-[90%] h-[50px]  text-white text-[20px] leading-[30px] rounded-[10px]'>Lorem ipsum dolor sit amet</button>
          </div>
          <Image
            src={'/GitarBg.svg'}
            alt='Gitar'
            width={500}
            height={500}
            className='absolute right-[9em] -top-[120px] h-[500px] w-[500px] min-[2560px]:h-[800px] min-[2560px]:w-[800px]'
          />
        </div>
      </section>
      <section className='px-[60px] mt-[5em]'>
        <div className='w-full h-auto bg-[#EEEEEE] rounded-[30px]'>
          <h1 className='font-[700] text-[40px] leading-[60px] px-[50px] pt-[30px] ml-[80px]'><span className='text-primary'>Some Awesome</span><br />Review Highlights</h1>
          <ReviewHighlightCard/>
          <div className='flex p-[50px] ml-[80px]'>
              <span className='w-[10px] h-[10px] rounded-full bg-primary outline outline-1 outline-primary outline-offset-1 mr-3 hover:cursor-pointer'></span>
              <span className='w-[10px] h-[10px] rounded-full bg-gray-300 mr-3 hover:cursor-pointer'></span>
              <span className='w-[10px] h-[10px] rounded-full bg-gray-300 mr-3 hover:cursor-pointer'></span>
          </div>
        </div>
      </section>
      <section className='px-[60px] py-[120px] relative'>
        <h1 className='font-[700] text-[40px] leading-[60px]'>Top Perks for you</h1>
        <div className='h-[486px] w-full m-[20px_auto] relative'>
          <DraggableContainer>
            <div className={'flex justify-end items-center w-full h-full absolute hover:opacity-100 opacity-' + isHover}>
              <Image
                src={'/RightArrowIcon.svg'}
                alt='Right Arrow Icon'
                width={60}
                height={60}
                className="hover:cursor-pointer z-10"
              />
            </div>
            <div 
              className="product-container flex-shrink-0 relative rounded-[21px] w-[426px] shadow-[0_4px_39px_0px_rgba(0,0,0,0.04)] bg-[url('/VisionaryBrew3.svg')] bg-no-repeat"
              onMouseEnter={() => setIsHover(100)}
              onMouseLeave={() => setIsHover(0)}
            >
              <div className='flex flex-col justify-between absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100'>
                <ul className="flex flex-col items-end space-y-2 list-none mr-[30px] mt-[30px]">
                  <a href="#" className="text-gray-400 hover:text-black"><li className="w-[20px] h-[20px] bg-primary bg-[url('/Wishing-list.svg')] bg-center bg-[length:20px_20px] rounded-lg bg-no-repeat p-3"></li></a>
                  <a href="#" className="text-gray-400 hover:text-black"><li className="w-[20px] h-[20px] bg-primary bg-[url('/shopping-basket.svg')] bg-center bg-[length:20px_20px] rounded-lg bg-no-repeat p-3"></li></a>
                </ul>
                <div className='flex justify-between bg-[#FFDAC0] rounded-b-[21px] h-[18%] p-[20px]'>
                  <div className='text-[20px] text-[700] leading-[30px] text-primary'>Visionary Brew Magic <br /> Mushroom Tea</div>
                  <div className='text-[40px] leading-[60px] text-center font-[700] text-primary mr-6'>$25</div>
                </div>
              </div>
            </div>
            <div 
              className="product-container flex-shrink-0 relative rounded-[21px] w-[426px] shadow-[0_4px_39px_0px_rgba(0,0,0,0.04)] bg-[url('/DriedMushroomMultiple.svg')]"
              onMouseEnter={() => setIsHover(100)}
              onMouseLeave={() => setIsHover(0)}
            >
              <div className='flex flex-col justify-between absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100'>
                <ul className="flex flex-col items-end space-y-2 list-none mr-[30px] mt-[30px]">
                  <a href="#" className="text-gray-400 hover:text-black"><li className="w-[20px] h-[20px] bg-primary bg-[url('/Wishing-list.svg')] bg-center bg-[length:20px_20px] rounded-lg bg-no-repeat p-3"></li></a>
                  <a href="#" className="text-gray-400 hover:text-black"><li className="w-[20px] h-[20px] bg-primary bg-[url('/shopping-basket.svg')] bg-center bg-[length:20px_20px] rounded-lg bg-no-repeat p-3"></li></a>
                </ul>
                <div className='flex justify-between bg-[#FFDAC0] rounded-b-[21px] h-[18%] p-[20px]'>
                  <div className='text-[20px] text-[700] leading-[30px] text-primary'>Visionary Brew Magic <br /> Mushroom Tea</div>
                  <div className='text-[40px] leading-[60px] text-center font-[700] text-primary mr-6'>$25</div>
                </div>
              </div>
            </div>
            <div 
              className="product-container flex-shrink-0 relative rounded-[21px] w-[426px] shadow-[0_4px_39px_0px_rgba(0,0,0,0.04)] bg-[url('/Purepsilocybin.svg')]"
              onMouseEnter={() => setIsHover(100)}
              onMouseLeave={() => setIsHover(0)}
            >
              <div className='flex flex-col justify-between absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100'>
                  <ul className="flex flex-col items-end space-y-2 list-none mr-[30px] mt-[30px]">
                    <a href="#" className="text-gray-400 hover:text-black"><li className="w-[20px] h-[20px] bg-primary bg-[url('/Wishing-list.svg')] bg-center bg-[length:20px_20px] rounded-lg bg-no-repeat p-3"></li></a>
                    <a href="#" className="text-gray-400 hover:text-black"><li className="w-[20px] h-[20px] bg-primary bg-[url('/shopping-basket.svg')] bg-center bg-[length:20px_20px] rounded-lg bg-no-repeat p-3"></li></a>
                  </ul>
                  <div className='flex justify-between bg-[#FFDAC0] rounded-b-[21px] h-[18%] p-[20px]'>
                    <div className='text-[20px] text-[700] leading-[30px] text-primary'>Visionary Brew Magic <br /> Mushroom Tea</div>
                    <div className='text-[40px] leading-[60px] text-center font-[700] text-primary mr-6'>$25</div>
                  </div>
                </div>
              </div>
            <div 
              className="product-container flex-shrink-0 relative rounded-[21px] w-[426px] shadow-[0_4px_39px_0px_rgba(0,0,0,0.04)] bg-[url('/Dames.svg')]"
              onMouseEnter={() => setIsHover(100)}
              onMouseLeave={() => setIsHover(0)}
            >
              <div className='flex flex-col justify-between absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100'>
                <ul className="flex flex-col items-end space-y-2 list-none mr-[30px] mt-[30px]">
                  <a href="#" className="text-gray-400 hover:text-black"><li className="w-[20px] h-[20px] bg-primary bg-[url('/Wishing-list.svg')] bg-center bg-[length:20px_20px] rounded-lg bg-no-repeat p-3"></li></a>
                  <a href="#" className="text-gray-400 hover:text-black"><li className="w-[20px] h-[20px] bg-primary bg-[url('/shopping-basket.svg')] bg-center bg-[length:20px_20px] rounded-lg bg-no-repeat p-3"></li></a>
                </ul>
                <div className='flex justify-between bg-[#FFDAC0] rounded-b-[21px] h-[18%] p-[20px]'>
                  <div className='text-[20px] text-[700] leading-[30px] text-primary'>Visionary Brew Magic <br /> Mushroom Tea</div>
                  <div className='text-[40px] leading-[60px] text-center font-[700] text-primary mr-6'>$25</div>
                </div>
              </div>
            </div>
          </DraggableContainer>
        </div>
      </section>
      <div className='px-[10vw]'>
        <OrderTour/>
      </div>
    </>
  )
}


