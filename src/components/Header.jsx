import { Navbar } from "./Navbar";
export const Header = () => {
  return (
    <header loading='lazy' className={`bg-hero-mountains bg-cover h-screen bg-no-repeat saturate-[.8]  opacity-80`}>
      <Navbar bgColor="transparent" linkColor="white" />

      <div className="flex flex-col justify-center items-center ">
        <h1 className="header-font  text-7xl sm:text-[7.1rem] pt-10">LOS ANGELES</h1>
        <span className="header-font text-7xl  sm:text-[7.1rem] blue-gradient tracking-wider ">
          MOUNTAINS
        </span>
      </div>
    </header>
  );
};
