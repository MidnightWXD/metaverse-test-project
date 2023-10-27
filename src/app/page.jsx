import Image from 'next/image'
import OrderTour from './component/OrderTour'

export default function Home() {
  return (
    <>
      <section className="min-h-screen bg-[url('/Background.svg')] bg-[length:100%_auto] bg-[#F47820] bg-no-repeat bg-top mt-[-120px] relative">
        <div className='absolute top-[200px] leading-[78px] left-[140px]'>
          <div className='italic text-[52px] font-[700] ml-[80px]'>Canada’s</div>
          <div className='font-[600] text-[52px] ml-[120px]'>Best Spot to</div>
          <div className='text-[52px] font-[800]'>Buy <span className='text-[#F47820]'>Shroms</span> Online!</div>
        </div>
        <div className='flex justify-evenly'>
          <div className='border rounded-[20px] w-[375px] h-[200px] onsale-card mt-[470px] text-white flex items-center justify-center relative opacity-[83%]'>
            <div className='ml-5'>
              <div className='text-[30px] font-[600] leading-[38px]'>Get 20% off <br />Your 1st Order</div>
              <div className='text-[20px] font-[400] leading-[30px]'>You get over <span className='text-[20px] font-[700]'>$99</span></div>
              <div className='text-[15px] font-[400] leading-[22.5px] mt-5'>Coupon Code <span className='font-[600] w-[80px] h-[30px] bg-[#F47820] rounded p-1'>FIRST20</span></div>
              <Image 
                src='/DicountIcon.svg'
                alt='Discount Icon'
                width={112}
                height={133}
                className='absolute top-0 left-0 transform -translate-x-1/2 translate-y-9'
              />
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
                className='absolute top-0 left-0 transform -translate-x-1/2 translate-y-9'
              />
            </div>
          </div>
          <div className="bg-[url('/homepage-mashroom.svg')] w-[390px] h-[495px] bg-no-repeat bg-[length:390px_495px]  bg-left-top rounded-[20px] mt-[200px] homepageMushroom p-9 relative">
            <div className='font-[600] text-[24px] leading-[36px] text-white '>“Psychedelics prove to you that there’s more than one way of seeing the world”</div>
            <div className='italic text-[15px] leading-[22.5px] font-[600] text-white'>Jesse Lawler</div>
            <div className='absolute flex bottom-0 left-[45%]'>
              <span className='w-[10px] h-[10px] rounded-full bg-[#F47820] outline outline-1 outline-[#F47820] outline-offset-1 mr-3'></span>
              <span className='w-[10px] h-[10px] rounded-full bg-gray-300 mr-3'></span>
              <span className='w-[10px] h-[10px] rounded-full bg-gray-300 mr-3'></span>
            </div>
            <button className='absolute -left-[10%] bottom-[15%] w-[155px] h-[50px] rounded-[10px] bg-[#F47820] font-[600] text-[15px] leading-[22.5px] text-center text-white'>Shop Now</button>
          </div>
        </div>
        <div className='font-[700] text-[40px] leading-[60px] text-center mt-[100px] text-white pb-[600px]'>Top Categories</div>
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
              <div className='font-[700] text-[24px] text-center leading-[30px] mt-6 text-[#F47820]'>Dried Magic <br />Mushrooms</div>
              <div className='w-[294px] h-[461px] rounded-[30px] bg-[#F47820] favoriteMushroom p-4 absolute left-0 top-0 opacity-0 hover:opacity-60 flex items-center justify-center transition-all duration-1000'>
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
              <div className='font-[700] text-[24px] text-center leading-[30px] mt-6 text-[#F47820]'>Dried Magic <br />Mushrooms</div>
              <div className='w-[294px] h-[461px] rounded-[30px] bg-[#F47820] favoriteMushroom p-4 absolute left-0 top-0 opacity-0 hover:opacity-60 flex items-center justify-center transition-all duration-1000'>
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
              <div className='font-[700] text-[24px] text-center leading-[30px] mt-6 text-[#F47820]'>Dried Magic <br />Mushrooms</div>
              <div className='w-[294px] h-[461px] rounded-[30px] bg-[#F47820] favoriteMushroom p-4 absolute left-0 top-0 opacity-0 hover:opacity-60 flex items-center justify-center transition-all duration-1000'>
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
              <div className='font-[700] text-[24px] text-center leading-[30px] mt-6 text-[#F47820]'>Dried Magic <br />Mushrooms</div>
              <div className='w-[294px] h-[461px] rounded-[30px] bg-[#F47820] favoriteMushroom p-4 absolute left-0 top-0 opacity-0 hover:opacity-60 flex items-center justify-center transition-all duration-1000'>
                <button className='font-[400] text-[20px] leading-[30px] border-2 border-white rounded-[20px] w-[80%] h-[72px] text-center text-white'>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-[100px]'>
        <div className='flex justify-between px-[166px]'>
          <div className='font-[700] text-[40px] leading-[60px] text-right'>Getting to <br />Knowing <span className='font-[500] text-[#F47820]'>us</span></div>
          <div className='text-[20px] leading-[30px] w-[556px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</div>
        </div>
        <div className="bg-[url('/Rectangle.svg')] bg-center bg-no-repeat bg-contain h-[650px] mt-[60px] relative">
          <div className='w-[663px] h-[445px] rounded-[30px] bg-white absolute top-[110px] left-[120px] p-6 ring-[13px] ring-gray-200/40 ring-offset-4 transform flex flex-col justify-center items-center'>
            <div className='font-[700] pl-4 text-[40px] leading-[60px]'>Lorem ipsum dolor sit a sectetur <span className='text-[#F47820]'>adipiscing</span> elit sed do <span className='text-[#F47820]'>eiusmod</span> tempor </div>
            <div className='my-8 pl-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</div>
            <button className='w-[90%] h-[50px] bg-black text-white text-[20px] leading-[30px] rounded-[10px]'>Lorem ipsum dolor sit amet</button>
          </div>
          <Image
            src={'/GitarBg.svg'}
            alt='Gitar'
            width={600}
            height={600}
            className='absolute right-[20px] -top-[120px]'
          />
        </div>
      </section>
      <section className='px-[30px]'>
        <div className='w-full h-auto bg-[#EEEEEE] rounded-[30px]'>
          <h1 className='text-[700] text-[40px] leading-[60px]'><span className='text-[#F47820]'>Some Awesome</span><br />Review Highlights</h1>
          <div className='flex'>
            <div className="w-[30px] h-[30px] rounded-full bg-[url('/RightArrowIcon.svg')] bg-no-repeat bg-center bg-contain"></div>
            <div className='rounded-[20px] w-[571px] h-[317px] flex justify-center items-center'>
              <p className='text-[#F47820]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <span className=""></span>
            </div>
            <div></div>
            <div className="w-[30px] h-[30px] rounded-full bg-[url('/RightArrowIcon.svg')] bg-no-repeat bg-center bg-contain"></div>
          </div>
          <div></div>
        </div>
      </section>
      <OrderTour/>
    </>
  )
}


