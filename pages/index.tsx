import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FaDollyFlatbed } from "react-icons/fa";
import { HiBoltSlash, HiBuildingOffice2, HiWrenchScrewdriver } from "react-icons/hi2";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <>
    <div className="relative md:mb-20 mb-10 md:h-[90vh] h-[70vh] z-5 items-center justify-center  w-screen bg-[url('/images/herobg.jpg')] bg-cover bg-center  text-white ">
      <div className="flex w-full absolute items-center justify-center bg-gray-950/75 md:h-[90vh] h-[70vh] ">
        <div className="text-center justify-center items-center">
          <h1 className="flex text-center items-center justify-center uppercase font-bold md:text-[60px]">Building the Future</h1>
          <div className="text-white items-center justify-center md:w-[600px] w-[300px]">
          <p className="flex text-center uppercase font-medium text-sm md:text-base text-[10px]">global leader in engineering, supplies and delivery of high value added quality products and services</p>
          </div>        
           <div className="flex justify-center items-center text-center mt-6">
           <div className="item-center justify-center border md:text-xl text-sm  px-2 rounded md:w-[200px] cursor-pointer hover:border-red-500 ">
               Read more
            </div>
           </div>
        </div>

      </div>

    </div>
    <div className="w-screen h-auto">
        <div className="flex relative z-10 items-center justify-center">
            <div className="md:flex  absolute md:w-[200vh] w-[40vh]  flex-row items-center justify-center md:h-[280px] h-[200px] rounded-md  ">
              <div className="text-black  bg-yellow-500 md:w-1/4  h-full rounded-l-sm shadow-md">
                  <div className="mx-8  my-2">
                        <span className="py-3 text-md ml-4 md:ml-1">Who we are</span>
                        <h1 className="md:text-md font-extrabold my-3">25 years of underfeated success</h1>
                        <p className="md:flex  md:text-lg text-xs">We endeavour to be the best and strive to be the 
                            leaders in the field, and also respect our client, Co-worker, 
                            nation and legislation of our country; for only their prosperity 
                            leads to our success and social welfare of the whole society 
                        </p>
                  </div>
              </div>
              <div className="text-black items-center justify-center  bg-gray-100 md:w-1/2 md:h-[260px] h-[270px] rounded-r-sm shadow-md">
                  <div className="items-center justify-center my-8 md:mx-10 mx-4">
                        <div className="items-center justify-center"> 
                                <div className="flex items-center justify-between py-2">
                                    <div className="flex flex-row ">
                                      <div className="text-yellow-500 md:flex hidden  ">
                                          <HiBoltSlash size='3rem'/>
                                      </div>
                                      <div className="text-yellow-500 md:hidden  ">
                                          <HiBoltSlash size='1.5rem'/>
                                      </div>
                                      <div className="mx-2">
                                        <h1 className="md:text-md text-sm font-bold">521 +</h1>
                                        <p className="md:text-md text-sm">Electrical/ Mechanical Engineering Division </p>
                                      </div>
                                         
                                    </div>
                                    <div className="flex flex-row ">
                                    <div className="text-yellow-500 md:flex hidden ">
                                          <HiBuildingOffice2 size='3rem'/>
                                      </div>
                                      <div className="text-yellow-500 md:hidden  ">
                                          <HiBuildingOffice2 size='1.5rem'/>
                                      </div>
                                      <div className="mx-2">
                                        <h1 className="md:text-md text-sm font-bold">200 +</h1>
                                        <p className="md:text-md text-sm">Building/ Structural Engineering Division </p>
                                      </div>
                                         
                                    </div>
                                </div>
                                <div className="flex md:space-x-28 lg:space-x-44   mt-12">
                                    <div className="flex flex-row ">
                                    <div className="text-yellow-500 md:flex hidden  ">
                                          <HiWrenchScrewdriver size='3rem'/>
                                      </div>
                                      <div className="text-yellow-500 md:hidden ">
                                          <HiWrenchScrewdriver size='1.5rem'/>
                                      </div>
                                      <div className="mx-2">
                                        <h1 className="md:text-md text-sm font-bold">21 +</h1>
                                        <p className="md:text-md text-sm">Civil Engineering Division </p>
                                      </div>
                                         
                                    </div>
                                    <div className="flex flex-row ">
                                    <div className="text-yellow-500 md:flex hidden ">
                                          <FaDollyFlatbed size='3rem'/>
                                      </div>
                                      <div className="text-yellow-500  md:hidden  ">
                                          <FaDollyFlatbed size='1.5rem'/>
                                      </div>
                                      <div className="mx-2">
                                        <h1 className="md:text-md font-bold">521 +</h1>
                                        <p className="md:text-md"> Enterprise Equipment Services  </p>
                                      </div>
                                         
                                    </div>
                                </div>
                                
                        </div>
                  </div>
              </div>
            </div>
        </div>
        

    </div>
    <div className="w-full md:mt-[200px] mt-[420px] ">
     <div className="w-full">
      <div className="justify-center items-center text-center text-red-500 text-lg font-bold">Our Services</div>
      <div className="justify-center items-center text-center text-black text-xl font-extrabold">Quality Services</div>
            
      </div> 


