export const Navbar = () => {
  return (
    <nav className="flex justify-around items-center py-2 bg-transparent">
      <figure className="hover:scale-105 cursor-pointer w-10">
        <img src="/assets/logo.svg" alt="logo" />
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
