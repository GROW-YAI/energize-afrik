import Logo from "/favicon.ico";
import { FaInfoCircle } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaSchool } from "react-icons/fa";
import { MdFlight } from "react-icons/md";

export const COMPANY_DATA = {
  services: [{ title: "", description: "" }],
  name: "EnergizAfriq",
  storeFrontLink: "https://paystack.shop/energiz-afriq",
  logo: Logo,
  phones: ["+233(0) 59 166 8341"],
  emails: ["asumaduprinceagyare@gmail.com"],
  addresses: [
    {
      name: "Bodomase, Sekyere Kumawu, Ashanti Region, Ghana",
      lat: 0,
      lng: 0,
    },
  ],
  shortAbout:
    "Empowering rural communities, new sites, farmers and areas not connected to the national grid with sustainable solar solutions for homes and agriculture in Ghana and beyond.",
  longAbout: "",
  CLIENTELE: [
    { name: "", company: "", position: "", comment: "" },
    { name: "", company: "", position: "", comment: "" },
    { name: "", company: "", position: "", comment: "" },
    { name: "", company: "", position: "", comment: "" },
  ],
};

export const SECTIONS = [
  { text: "About", icon: FaInfoCircle, to: "#about" },
  { text: "Services", icon: MdOutlineWork, to: "#services" },
  { text: "Schools", icon: FaSchool, to: "#schools" },
  { text: "Destinations", icon: MdFlight, to: "#destinations" },
  { text: "Contact Us", icon: IoMdMail, to: "#contact-us" },
  { text: "FAQs", icon: BsFillQuestionSquareFill, to: "#faqs" },
];
