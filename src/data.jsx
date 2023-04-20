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
import elvaModelPageHero from "./assets/image/elva_model_page_hero_section.jpg"
import elvaModelPageSwipe1 from "./assets/image/elva_model_page_swiper-1.jpg"
import elvaModelPageSwipe2 from "./assets/image/elva_model_page_swiper-2.jpg"
import elvaModelPageSwipe3 from "./assets/image/elva_model_page_swiper-3.jpg"
import elvaModelPageSwipe4 from "./assets/image/elva_model_page_swiper-4.jpg"
import elvaModelPageSwipe5 from "./assets/image/elva_model_page_swiper-5.jpg"
import elvaModelPageSwipe6 from "./assets/image/elva_model_page_swiper-6.jpg"
import elvaModelPageArticle1 from "./assets/image/elva_model_page_article-1.jpg"
import elvaModelPageArticle2 from "./assets/image/elva_model_page_article-2.jpg"
import elvaModelPageArticle3 from "./assets/image/elva_model_page_article-3.jpg"
import elvaStatscard from "./assets/image/elva_statscard.jpg"
import mc720ModelPageHero from "./assets/image/720s_model_page_hero_section.jpg"
import mc720ModelPageSwiper1 from "./assets/image/720s_model_page_swiper-1.jpg"
import mc720ModelPageSwiper2 from "./assets/image/720s_model_page_swiper-2.jpg"
import mc720ModelPageSwiper3 from "./assets/image/720s_model_page_swiper-3.jpg"
import mc720ModelPageArticle1 from "./assets/image/720s_model_page_article-1.jpg"
import mc720ModelPageArticle2 from "./assets/image/720s_model_page_article-2.jpg"
import mc720ModelPageArticle3 from "./assets/image/720s_model_page_article-3.jpg"
import mc720Statscard from "./assets/image/720s_statscard.webp"
import arturaModelPageSwiper1 from "./assets/image/artura_model_page_swiper-1.jpg"
import arturaModelPageSwiper2 from "./assets/image/artura_model_page_swiper-2.jpg"
import arturaModelPageSwiper3 from "./assets/image/artura_model_page_swiper-3.jpg"
import arturaModelPageSwiper4 from "./assets/image/artura_model_page_swiper-4.jpg"
import arturaModelPageSwiper5 from "./assets/image/artura_model_page_swiper-5.jpg"
import arturaModelPageHero from "./assets/image/artura_model_page_hero_section.png"
import arturaModelPageArticle1 from "./assets/image/artura_model_page_article-1.jpg"
import arturaModelPageArticle2 from "./assets/image/artura_model_page_article-2.jpeg"
import arturaModelPageArticle3 from "./assets/image/artura_model_page_article-3.jpg"
import arturaStatscard from "./assets/image/artura_statscard.jpg"

// FIXME WITH IMAGES
export const modelData = {
  elva: {
    name: "elva",
    description: "powerful roadster & lightest McLaren",
    slogan: "Formed by the wind",
    homePageHeroImage,
    homePageModelImage: homePageModelElva,
    modelPageHeroImage: elvaModelPageHero,
    videoThumbnail: elvaVideoThumbnail,
    videoUrl:
      "https://res.cloudinary.com/dytia9net/video/upload/v1681624003/video/Air_Power_-_McLaren_Elva_sb6qev",
    modelUrl: "/models/mclaren_elva.glb",
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
    statscardThumbnail: elvaStatscard,
    modelSwiperImages: [
      elvaModelPageSwipe1,
      elvaModelPageSwipe2,
      elvaModelPageSwipe3,
      elvaModelPageSwipe4,
      elvaModelPageSwipe5,
      elvaModelPageSwipe6,
    ],
    modelArticleImages: [
      elvaModelPageArticle1,
      elvaModelPageArticle2,
      elvaModelPageArticle3,
    ],
  },
  artura: {
    name: "artura",
    description: "mew high-performance hybrid supercar",
    slogan: "the full force of McLAREN",
    homePageHeroImage: "",
    homePageModelImage: homePageModelArtura,
    modelPageHeroImage: arturaModelPageHero,
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
        title: "AN ALL-NEW ERA",
        content:
          "With Artura, we started with a clean sheet. The McLaren Carbon Fibre Lightweight Architecture (MCLA) at its core is all-new. As is the High-Performance Hybrid powertrain. And so much more. Our relentless pursuit of lightness reaches another level. Aerodynamic efficiency is more advanced than ever. Helping to shape a minimal, beautiful new design.",
      },
      {
        title: "",
        content:
          "From the rear suspension to the advanced E-differential, every new element contributes to a uniquely intense driving experience. Ultra-light supercar engineering. Blistering electrified power. Sublime agility and engagement. McLaren to the core. For the next generation.",
      },
      {
        title: "THE IMAGINATION",
        content:
          "Low and lean. Minimal and powerful. Artura is a brand new interpretation of our design language. Yet from managing airflow and heat, to achieving an ultra-low centre of gravity, and even enabling the perfect driving position – every curve exists for a reason. The seamless, sculpted feel is made possible by cutting edge carbon fibre expertise and advanced techniques such as Superforming. Beautiful functionality, that functions beautifully.",
      },
    ],
    statscardThumbnail: arturaStatscard,
    modelSwiperImages: [
      arturaModelPageSwiper1,
      arturaModelPageSwiper2,
      arturaModelPageSwiper3,
      arturaModelPageSwiper4,
      arturaModelPageSwiper5,
    ],
    modelArticleImages: [
      arturaModelPageArticle1,
      arturaModelPageArticle2,
      arturaModelPageArticle3,
    ],
  },
  "720S": {
    name: "720S",
    description: "lighter, stronger, faster, better supercar",
    slogan: "raise your limits",
    homePageHeroImage: "",
    homePageModelImage: homePageModelMc720,
    modelPageHeroImage: mc720ModelPageHero,
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
        title: "FIERCE ELEGANCE",
        content: `A light and strong supercar shaped by the forces of nature. Honed by the elements. Poised for attack. And ferociously fast. Yet beautifully made, tactile and effortlessly usable, every day.
          
          The McLaren 720S coupe is purposeful and radical. With apex predator responses. This light and strong supercar accelerates from 0-60mph in an incredible 2.8 seconds when provoked. And can cover a quarter of a mile in 10.4 seconds. From a standing start.
          
          But raw figures don’t reveal the whole story. There is pure driver engagement and contemporary luxury here too. In depth. A thrilling, accessible, natural balance.

          Evolution in full flight.
          `,
      },
      {
        title: "BEAUTY OF THE BEAST",
        content:
          "The McLaren 720S is born of the McLaren design philosophy: everything for a reason. The powerful simplicity and integrity of this ethos shapes stunning cars. Through an intense, evolutionary process. The radical shape of the 720S is inspired by the teardrop. Nature’s perfect aerodynamic form. It takes this shape because it helps to deliver superlative performance. And aerodynamic efficiency. Every design detail is the same. Created to improve performance. Sharpen handling. Intensify engagement. Enhance comfort. Beautifully.",
      },
    ],
    statscardThumbnail: mc720Statscard,
    modelSwiperImages: [
      mc720ModelPageSwiper1,
      mc720ModelPageSwiper2,
      mc720ModelPageSwiper3,
    ],
    modelArticleImages: [
      mc720ModelPageArticle1,
      mc720ModelPageArticle2,
      mc720ModelPageArticle3,
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
