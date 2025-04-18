"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";


const Topbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  const pathname = usePathname();

  const handleNav = () => {
    setmenuOpen(!menuOpen);
  };
  return (
    <nav className="w-full bg-white shadow-md py-4 sm:py-5">
      <div className="flex justify-between items-center h-full  container px-2 sm:px-8">
        <Link href="/">
          <Image className=" sm:w-30 w-20" src="/images/logo.png" alt="logo" width={100} height={50} />
        </Link>

        <div className="hidden sm:flex space-x-4">
      <Link
        href="/"
        className={`p-2 sm:p-4 text-lg sm:text-xl ${
          pathname === "/" ? "text-red-900 " : "hover:text-red-900"
        }`}
      >
        Home
      </Link>
      <Link
        href="/Map"
        className={`p-2 sm:p-4 text-lg sm:text-xl ${
          pathname === "/Map" ? "text-red-900 f" : "hover:text-red-900"
        }`}
      >
        Map
      </Link>
      <Link
        href="/Pricing"
        className={`p-2 sm:p-4 text-lg sm:text-xl ${
          pathname === "/Pricing" ? "text-red-900 " : "hover:text-red-900"
        }`}
      >
        Pricing
      </Link>
      <Link
        href="/ContactUs"
        className={`p-2 sm:p-4 text-lg sm:text-xl ${
          pathname === "/ContactUs" ? "text-red-900 " : "hover:text-red-900"
        }`}
      >
        Contact Us
      </Link>
    </div>
        {/* <div className="hidden sm:flex space-x-4">
          <Link
            href="/"
            className="hover:text-red-900 p-2 sm:p-4 text-lg sm:text-xl"
          >
            Home
          </Link>
          <Link
            href="Map"
            className="hover:text-red-900 p-2 sm:p-4 text-lg sm:text-xl"
          >
            Map
          </Link>
          <Link
            href="Pricing"
            className="hover:text-red-900 p-2 sm:p-4 text-lg sm:text-xl"
          >
            Pricing
          </Link>
          <Link
            href="ContactUs"
            className="hover:text-red-900 p-2 sm:p-4 text-lg sm:text-xl"
          >
            Contact Us
          </Link>
        </div> */}

        <div className="flex sm:gap-6 ">
          <div className="flex sm:gap-6">
            {/* Hotel Login Button */}
            <Link
              href="https://hotel.needates.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-red-900 sm:py-2 py-2 px-2 sm:px-6 sm:mr-5 mr-1 border-2 rounded-full sm:w-auto cursor-pointer">
                Hotel login
              </button>
            </Link>

            {/* Planner Login Button */}
            <Link
              href="https://planner.needates.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-red-900 hover:p text-white py-2 sm:py-3 px-2 sm:px-6 rounded-full cursor-pointer">
                Planner login
              </button>
            </Link>
          </div>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
        <div
          className={`fixed top-0 right-0 w-3/4 max-w-xs h-screen bg-gray-100 p-6 transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out sm:hidden`}
        >
          <div className="flex justify-end">
            <AiOutlineClose
              size={25}
              onClick={handleNav}
              className="cursor-pointer"
            />
          </div>
          <ul className="flex flex-col space-y-4 mt-6">
            <a href="/" className="hover:text-red-900 text-lg">
              Home
            </a>
            <a href="Map" className="hover:text-red-900 text-lg">
              Map
            </a>
            <a href="Pricing" className="hover:text-red-900 text-lg">
              Pricing
            </a>
            <a href="ContactUs" className="hover:text-red-900 text-lg">
              Contact Us
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Topbar;

// "use client";
// import Image from "next/image";
// import Link from "next/Link";
// import { useState } from "react";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// const Topbar = () => {
//   const [menuOpen, setmenuOpen] = useState(false);
//   const handleNav = () => {
//     setmenuOpen(!menuOpen);
//   };
//   return (
//     <nav className="w-full bg-white shadow-md py-7">
//       <div className="flex justify-between h-full w-full container ">
//         <div className="">
//           <Image src="/images/logo.png" alt="logo" width={100} height={50} />
//         </div>
//         <div>
//           <ul className="hidden sm:flex  ">
//             <a href="#" className="hover:text-red-900  p-4 text-xl">
//               Home
//             </a>
//             <a href="#" className="hover:text-red-900  p-4 text-xl">
//               Map
//             </a>
//             <a href="#" className="hover:text-red-900  p-4 text-xl">
//               Pricing
//             </a>
//             <a href="#" className="hover:text-red-900  p-4 text-xl">
//               Contact Us
//             </a>
//           </ul>
//         </div>
//         <div className="flex gap-5 ">
//           <button className="text-red-900 py-3 px-6 border-2 rounded-full">
//             Hotel login
//           </button>
//           <button className="bg-red-900 hover:bg-yellow-700 text-white py-3 px-6 rounded-full">
//             Planner login
//           </button>
//         </div>
//         <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
//           <AiOutlineMenu size={25} />
//         </div>
//         <div
//           className={
//             menuOpen
//               ? "fixed left=0 top=0 w-65% sm:hidden h-screen bg-gray-100 p-10 ease-in duration-500 "
//               : "fixed left-full top-0 p-10 ease-in duration-500"
//           }
//         >
//           <div className="flex w-full item-center justify-end">
//           <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
//             <AiOutlineClose size={25} />
//           </div>
//           <div>
//           <ul className="hidden sm:flex  ">
//             <a href="#" className="hover:text-red-900  p-4 text-xl">
//               Home
//             </a>
//             <a href="#" className="hover:text-red-900  p-4 text-xl">
//               Map
//             </a>
//             <a href="#" className="hover:text-red-900  p-4 text-xl">
//               Pricing
//             </a>
//             <a href="#" className="hover:text-red-900  p-4 text-xl">
//               Contact Us
//             </a>
//           </ul>
//         </div>
//           </div>

//         </div>
//       </div>
//     </nav>
//   );
// };
// export default Topbar;
