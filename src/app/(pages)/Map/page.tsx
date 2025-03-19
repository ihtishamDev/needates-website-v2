"use client";
import Topbar from "../Topbar/pages";
import Image from "next/image";
import Footer from "../Footer/pages";
import { useState } from "react";
const Map = () => {
  const [selectedMonth, setSelectedMonth] = useState("April");
  const [selectedYear, setSelectedYear] = useState("2024");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from({ length: 11 }, (_, i) => (2020 + i).toString()); 

  return (
    <div>
      <Topbar />
      <section
        className="bg-center bg-no-repeat "
        style={{ backgroundImage: "url(/images/Mappage.png)" }}
      >
        <div className="container text-center py-30">
          <h1 className="mb-4 font-bold tracking-tight leading-none text-white sm:text-5xl text-3xl">
            Needates Map
          </h1>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <p className="sm:mt-30 mt-20">
            Select a Region to see available dates
          </p>

          <div className="flex items-center justify-center bg-gray-100 px-4 py-2 rounded-md space-x-4 w-fit mx-auto mt-4 border border-gray-300 shadow-sm">
            <div className="relative flex items-center">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="bg-transparent text-gray-700 text-sm px-4 py-1 pr-6 rounded-md appearance-none focus:outline-none cursor-pointer"
              >
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                ⌄
              </div>
            </div>

            <div className="h-5 w-px bg-gray-300"></div>

            <div className="relative flex items-center">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-transparent text-gray-700 text-sm px-4 py-1 pr-6 rounded-md appearance-none focus:outline-none cursor-pointer"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                ⌄
              </div>
            </div>
          </div>
          <div className="sm:mt-30 mt-30 sm:px-25 px-10">
            <Image src="/images/Map.png" alt="Map" width={1000} height={50} />
          </div>
        </div>
      </section>

      <div className="sm:mt-30 mt-30">
        <Footer />
      </div>
    </div>
  );
};
export default Map;
