// import Topbar from "../Topbar/pages";
// import Footer from "../Footer/pages";
// // import { FontAwesomeIcon } from "@htmlFortawesome/react-fontawesome";
// // import { faEnvelope, faPhone } from "@htmlFortawesome/free-solid-svg-icons";
// // import { FiPhone, FiMail } from "react-icons/fi";
// import { MdEmail, MdCall } from "react-icons/md";

// const ContactUs = () => {

//   return (
//     <div>
//       <Topbar />
//       <section
//         className="bg-center bg-no-repeat bg-cover"
//         style={{ backgroundImage: "url(/images/ContactUs.png)" }}
//       >
//         <div className="container text-center py-30">
//           <h1 className="mb-4 font-bold tracking-tight leading-none text-white sm:text-5xl text-3xl">
//             Contact Us
//           </h1>
//         </div>
//       </section>
//       <section className="p-6 sm:mt-25 mt-15 mb-20">
//         <div className="container sm:flex justify-between sm:px-30">
//           <div className="py-10 ">
//             <h2 className="text-4xl font-bold text-black mb-4">GET IN TOUCH</h2>
//             <div className="space-y-6">
//               <div className="flex items-start gap-3">
//                 <MdCall className="text-red-500 text-xl fill-current" />
//                 <div>
//                   <p className="text-black font-bold text-xl">CALL US:</p>
//                   <p className="text-gray-700 text-sm">240 751 3929</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <MdEmail className="text-red-500 text-xl fill-current" />
//                 <div>
//                   <p className="text-black font-bold text-xl">MAIL US:</p>
//                   <p className="text-gray-700 text-sm">info@needates.com</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* form */}
//           <div className="bg-red-100 p-5 sm:w-2/5 ">
//             <div className="mb-5">
//               <label
//                 htmlFor="Name"
//                 className="block mb-2 text-sm font-medium text-gray-900"
//               >
//                 Name
//               </label>
//               <input
//                 type="Name"
//                 id="Name"
//                 className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
//                 placeholder="Type here... "
//                 required
//               />
//             </div>
//             <div className="mb-5">
//               <label
//                 htmlFor="Email"
//                 className="block mb-2 text-sm font-medium text-gray-900 "
//               >
//                 Email
//               </label>
//               <input
//                 type="Email"
//                 id="Email"
//                 className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//                 placeholder="Type here..."
//                 required
//               />
//             </div>
//             <div className="mb-5">
//               <label
//                 htmlFor="detail"
//                 className="block mb-2 text-sm font-medium text-gray-900 "
//               >
//                 Details
//               </label>
//               <textarea
//                 id="detail"
//                 rows={5}
//                 className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//                 placeholder="Type here..."
//                 required
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       </section>
//       {/* <section className="p-6">
//       <div className="container ">
//         <h2 className="text-2xl font-bold text-black mb-4">GET IN TOUCH</h2>
//         <div className="space-y-4">
//           <div className="flex items-start gap-3">
//             <FiPhone className="text-red-fill text-lg mt-1" />
//             <div>
//               <p className="text-black font-bold text-sm">CALL US:</p>
//               <p className="text-gray-700 text-sm">240 751 3929</p>
//             </div>
//           </div>

//           <div className="flex items-start gap-3">
//             <FiMail className="text-red-500 text-lg mt-1" />
//             <div>
//               <p className="text-black font-bold text-sm">MAIL US:</p>
//               <p className="text-gray-700 text-sm">info@needates.com</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section> */}
//       {/* <section className="p-6">
//       <div className="container mx-auto text-left">
//         <h2 className="text-2xl font-bold text-black mb-4">GET IN TOUCH</h2>
//         <div className="space-y-4">
//           <div className="flex items-start gap-3">
//             <FontAwesomeIcon icon={faPhone} className="text-red-500 text-sm mt-1" />
//             <div>
//               <p className="text-black font-bold text-sm">CALL US:</p>
//               <p className="text-gray-700 text-sm">240 751 3929</p>
//             </div>
//           </div>

//           <div className="flex items-start gap-3">
//             <FontAwesomeIcon icon={faEnvelope} className="text-red-500 text-sm mt-1" />
//             <div>
//               <p className="text-black font-bold text-sm">MAIL US:</p>
//               <p className="text-gray-700 text-sm">info@needates.com</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section> */}

//       <div className="">
//         <Footer />
//       </div>
//     </div>
//   );
// };
// export default ContactUs;
"use client";
import { useState } from "react";
import axios from "axios";
import Topbar from "../Topbar/pages";
import Footer from "../Footer/pages";
import { MdEmail, MdCall } from "react-icons/md";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    detail: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log("shami")
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:4000/users/form", formData); 
  
      console.log("Response:", response.data);
      alert("Form submitted successfully!");
  
      setFormData({ name: "", email: "", detail: "" });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        alert(
          error.response.data.message ||
          "Failed to submit form. Please try again."
        );
      } else {
        alert("Something went wrong. Please try again.");
      }
    }
  };
  

  return (
    <div>
      <Topbar />
      <section
        className="bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(/images/ContactUs.png)" }}
      >
        <div className="container text-center py-30">
          <h1 className="mb-4 font-bold tracking-tight leading-none text-white sm:text-5xl text-3xl">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="p-6 sm:mt-25 mt-15 mb-20">
        <div className="container sm:flex justify-between sm:px-30">
          <div className="py-10">
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

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-red-100 p-5 sm:w-2/5">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Type here..."
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Type here..."
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="detail"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Details
              </label>
              <textarea
                id="detail"
                name="detail"
                rows={5}
                value={formData.detail}
                onChange={handleChange}
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Type here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
