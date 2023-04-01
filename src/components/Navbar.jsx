export const Navbar = ({ color, header }) => {
  return (
    <nav className={`flex justify-around items-center py-2 bg-${color}`}>
      <figure className="hover:scale-105 cursor-pointer flex items-center justify-center gap-4">
        
        <img src="/assets/logo.svg" alt="logo" className="w-10" />
     
        {header && (
          <figcaption className="flex flex-col justify-center items-center w-full ">
            <h2 className="header-font font-sm ">LOS ANGELES</h2>
            <span className="header-font font-sm blue-gradient tracking-wider ">
              MOUNTAINS
            </span>
          </figcaption>
        )}
      </figure>

      <ul className="flex gap-6 items-center">
        <li className="nav-links">
          <a href="#history">01. HISTORY</a>
        </li>
        <li className="nav-links">
          <a href="#team">02. TEAM</a>
        </li>
      </ul>
    </nav>
  );
};
