import { PiArrowDown, PiArrowUpRight, PiHouse } from "react-icons/pi";
import { LinkItem } from "./lib/types";
import { SiGithub } from "react-icons/si";

export const links: LinkItem[] = [
  { id: 0, name: "Home", to: "/", icon: PiHouse },
  {
    id: 1,
    name: "About",
    to: "/#",
    icon: PiArrowDown,
  },
  { id: 2, name: "Features", to: "/#", icon: PiArrowDown },
  { id: 3, name: "Services", to: "/#", icon: PiArrowDown },

  {
    id: 4,
    name: "Projects",
    icon: PiArrowUpRight,
    to: "https://github.com/sagarmusabbir?tab=repositories",
  },
  {
    id: 5,
    name: "Contact",
    icon: PiArrowUpRight,
    to: "https://github.com/sagarmusabbir",
  },
];

export const siteData = {
  title: "Nomad Property Landing",
  author: "Musabbir Sagar",
  headerTitle: "Nomad-Flowbite-React-Propert-Landing",
  profileUrl: "/logo.svg",
  headerDescription:
    "Property Landing Template Created by Third Bracket Solution",
  footerText: "© All rights reserved",
  language: "en-us",
  locale: "en-US",
  websiteUrl: "https://nomadpropertylanding.vercel.app",
  username: "sagarmusabbir",
  avatarUrl: "/avatar.svg",
};
