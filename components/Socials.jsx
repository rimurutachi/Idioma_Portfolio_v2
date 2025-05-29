"use client";

import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";

const socials = [
  {
    icon: <BiLogoFacebook />,
    path: "https://www.facebook.com/jimmmmmaaaaarrrrr/",
  },
  {
    icon: <BiLogoInstagramAlt />,
    path: "https://www.instagram.com/jimmmmmaaaaarrrrr/",
  },
  {
    icon: <BiLogoLinkedin />,
    path: "https://www.linkedin.com/in/jimmar-idioma-aa2614245/",
  },
  {
    icon: <BiLogoTwitter />,
    path: "https://x.com/jimmar2012",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <div key={index} className={iconStyles}>
            {item.icon}
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
