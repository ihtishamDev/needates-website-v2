import { CheckCircle } from "lucide-react";

interface PricingCardProps {
  pricing?: string; // Optional string type
}
const PricingCard: React.FC<PricingCardProps> = ({ pricing }) => {
  return (
    <div className="">
       <div className="flex flex-col md:flex-row md:justify-center items-center py-15  gap-x-12  sm:px-2">
      {/* First Card */}
      <div className="w-full max-w-[90%] md:max-w-[30%] bg-white border border-gray-200 rounded-lg shadow-sm p-6 sm:p-8 text-left   mt-10">
        <h1 className="text-4xl font-bold text-red-900">
          {pricing || "$450"}
          <span className="text-sm text-gray-600 font-normal">
            {" "}
            / per month billed annually
          </span>
        </h1>
        <p className="text-2xl font-bold mt-5">For Hotels:</p>
        <hr className="text-gray-400 mt-3" />
        <ul className="mt-7 flex flex-col text-sm space-y-3">
          <li className="flex items-start gap-x-2">
            <CheckCircle className="text-gray-700 flex-shrink-0" />
            <span>18-month booking window</span>
          </li>
          <li className="flex gap-x-2">
            <CheckCircle className="text-gray-700 flex-shrink-0" />
            <span>
              Access to over 500 qualified short-term convention planners
            </span>
          </li>
          <li className="flex items-start gap-x-2">
            <CheckCircle className="text-gray-700 flex-shrink-0" />
            <span>
              Exposure to thousands of planners via Facebook, LinkedIn, &
              Needates website
            </span>
          </li>
        </ul>
        <div className="sm:mt-35.5 mt-25">
          
          <button
            type="button"
            className="text-white bg-red-800 font-medium rounded-full p-3 py-2 flex items-center justify-between w-full"
          >
            <span className="flex-1 text-left">Get Started</span>
            <svg
              className="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
      

      {/* Second Card */}
      <div className="w-full max-w-[90%] md:max-w-[30%] bg-white border border-gray-200 rounded-lg shadow-sm p-6 sm:p-8 text-left  mt-10">
        <h1 className="text-4xl font-bold text-red-900">
          {pricing || "Free"}
          <span className="text-sm text-gray-600 font-normal">
            {" "}
            / per month billed annually
          </span>
        </h1>
        <p className="text-2xl font-bold mt-5">For Planners:</p>
        <hr className="text-gray-400 mt-3" />
        <ul className="mt-7 flex flex-col text-sm space-y-3">
          <li className="flex items-start gap-x-2">
            <CheckCircle className="text-gray-700 flex-shrink-0" />
            <span>
              Access to over 100 convention Hotels with open dates in the USA
            </span>
          </li>
          <li className="flex gap-x-2">
            <CheckCircle className="text-gray-700 flex-shrink-0" />
            <span>
              Real time date availability with all necessary information
              (available rooms, meeting space and booking incentives)
            </span>
          </li>
          <li className="flex items-start gap-x-2">
            <CheckCircle className="text-gray-700 flex-shrink-0" />
            <span>Guaranteed responses within 24 hours to requests</span>
          </li>
        </ul>
        <div className="sm:mt-26 mt-25">
          <button
            type="button"
            className="text-white bg-red-800 font-medium rounded-full p-3 py-2 flex items-center justify-between w-full "
          >
            <span className="flex-1 text-left">Get Started</span>
            <svg
              className="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default PricingCard;

// import { CheckCircle } from "lucide-react";

// const PricingCard = ({
//   pricing,
// //   title,
// //   image,
// //   description,
// //   author,
// //   publisheddate,
// //   button,
// }) => {
//   return (
//     <div className="flex gap-10">
//         <div className="w-full flex-1  max-w-[30%] bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 text-left dark:bg-gray-800 dark:border-gray-700">
//       <div className="">
//         <h1 className="text-4xl font-bold text-red-900">
//           {pricing || "$450"}
//           <span className="text-sm text-gray-600 font-normal">
//             {" "}
//             / per month billed annually
//           </span>
//         </h1>
//         <p className="text-2xl font-bold mt-5 ">For Hotels:</p>
//         <hr className="text-gray-400 mt-3" />
//         <ul className="mt-7 flex flex-col text-sm space-y-3">
//           <li className="flex items-start gap-x-2">
//             <CheckCircle className="text-gray-700 flex-shrink-0" />
//             <span>18-month booking window</span>
//           </li>
//           <li className="flex  gap-x-2">
//             <CheckCircle className=" text-gray-700 flex-shrink-0" />
//             <span>
//               Access to over 500 qualified short-term convention planners
//             </span>
//           </li>
//           <li className="flex items-start gap-x-2">
//             <CheckCircle className=" text-gray-700 flex-shrink-0" />
//             <span>
//               Exposure to thousands of planners via Facebook, LinkedIn, &
//               Needates website
//             </span>
//           </li>
//         </ul>

//         <div className="mt-30">
//           <button
//             type="button"
//             className="text-white bg-red-800
//                    font-medium rounded-full p-7 py-2
//                    flex items-center justify-between w-full
//                    dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             <span className="flex-1 text-left">Get Started</span>
//             <svg
//               className="w-3.5 h-3.5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 14 10"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 5h12m0 0L9 1m4 4L9 9"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//     </div>
//     <div className="w-full  max-w-[30%] bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 text-left dark:bg-gray-800 dark:border-gray-700">
//       <div className="">
//         <h1 className="text-4xl font-bold text-red-900">
//           {pricing || "$450"}
//           <span className="text-sm text-gray-600 font-normal">
//             {" "}
//             / per month billed annually
//           </span>
//         </h1>
//         <p className="text-2xl font-bold mt-5 ">For Hotels:</p>
//         <hr className="text-gray-400 mt-3" />
//         <ul className="mt-7 flex flex-col text-sm space-y-3">
//           <li className="flex items-start gap-x-2">
//             <CheckCircle className="text-gray-700 flex-shrink-0" />
//             <span>18-month booking window</span>
//           </li>
//           <li className="flex  gap-x-2">
//             <CheckCircle className=" text-gray-700 flex-shrink-0" />
//             <span>
//               Access to over 500 qualified short-term convention planners
//             </span>
//           </li>
//           <li className="flex items-start gap-x-2">
//             <CheckCircle className=" text-gray-700 flex-shrink-0" />
//             <span>
//               Exposure to thousands of planners via Facebook, LinkedIn, &
//               Needates website
//             </span>
//           </li>
//         </ul>

//         <div className="mt-30">
//           <button
//             type="button"
//             className="text-white bg-red-800
//                    font-medium rounded-full p-7 py-2
//                    flex items-center justify-between w-full
//                    dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             <span className="flex-1 text-left">Get Started</span>
//             <svg
//               className="w-3.5 h-3.5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 14 10"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 5h12m0 0L9 1m4 4L9 9"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//     </div>
//     </div>

//   );
// };

// export default PricingCard;

{
  /* <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mt-2 text-xs ">
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <button className="text-x font-bold mt-2">{button}</button>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
      <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
        <span>{author}</span>
        <span>{publisheddate}</span>
      </div>
    </div> */
}
