import Topbar from "../Topbar/pages";
import Footer from "../Footer/pages";
import PriceingCard from "../Components/PriceingCard/page";
const Pricing = () => {
  return (
    <div>
      <Topbar />
      <section
        className="bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(/images/Pricing.png)" }}
      >
        <div className="container text-center py-30">
          <h1 className="mb-4 font-bold tracking-tight   text-white sm:text-5xl text-3xl">
            Pricing
          </h1>
        </div>
      </section>
      <section className="container text-center py-15 sm:py-20">
        <div className="tracking-tight leading-loose">
          <h1 className="sm:text-4xl font-bold sm:mb-4">Join the Needates Community</h1>
          <p className="sm:text-x ">
            Are you a planner in search of need date availability? <br />Is your hotel
            looking to boost your need dates to a targeted audience?<br /> Sign up
            with one of our options.
          </p>
        </div>
        <div className="">
          <PriceingCard/>
        </div>
        
      </section>
      <div>
          <Footer/>
        </div>
    </div>
  );
};
export default Pricing;
