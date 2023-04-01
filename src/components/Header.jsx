import { Navbar } from "./Navbar";
export const Header = () => {
  return (
    <header className="bg-hero-mountains  bg-cover h-screen bg-no-repeat saturate-[.8]  opacity-80">
      <Navbar color='transparent' header/>

      <div className="flex flex-col justify-center items-center ">
        <h2 className="header-font  text-[7.1rem] pt-10">LOS ANGELES</h2>
        <span className="header-font text-[7.1rem] blue-gradient tracking-wider ">
          MOUNTAINS
        </span>
      </div>
    </header>
  );
};
