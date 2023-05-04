import Container from "../Container";
import { FaFacebook, FaTwitter,  } from "react-icons/fa";
import { FcMenu } from "react-icons/fc";
import Link from 'next/link'

const Navbar = () => {
  return (
        <div className="fixed w-screen  bg-black shadow-sm z-30 bg-opacity-20">
            <div className="my-4 mx-8 md:mx-16">
                <Container>
                    <div className="flex flex-row items-center justify-between  md:gap-2 md:mx-14">
                            <div className="text-white text-xs md:text-lg  flex"> 
                               <span className="text-red-500 font-extrabold mr-1">GSA </span>
                                 Systems Ltd.                           
                            </div>
                            <div className="md:flex hidden md:space-x-8 text-white font-medium list-none">
                                <li className="hover:text-red-500 "><Link href="/">Home</Link></li>                              
                                <li className="hover:text-red-500 "><Link href="/about">About Us</Link></li>
                                <li className="hover:text-red-500 "><Link href="/services">Services</Link></li>
                                <li className="hover:text-red-500 "><Link href="/contact">Contact Us</Link></li>

                                <div className="flex justify-center items-center space-x-2 text-gray-400 text-sm  list-none">
                                <li className="flex text-blue-800"><FaFacebook/></li>
                                <li className="flex text-blue-400"><FaTwitter/></li>
                                </div>
                                
                            </div>
                            <div className="flex md:hidden text-white">
                                <FcMenu/>
                            </div>
                           
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;
