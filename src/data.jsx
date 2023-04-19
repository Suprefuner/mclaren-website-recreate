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

import elvaVideoThumbnail from "./assets/image/mclaren_elva_video_image.jpg"
import arturaVideoThumbnail from "./assets/image/mclaren_artura.jpg"
import mc720VideoThumbnail from "./assets/image/mclaren_720.jpg"
import homePageModelElva from "./assets/image/model_section_elva.png"
import homePageModelMc720 from "./assets/image/model_section_mc720.png"
import homePageModelArtura from "./assets/image/model_section_artura.png"
import homePageHeroImage from "./assets/image/mclaren_elva.jpg"

// FIXME WITH IMAGES
export const modelData = {
  elva: {
    name: "elva",
    description: "powerful roadster & lightest McLaren",
    slogan: "Formed by the wind",
    homePageHeroImage,
    homePageModelImage: homePageModelElva,
    videoThumbnail: elvaVideoThumbnail,
    videoUrl:
      "https://res.cloudinary.com/dytia9net/video/upload/v1681624003/video/Air_Power_-_McLaren_Elva_sb6qev",
    modelUrl: "/models/mclaren_elva.glb",
    cameraPosition: { position: [1, 1, 4] },
    data: {
      topSpeed: {
        unit: "mph",
        value: 203,
        total: 500,
      },
      power: {
        unit: "ps",
        value: 815,
        total: 1000,
      },
      mph: {
        unit: "s",
        value: 2.8,
        total: 10,
      },
    },
    articles: [
      {
        title: "PURE, UNDILUTED CONNECTION",
        content:
          "A car that needs no destination. Or racetrack. A powerful roadster supercar created to deliver nothing but the purest possible driving experience. Uncompromised pleasure. The McLaren Elva… born to heighten every sense and build the closest connection between driver, car and the elements. Impossibly light. Intoxicatingly powerful. Split-second agility. ",
      },
      {
        title: "road bound ferocity",
        content:
          "The McLaren Elva pushes our daring design language forward. And proudly embraces the principles set down by Bruce McLaren’s original race conquering open top sports cars of the 1960s – the M1A, M1B and M1C. Just like our latest Ultimate Series, the original road-going ‘Elvas’ were lightweight, open-roofed, mid-engined, powerful roadsters… and single-mindedly created to deliver a driving experience of exhilarating purity.",
      },
    ],
    modelImages: [elvaVideoThumbnail, elvaVideoThumbnail, elvaVideoThumbnail],
  },
  artura: {
    name: "artura",
    description: "mew high-performance hybrid supercar",
    slogan: "the full force of McLAREN",
    homePageHeroImage: "",
    homePageModelImage: homePageModelArtura,
    videoThumbnail: arturaVideoThumbnail,
    videoUrl:
      "https://res.cloudinary.com/dytia9net/video/upload/v1681624002/video/Artura__The_Supercar_Electrified._zzowob.mp4",
    modelUrl: "/models/mclaren_p1.glb",
    camera: { position: [0, 3.5, 20], fov: 110 },
    data: {
      topSpeed: {
        unit: "mph",
        value: 205,
        total: 500,
      },
      power: {
        unit: "ps",
        value: 680,
        total: 1000,
      },
      mph: {
        unit: "s",
        value: 3,
        total: 10,
      },
    },
    articles: [
      {
        title: "",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit deserunt pariatur quae nam iure optio odio, possimus porro magni cumque?",
      },
      {
        title: "road bound ferocity",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit deserunt pariatur quae nam iure optio odio, possimus porro magni cumque?",
      },
      {
        title: "a standout performer",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit deserunt pariatur quae nam iure optio odio, possimus porro magni cumque?",
      },
    ],
    modelImages: [
      arturaVideoThumbnail,
      arturaVideoThumbnail,
      arturaVideoThumbnail,
    ],
  },
  "720S": {
    name: "720S",
    description: "lighter, stronger, faster, better supercar",
    slogan: "raise your limits",
    homePageHeroImage: "",
    homePageModelImage: homePageModelMc720,
    videoThumbnail: mc720VideoThumbnail,
    videoUrl:
      "https://res.cloudinary.com/dytia9net/video/upload/v1681624524/video/Orange_Rush_-_McLaren_720S_Spider_wxei3d.mp4",
    modelUrl: "/models/mclaren_spider.glb",
    camera: { position: [1, 1, 4] },
    data: {
      topSpeed: {
        unit: "mph",
        value: 212,
        total: 500,
      },
      power: {
        unit: "ps",
        value: 720,
        total: 1000,
      },
      "0-62 mph": {
        unit: "s",
        value: 2.8,
        total: 10,
      },
    },
    articles: [
      {
        title: "",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit deserunt pariatur quae nam iure optio odio, possimus porro magni cumque?",
      },
      {
        title: "road bound ferocity",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit deserunt pariatur quae nam iure optio odio, possimus porro magni cumque?",
      },
      {
        title: "a standout performer",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit deserunt pariatur quae nam iure optio odio, possimus porro magni cumque?",
      },
    ],
    modelImages: [
      mc720VideoThumbnail,
      mc720VideoThumbnail,
      mc720VideoThumbnail,
    ],
  },
}

export const configColor = {
  body: [
    "#000000",
    "#bd5515",
    "#009FBD",
    "#77037B",
    "#2c9684",
    "#0B2447",
    "#dbdbdb",
    "#81b331",
    "#00337C",
    "#d3a96b",
  ],
  interior: ["#000000", "#dbdbdb", "#bd5515", "#3C2A21", "#395144"],
}
