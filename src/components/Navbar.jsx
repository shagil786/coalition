export const Navbar = ({ bgColor, header }) => {
  return (
    <nav className={`flex justify-around items-center py-2 bg-${bgColor} h-20`}>
      <figure className="hover:scale-105 cursor-pointer flex items-center justify-center gap-4">
        <img
          src="/assets/logo.svg"
          alt="logo"
          className="w-10 border border-blue-950 rounded-full"
        />

        {header && (
          <figcaption className="flex flex-col justify-center items-center w-full ">
            <h2 className="header-font font-sm text-black ">LOS ANGELES</h2>
            <span className="header-font font-sm blue-gradient tracking-wider ">
              MOUNTAINS
            </span>
          </figcaption>
        )}
      </figure>

      <ul className="flex gap-6 items-center">
        <li className={`nav-links ${header ? "text-black" : "text-white"}`}>
          <a href="#history">01. HISTORY</a>
        </li>
        <li className={`nav-links ${header ? "text-black" : "text-white"}`}>
          <a href="#team">02. TEAM</a>
        </li>
      </ul>
    </nav>
  );
};
