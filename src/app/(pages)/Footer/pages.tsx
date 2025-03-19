import Image from "next/image";
const Footer = () => {
  return (
    <div className="w-full  shadow-md py-7  bg-red-200 ">
      <div className="flex items-center justify-between container sm:px-6 px-4 gap-8">
        <div>
          <Image src="/images/logo.png" alt="logo" width={100} height={50} />
        </div>
        <div className="flex sm:gap-10 gap-7">
          <ul className="text-gray-800 ">
            <a href="PrivacyPolicy" className="hover:text-red-700 sm:text-xl ">
              Privacy Policy
            </a>
          </ul>
          <a className="sm:p-1 text-gray-700 " href="#">Copyright 2025 Needates.com</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