<section className="mx-auto  pb-8 pt-2">
    <div className="flex flex-col">
        
        
        <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center items-center ">
                <div  className="mx-4 md:max-w-md max-w-sm justify-center items-center">
                    <div className="p-2 shadow-md m-2 mt-2 justify-center items-center">
                    
                      <img className="object-cover h-[300px] w-[400px] justify-center items-center" src='/images/car2.jpg' alt="step3"/>
                        <div className="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">Toyota Hilux</div>
                        <div className="text-xl font-bold mb-2 ">Supply</div>
                        <div className="truncate text-center">Impressive off-road ability with a capable four-wheel drive system</div>
                    </div>
                </div>
            </div>
            <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center">
                <div  className="mx-4 md:max-w-md max-w-sm justify-center items-center">
                    <div className="p-2 shadow-md m-2 mt-2 justify-center items-center">
                    
                      <img className="object-cover h-[300px] w-[400px]" src='/images/car5.jpg' alt="step3"/>
                        <div className="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">Toyota Hilux</div>
                        <div className="text-xl font-bold mb-2">Supply</div>
                        <div className="truncate">Impressive off-road ability. With a capable four-wheel drive system</div>
                    </div>
                </div>
            </div>
            <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center ">
            <div  className="mx-4 md:max-w-md max-w-sm justify-center items-center">
                    <div className="p-2 shadow-md m-2 mt-2 justify-center items-center">
                    
                      <img className="object-cover h-[300px] w-[400px]" src='/images/car3.jpg' alt="step3"/>
                        <div className="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">Toyota Hilux</div>
                        <div className="text-xl font-bold mb-2">Supply</div>
                        <div className="truncate">Impressive off-road ability. With a capable four-wheel drive system</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="mx-auto max-w-6xl pb-12 pt-2">
    <div className="flex flex-col">
        <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center"></div>
            <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center"></div>
            <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center"></div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center ">
               
                    <div slot="bottom-left"  className="mx-4 md:max-w-md max-w-sm justify-center items-center">
                    <div className="p-2 shadow-md m-2 mt-2 justify-center items-center">
                    
                      <img className="object-cover h-[300px] w-[400px]" src='/images/car1.jpg' alt="step3"/>
                        <div className="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">Toyota Hilux</div>
                        <div className="text-xl font-bold mb-2">Supply</div>
                        <div className="truncate">Impressive off-road ability. With a capable four-wheel drive system</div>
                    </div>
                </div>
            </div>
            <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center ">
                
            <div slot="bottom-left"  className="mx-4 md:max-w-md max-w-sm justify-center items-center">
                    <div className="p-2 shadow-md m-2 mt-2 justify-center items-center">
                    
                    
                      <img className="object-cover h-[300px] w-[400px]" src='/images/car4.jpg' alt="step3"/>
                        <div className="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">Toyota Hilux</div>
                        <div className="text-xl font-bold mb-2">Supply</div>
                        <div className="truncate">Impressive off-road ability. With a capable four-wheel drive system</div>
                    </div>
                </div>
            </div>
            <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center ">
                
            <div slot="bottom-left"  className="mx-4 md:max-w-md max-w-sm justify-center items-center">
                    <div className="p-2 shadow-md m-2 mt-2 justify-center items-center">
                    
                      <img className="object-cover h-[300px] w-[400px]" src='/images/car3.jpg' alt="step3"/>
                        <div className="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">Toyota Hilux</div>
                        <div className="text-xl font-bold mb-2">Supply</div>
                        <div className="truncate">Impressive off-road ability. With a capable four-wheel drive system</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<div className="w-screen py-16 text-center bg-black h-[400px]">
        <div className="mx-auto max-w-lg ">
          <h1 className="text-2xl font-bold text-white dark:text-white lg:text-4xl">Guaranteed for all of your 
Organisation/Company’s Equipment needs</h1>
          <p className="mt-6 text-gray-500 dark:text-gray-300">We partner with major distributors and manufacturers in 
providing need equipment and machineries, at the best price, 
to our clients.</p>
        </div>
</div>

<div className="w-auto flex py-16 text-center justify-center items-center mx-36">
        <div className="flex w-auto justify-center items-center text-center">          
          <p className="mt-6 text-gray-500 text-xl dark:text-gray-300 w-[800px] text-center">
            We provide our customers the highest level of quality 
            services at fair and market competitive prices. To ensure the 
            longevity of our company through repeat and referral 
            business achieved by customer satisfaction in all areas 
            including timeliness, attention to detail and service-minded 
            attitudes.
          </p>
        </div>
</div>

    
    </div>
  </>
      
    </main>
  )
}
