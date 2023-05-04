import { HiBriefcase, HiBuildingOffice2, HiBuildingOffice, HiCog,HiWallet, HiTruck, HiWrenchScrewdriver } from "react-icons/hi2";
export default function Services() {
  return (
    <div>
        <div className=" md:mb-18 mb-10 md:h-[60vh] h-[40vh] z-5 items-center justify-center  w-screen bg-[url('/images/unsplash.jpg')] bg-cover bg-center  text-white ">
      <div className="flex w-full absolute items-center justify-center bg-gray-950/60 md:h-[60vh] h-[40vh] ">
        <div className="text-center justify-center items-center">
          <h1 className="flex text-center items-center justify-center uppercase font-bold md:text-[60px]">Services</h1>    
        </div>
      </div>
    </div>

        <div className="w-screen h-auto  mb-12">
                <div className="justify-center items-center text-center w-auto">
                    <h1 className="text-3xl font-extrabold ">Our Services</h1>
                    <p className="md:text-xl  text-center mx-2 md:mx-60">Delivery of projects that completely addresses the needs of 
                    our clients is at the heart of everything we do. We get clients 
                    from concept to value as fast and reliably as possible.</p>
            </div>
        </div>


<div className="flex w-auto h-[600px] bg-gray-200 rounded-sm shadow-md mx-24 my-8">
        <div className="mx-16 w-full my-4 ">
            <div  className="flex flex-wrap justify-center">
                {/* <!-- Card 1: Civil Engineering Services --> */}
                <div  className="max-w-xs mx-4 my-8 bg-white rounded-lg shadow-lg">
                    <div  className="p-4">
                    <div  className="flex items-center justify-center mb-4">
                        <div className="text-yellow-500 md:flex hidden  ">
                                          <HiBuildingOffice size='3rem'/>
                        </div>
                         <div className="text-yellow-500 md:hidden  ">
                                          <HiBuildingOffice size='1.5rem'/>
                        </div>
                                            
                    </div>
                    <h2  className="text-lg font-medium text-gray-800 mb-2 text-center">Civil Engineering Services</h2>
                    <p  className="text-gray-600 text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis tortor euismod, malesuada ante at, pharetra libero.</p>
                    </div>
                </div>
                {/*   
                <!-- Card 2: Building/Structural Engineering Services --> */}
                <div  className="max-w-xs mx-4 my-8 bg-white rounded-lg shadow-lg">
                    <div  className="p-4">
                    <div  className="flex items-center justify-center mb-4">
                        <div className="text-yellow-500 md:flex hidden  ">
                                          <HiBuildingOffice2 size='3rem'/>
                        </div>
                         <div className="text-yellow-500 md:hidden  ">
                                          <HiBuildingOffice2 size='1.5rem'/>
                        </div>
                    </div>
                    <h2  className="text-lg font-medium text-gray-800 mb-2 text-center">Building/Structural Engineering Services</h2>
                    <p  className="text-gray-600 text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis tortor euismod, malesuada ante at, pharetra libero.</p>
                    </div>
                </div>
                {/* <!-- Card 2: Building/Structural Engineering Services --> */}
                <div  className="max-w-xs mx-4 my-8 bg-white rounded-lg shadow-lg">
                <div  className="p-4">
                <div className="flex items-center justify-center mb-4">
                    <div className="text-yellow-500 md:flex hidden  ">
                                          <HiCog size='3rem'/>
                        </div>
                         <div className="text-yellow-500 md:hidden  ">
                                          <HiCog size='1.5rem'/>
                        </div>
                </div>
                <h2 className="text-lg font-medium text-gray-800 mb-2 text-center">Electrical Engineering Services</h2>
                <p  className="text-gray-600 text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis tortor euismod, malesuada ante at, pharetra libero.</p>
                </div>
                </div>
            </div>

            <div  className="flex flex-wrap justify-center">
                {/* <!-- Card 1: Civil Engineering Services --> */}
                <div  className="max-w-xs mx-4 my-8 bg-white rounded-lg shadow-lg">
                    <div  className="p-4">
                    <div  className="flex items-center justify-center mb-4">
                        <div className="text-yellow-500 md:flex hidden  ">
                                          <HiWrenchScrewdriver size='3rem'/>
                        </div>
                         <div className="text-yellow-500 md:hidden  ">
                                          <HiWrenchScrewdriver size='1.5rem'/>
                        </div>
                    </div>
                    <h2  className="text-lg font-medium text-gray-800 mb-2 text-center">Infrastructure Solutions</h2>
                    <p  className="text-gray-600 text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis tortor euismod, malesuada ante at, pharetra libero.</p>
                    </div>
                </div>
                {/*   
                <!-- Card 2: Building/Structural Engineering Services --> */}
                <div  className="max-w-xs mx-4 my-8 bg-white rounded-lg shadow-lg">
                    <div  className="p-4">
                    <div  className="flex items-center justify-center mb-4">
                        <div className="text-yellow-500 md:flex hidden  ">
                                          <HiTruck size='3rem'/>
                        </div>
                         <div className="text-yellow-500 md:hidden  ">
                                          <HiTruck size='1.5rem'/>
                        </div>
                    </div>
                    <h2  className="text-lg font-medium text-gray-800 mb-2 text-center">Delivery </h2>
                    <p  className="text-gray-600 text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis tortor euismod, malesuada ante at, pharetra libero.</p>
                    </div>
                </div>
                {/* <!-- Card 2: Building/Structural Engineering Services --> */}
                <div  className="max-w-xs mx-4 my-8 bg-white rounded-lg shadow-lg">
                <div  className="p-4">
                <div className="flex items-center justify-center mb-4">
                    <div className="text-yellow-500 md:flex hidden  ">
                                          <HiWallet size='3rem'/>
                        </div>
                         <div className="text-yellow-500 md:hidden  ">
                                          <HiWallet size='1.5rem'/>
                        </div>
                </div>
                <h2 className="text-lg font-medium text-gray-800 mb-2 text-center">Enterprise Equipment</h2>
                <p  className="text-gray-600 text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis tortor euismod, malesuada ante at, pharetra libero.</p>
                </div>
                </div>
            </div>
        </div>
</div>
    </div>
  )
}
