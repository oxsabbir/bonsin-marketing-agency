import icons from "../assets/icons";
import svgIcon from "../assets/svgs/svgIcon";

// service image
import item1 from "../assets/image/item1.png";
import item2 from "../assets/image/item2.png";
import item3 from "../assets/image/item3.png";
import item4 from "../assets/image/item4.png";
import item5 from "../assets/image/item5.png";
import item6 from "../assets/image/item6.png";

// member image

import member1 from "../assets/image/member/item1.png";
import member2 from "../assets/image/member/item2.png";
import member3 from "../assets/image/member/item3.png";

// project image

import project1 from "../assets/image/project/item1.png";
import project2 from "../assets/image/project/item2.png";

export const socialLinks = [
  {
    links: "www.facebook.com/#",
    icon: icons.facebook,
  },
  {
    links: "www.facebook.com/#",
    icon: icons.twitter,
  },
  {
    links: "www.facebook.com/#",
    icon: icons.insta,
  },
  {
    links: "www.facebook.com/#",
    icon: icons.linkdin,
  },
];

export const navMenu = [
  {
    title: "Home",
    link: "#home",
    more: true,
  },
  {
    title: "About",
    link: "#about",
    more: false,
  },
  {
    title: "Services",
    link: "#services",
    more: true,
  },
  {
    title: "Project",
    link: "#project",
    more: true,
  },
  {
    title: "Gallery",
    link: "#gallery",
    more: false,
  },
  {
    title: "Pages",
    link: "#pages",
    more: true,
  },
  {
    title: "News",
    link: "#news",
    more: true,
  },
  {
    title: "Contact",
    link: "#contact",
    more: true,
  },
];

export const aboutContent = [
  {
    icon: svgIcon.chart,
    title: "Our Mission",
    details: `Nunc nec amet vestibulum. Nunc fringilla,
aenean ipsum lorem morbi consectetuer`,
  },
  {
    icon: svgIcon.handPoint,
    title: "Our Vision",
    details: `Nunc nec amet vestibulum. Nunc fringilla,
aenean ipsum lorem morbi consectetuer`,
  },
  {
    icon: svgIcon.message,
    title: "Our Value",
    details: `Nunc nec amet vestibulum. Nunc fringilla,
aenean ipsum lorem morbi consectetuer`,
  },
];

export const servicesContent = [
  {
    title: "Financial Analysis",
    details: `Aptent non, dictum ac dui quis dolor orci
luctus acfermentum risus lorem
volutpat placerat`,
    image: item1,
  },
  {
    title: "Take Better Decisions",
    details: `Aptent non, dictum ac dui quis dolor orci
luctus acfermentum risus lorem
volutpat placerat`,
    image: item2,
  },
  {
    title: "Growth Tracking",
    details: `Aptent non, dictum ac dui quis dolor orci
luctus acfermentum risus lorem
volutpat placerat`,
    image: item3,
  },
  {
    title: "Trading Missions",
    details: `Aptent non, dictum ac dui quis dolor orci
luctus acfermentum risus lorem
volutpat placerat`,
    image: item4,
  },
  {
    title: "Planning Strategies",
    details: `Aptent non, dictum ac dui quis dolor orci
luctus acfermentum risus lorem
volutpat placerat`,
    image: item5,
  },
  {
    title: "Successful Marketing",
    details: `Aptent non, dictum ac dui quis dolor orci
luctus acfermentum risus lorem
volutpat placerat`,
    image: item6,
  },
];

export const memberContent = [
  {
    name: "Hera Rahman",
    role: "consultant",
    image: member1,
  },
  {
    name: "Heliam B Panna",
    role: "consultant",
    image: member2,
  },
  {
    name: "Sharmin Sultana",
    role: "consultant",
    image: member3,
  },
];

export const countContent = [
  {
    number: "10+",
    area: "years of experience",
  },
  {
    number: "150+",
    area: "Expert Consltants",
  },
  {
    number: "20,000",
    area: "activated clients",
  },
  {
    number: "3k",
    area: "project finished",
  },
];

export const projectContent = [
  {
    image: project1,
    title: "Financial Services",
    details: "Client : Melan",
  },
  {
    image: project2,
    title: "Financial Services",
    details: "Client : Melan",
  },
];
