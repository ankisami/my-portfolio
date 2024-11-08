import { NavItem } from "../types";

export const navItems: NavItem[] = [
  {
    label: "Home",
    link: "#home",
    className: "nav-link active",
    ref: lastActiveLink,
  },
  {
    label: "About",
    link: "#about",
    className: "nav-link",
  },
  {
    label: "Work",
    link: "#work",
    className: "nav-link",
  },
  {
    label: "Reviews",
    link: "#reviews",
    className: "nav-link",
  },
  {
    label: "Contact",
    link: "#contact",
    className: "nav-link md:hidden",
  },
];
