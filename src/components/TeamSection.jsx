import { Schedule } from "./ui/Schedule";
export const TeamSection = () => {
  return (
    <section
      className="bg-snow-peak bg-cover h-screen bg-no-repeat relative"
      id="team"
    >
      <div className="flex flex-col ">
        <div className="w-full h-full sm:h-40  lg:px-60 px-10 bg-white relative flex flex-col sm:flex-row justify-around items-center">
          <h4 className="font-Oswald text-[8.5rem] text-[#677896] font-black">
            02.
          </h4>
          <span className="text-[2rem] font-black md:left-[12rem] text-[#414f6b] absolute left-[16.5rem] lg:left-[24.5rem] top-20">
            CLIMB
          </span>
          <p className="text-justify sm:ml-24 my-4 w-full">
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
            gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
            dignissim tortor nec congue.
          </p>
        </div>
        <div className="w-full sm:h-8 bg-[#414f6b] overflow-hidden">
          <ul className="flex flex-col sm:flex-row px-20 sm:pl-60 gap-4">
            <li className="section-links">
              <a href="/">Mountain 1</a>
            </li>
            <li className="section-links">
              <a href="/">Mountain 2</a>
            </li>
          </ul>

        
        </div>
        <Schedule/>
      </div>
    </section>
  );
};
