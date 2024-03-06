import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Video Editor",
    icon: web,
  },
  {
    title: "Cinematics",
    icon: mobile,
  },
  {
    title: "Motion Animation",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Video Editor",
    company_name: "Nikhilesh Dhure",
    icon: starbucks,
    iconBg: "#383E56",
    date: "",
    points: [
      "Edited short form videos for nikhilesh dhure on Instagram.",
      "Responsible for increasing his follower count from 18k to 105k under 5 months.",
      "Collaborated constantly and evoled along the way.",
    ],
  },
  {
    title: "Video Editor",
    company_name: "Aditya(from WARICREW)",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Edited multiple long form podcasts with engaging intros and necessary cuts.",
      "Made highly engaging shorts/reels from those podcasts to bring in more people to the main podcast.",
      "Collaborated and constantly kept updating the style of the videos, so that it does not get repetitive.",
    ],
  },
  {
    title: "Video Editor and DOP",
    company_name: "Attreyo Musicals",
    iconBg: "#383E56",
    date: "",
    points: [
      "Edited and shot music videos.",
      "Made highly engaging and retentive content in the space of music.",
      "Took shots which are cinematic and made them enhance even more in the edit.",
    ],
  },
  {
    title: "Video Editor and DOP",
    company_name: "UBUNTU CAFE",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Shot food videos and was responsible for editing them in a highly engaging manner.",
      "Made the food look appetizing through the videos which drew attention of the viewers towards the cafe.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "Shrijit has been a tremendous benefit to our teamwork since his amazing video editing abilities, together with his outstanding ideation and smooth idea execution, have greatly enhanced the quality of our videos. His inventiveness and devotion have been priceless.      ",
    name: "Nik",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "Shrijit is a lovely cinematic video editor and I really admire his editing skills. We have done lots of music videos together and I hope he does well in his future projects.",
    name: "Attreyo Musicals",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "Shrijit is a brilliant editor. He understands the personality of the creator and edits accordingly. He has the sense of design and the skill of storytelling. It's been very easy to work with Shrijit since he always delivers when he commits.",
    name: "Aditya",
    designation: "",
    company: "",
    image: "",
  },
];

const videos = [

  {
    name: "Darjeeling",
    image: "/images/image.png",
    video : true,
    description:
      "Video Bottt is a video editing platform that allows users to create videos using a variety of templates and share them on social media.",
    url: "https://www.youtube.com/watch?v=NW03Tt8Wa2s&ab_channel=Cinemorph"
  },
  {
    name: "AI Tools video",
    image: "/images/image copy.png",
    video : true,
    url: "https://www.youtube.com/watch?v=3Xbu5IBPOlQ&t=58s&ab_channel=Cinemorph"
  },
  {
    name: "Davinci Tutorial",
    image: "/images/image copy 2.png",
    video : true,
    url: "https://www.youtube.com/watch?v=w15rIZa0_1s&ab_channel=Cinemorph"
  },
  {
    name: "Don't copy Peter Mckinnon",
    image: "/images/image copy 3.png",
    video : true,
    url: "https://www.youtube.com/watch?v=TA3x2eNas3k&ab_channel=Cinemorph"
  },
  {
    name: "Ode to Kolkata",
    image: "/images/image copy 4.png",
    video : true,
    url: "https://www.youtube.com/watch?v=GFXRwFRTnNM&ab_channel=Cinemorph"
  },
  {
    name: "Agomoni",
    image: "/images/image copy 5.png",
    video : true,
    url: "https://www.youtube.com/watch?v=1tstGpHqHKg&ab_channel=Cinemorph"
  },
  {
    name: "Podcast Intro 2",
    image: "/images/image copy 7.png",
    video : true,
    url: "/Videos/pod test 1.mp4",
  },
  {
    name: "Product Showcase",
    description:
      "Video Bottt is a video editing platform that allows users to create videos using a variety of templates and share them on social media.",
    image: "/images/image copy 6.png",
    video: true,
    url: "/Videos/nitro 1.mp4",
    source_code_link: "",
  },
];

const reels = [
  {
    name: "Ankur Warikoo",
    description:
      "Video Bottt is a video editing platform that allows users to create videos using a variety of templates and share them on social media.",
    url: "/public/Videos/VISHNU JI AND NARAD MUNI.mp4",
    image: "/reelimg/image.png",
    reel: true,
    source_code_link: "https://github.com/",
  },
  {
    name: "Ali Abdaal",
    description:
      "Video Bottt is a video editing platform that allows users to create videos using a variety of templates and share them on social media.",
    image: "/reelimg/image copy.png",
    reel: true,
    url: "/Videos/ali abdaal.mp4",
    source_code_link: "https://github.com/",
  },

  {
    name: "Aevy Tv",
    description:
      "Video Bottt is a video editing platform that allows users to create videos using a variety of templates and share them on social media.",
    image: "/reelimg/image copy 2.png",
    reel: true,
    url: "/Videos/aevy.mp4",
    source_code_link: "https://github.com/",
  },
  {
    name: "Podcast Intro 1",
    image: "/reelimg/image copy 3.png",
    reel: true,
    url: "/Videos/pod reel test.mp4",
  },
  {
    name: "AI Reels",
    image: "/reelimg/image copy 4.png",
    reel: true,
    video : false,
    url: "/Videos/ai reel.mp4",
  },
  {
    name: "Nikhilesh Video",
    image: "/reelimg/image copy 5.png",
    reel: true,
    url: "/Videos/nik.mp4"
  }
]

export { services, technologies, experiences, testimonials, videos, reels };
