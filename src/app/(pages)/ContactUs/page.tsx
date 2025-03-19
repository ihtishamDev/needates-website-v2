import Topbar from "../Topbar/pages";
import Footer from "../Footer/pages";
// import { FontAwesomeIcon } from "@htmlFortawesome/react-fontawesome";
// import { faEnvelope, faPhone } from "@htmlFortawesome/free-solid-svg-icons";
// import { FiPhone, FiMail } from "react-icons/fi";
import { MdEmail, MdCall } from "react-icons/md";

const ContactUs = () => {
  return (
    <div>
      <Topbar />
      <section
        className="bg-center bg-no-repeat "
        style={{ backgroundImage: "url(/images/ContactUs.png)" }}
      >
        <div className="container text-center py-30">
          <h1 className="mb-4 font-bold tracking-tight leading-none text-white sm:text-5xl text-3xl">
            Contact Us
          </h1>
        </div>
      </section>
      <section className="p-6 sm:mt-25">
        <div className="container sm:flex justify-between sm:px-30">
          <div className="py-20 ">
            <h2 className="text-4xl font-bold text-black mb-4">GET IN TOUCH</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MdCall className="text-red-500 text-xl fill-current" />
                <div>
                  <p className="text-black font-bold text-xl">CALL US:</p>
                  <p className="text-gray-700 text-sm">240 751 3929</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MdEmail className="text-red-500 text-xl fill-current" />
                <div>
                  <p className="text-black font-bold text-xl">MAIL US:</p>
                  <p className="text-gray-700 text-sm">info@needates.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* form */}
          <div className="bg-red-100 p-5 sm:w-2/5 ">
            <div className="mb-5">
              <label
                htmlFor="Name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="Name"
                id="Name"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                placeholder="Type here... "
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="Email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="Email"
                id="Email"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                placeholder="Type here..."
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="detail"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Details
              </label>
              <textarea
                type="Detail"
                id="detail"
                rows="5"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                placeholder="Type here..."
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
             Send
            </button>
          </div>
        </div>
      </section>
      {/* <section className="p-6">
      <div className="container ">
        <h2 className="text-2xl font-bold text-black mb-4">GET IN TOUCH</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <FiPhone className="text-red-fill text-lg mt-1" />
            <div>
              <p className="text-black font-bold text-sm">CALL US:</p>
              <p className="text-gray-700 text-sm">240 751 3929</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <FiMail className="text-red-500 text-lg mt-1" />
            <div>
              <p className="text-black font-bold text-sm">MAIL US:</p>
              <p className="text-gray-700 text-sm">info@needates.com</p>
            </div>
          </div>
        </div>
      </div>
    </section> */}
      {/* <section className="p-6">
      <div className="container mx-auto text-left">
        <h2 className="text-2xl font-bold text-black mb-4">GET IN TOUCH</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <FontAwesomeIcon icon={faPhone} className="text-red-500 text-sm mt-1" />
            <div>
              <p className="text-black font-bold text-sm">CALL US:</p>
              <p className="text-gray-700 text-sm">240 751 3929</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <FontAwesomeIcon icon={faEnvelope} className="text-red-500 text-sm mt-1" />
            <div>
              <p className="text-black font-bold text-sm">MAIL US:</p>
              <p className="text-gray-700 text-sm">info@needates.com</p>
            </div>
          </div>
        </div>
      </div>
    </section> */}

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};
export default ContactUs;
