import WhoWeAre from "../../components/Company/WhoWeAre/WhoWeAre";
import HowWeWork from "../../components/Company/HowWeWork/HowWeWork";
import Hero from "../../components/Company/Hero/Hero";

function Company() {
  return (
    <>
      <Hero />

      <div className="company-page-wrapper">
        <WhoWeAre />
        <HowWeWork />
      </div>
    </>
  );
}

export default Company;
