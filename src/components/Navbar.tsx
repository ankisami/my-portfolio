import { useState } from "react";
import { navItems } from "../constants/Navbar";
import classnames from "classnames";

type NavbarProps = {
  navOpen: boolean;
  setNavOpen: (open: boolean) => void;
};

const Navbar = ({ navOpen, setNavOpen }: NavbarProps) => {
  const [sectionSelected, setSectionSelected] = useState(navItems[0].label);
  // const activeBox = useRef<HTMLDivElement>(null);

  const handleNavClick = (section: string) => {
    setSectionSelected(section);
    setNavOpen(false);
  };

  return (
    <nav className={classnames("navbar", { active: navOpen })}>
      {navItems.map(({ label, link }) => (
        <a
          href={link}
          key={label}
          className={`nav-link ${label === sectionSelected ? "active" : ""} ${
            label === "Contact" ? "md:hidden" : ""
          }`}
          onClick={() => handleNavClick(label)}
        >
          {label}
        </a>
      ))}
      {/* TODO : Add active box with slider animation later */}
      {/* <div className="active-box" ref={activeBox}></div> */}
    </nav>
  );
};

export default Navbar;
