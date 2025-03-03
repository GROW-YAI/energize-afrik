import Logo from "../assets/images/energy.jpg";
import { FaInfoCircle } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaSchool } from "react-icons/fa";
import { MdFlight } from "react-icons/md";

export const COMPANY_DATA = {
  services: [{ title: "", description: "" }],
  name: "Energize Afrik",
  storeFrontLink: "https://paystack.com",
  logo: Logo,
  phones: ["+233(0)244885739"],
  emails: ["support@energizeafrik.com"],
  addresses: [
    {
      name: "8, Layi Oyekanmi Street, Mushin, Lagos State, Nigeria",
      lat: 0,
      lng: 0,
    },
  ],
  shortAbout:
    "Empowering rural communities with sustainable solar solutions for homes and agriculture in Ghana and beyond.",
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
