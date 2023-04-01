export const Navbar = () => {
  return (
    <nav className="flex justify-around items-center py-2 bg-transparent">
      <figure className="hover:scale-105 cursor-pointer">
        <img src="/assets/logo.png" alt="logo" />
      </figure>

      <ul className="flex gap-6 items-center">
        <li className="hover:scale-105 cursor-pointer underline text-white text-xs font-bold underline-offset-1">
          <a href="#history">01. HISTORY</a>
        </li>
        <li className="hover:scale-105 cursor-pointer underline text-white text-xs font-bold underline-offset-1">
          <a href="#team">02. TEAM</a>
        </li>
      </ul>
    </nav>
  );
};
