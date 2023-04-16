export const navLinks = [
  {
    link: "racing",
    sublinks: ["formula 1", "indycar", "extreme e", "esports"],
  },
  {
    link: "automotive",
    sublinks: ["automotive", "solius gt"],
  },
  {
    link: "group",
    sublinks: ["investors"],
  },
  {
    link: "careers",
    sublinks: ["automotive careers", "racing careers"],
  },
]

import {
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai"

export const socialMediaLinks = {
  instagram: {
    icon: <AiFillInstagram />,
    url: "https://www.instagram.com/mclarenauto/",
  },
  twitter: {
    icon: <AiOutlineTwitter />,
    url: "https://twitter.com/McLarenF1",
  },
  youtube: {
    icon: <AiFillYoutube />,
    url: "https://www.youtube.com/@McLarenAutomotiveTV",
  },
}
