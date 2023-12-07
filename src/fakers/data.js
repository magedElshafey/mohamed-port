import productDesign from "../assets/icons8-designer-64.png";
import frontEnd from "../assets/icons8-developer-100.png";
import optimizing from "../assets/icons8-optimizing-64.png";
// projects
import shorouk from "../assets/shoroukweb.png";
import shoroukMob from "../assets/shoroukmob.png";
import mosawi from "../assets/mosawiweb.png";
import mosawiMob from "../assets/mosawimob.png";
import travel from "../assets/travelWeb.png";
import travelMob from "../assets/travelmob.png";
export const navLinks = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "about",
    path: "about",
  },
  {
    title: "services",
    path: "serv",
  },

  {
    title: "portfolio",
    path: "port",
  },
  {
    title: "skills",
    path: "skills",
  },
  {
    title: "statistics",
    path: "stat",
  },
  {
    title: "contact",
    path: "/contact",
  },
];
export const services = [
  {
    title: "Interior Design",
    desc: "I am an expert in all interior and exterior finishing works and I supervised many sites such as Green Hills School and many residential units",
    img: productDesign,

    delay: "300",
  },
  {
    title: "Shop drawing ",
    desc: "I can do shop drawing plan in all finishing works and I 'm  Time table manager for any project and BOQ",
    img: frontEnd,
    isRed: true,
    delay: "400",
  },
  // {
  //   title: "Website Optimization",
  //   desc: "In today's competitive online landscape, having a fast and optimized website is essential. I can help you optimize your site for speed, performance, and search engines, ensuring that your visitors have a seamless experience and that your site ranks well in search results.",
  //   img: optimizing,
  //   isRed: false,
  //   delay: "500",
  // },
];
export const portfolio = [
  {
    id: 2,
    title: "Al-Shorouk hospital",
    img: shorouk,
    mobImg: shoroukMob,
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "Tailwind CSS",
      "React JS",
      "axios",
      "React i18next",
    ],
    intro:
      "El Shorouk Hospital Website: A Comprehensive Platform For Patient Care",
    desc: `As A Front End Developer, I Had The Opportunity To Build A Dynamic And User-Friendly Website For El Shorouk Hospital. This Website Is A One-Stop Solution For Patients Seeking Information About The Hospital And Its Doctors. With A Clean And Modern Design, The Website Is Easy To Navigate, Providing A Seamless Experience For Users. The Website Features Detailed Information About The Hospital's Services, Including Specialties, Departments, And Medical Procedures. Patients Can Easily Browse Through The Doctors' Profiles, Where They Can Find Information About Their Qualifications, Experience, And Areas Of Expertise. The Website Also Includes A Convenient Doctor's Appointment System, Where Patients Can Book Appointments With Their Preferred Doctors Easily And Efficiently. One Of The Most Useful Features Of The Website Is The Filter Option, Which Allows Patients To Narrow Down Their Search Based On Their Preferred Date Or Gender. With This Feature, Patients Can Quickly Find The Right Doctor For Their Specific Needs, Ensuring They Receive The Best Possible Care. Overall, The El Shorouk Hospital Website Is A Comprehensive Platform That Offers Patients All The Information They Need To Make Informed Decisions About Their Healthcare. It Is Designed To Be Accessible, Informative, And User-Friendly, Providing A Superior Patient Experience. As A Front End Developer, I Am Proud To Have Worked On This Project And To Have Contributed To The Betterment Of Healthcare Services.`,
    path: "http://elshoroukhospital.com/",
  },
  {
    id: 1,
    title: "Al-Mosawi",
    img: mosawi,
    mobImg: mosawiMob,
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "React JS",
      "bootstrap",
      "React-Query",
      "axios",
      "React i18next",
    ],
    intro:
      "AllMosawi, A Comprehensive Website Dedicated To All Things Forex Trading!",
    desc: "As A Front-End Developer, I Am Proud To Showcase This Platform, Which Offers A Wealth Of Knowledge And Resources To Help Individuals Learn About And Master The Art Of Forex Trading. At AllMosawi, Visitors Can Discover Everything They Need To Know About Ahmed Al-Mosawi's Company And Its Offerings. Our Website Boasts A Sleek Design That Is Both Easy To Navigate And Visually Appealing. From Detailed Information About Forex Trading To Insights Into Our Forex Trading Courses, Users Will Find Everything They Need To Succeed In The Forex Market. Our Team Is Dedicated To Providing Users With The Most Up-To-Date Information, Trends, And Strategies For Forex Trading. With Our In-Depth Articles, Videos, And Tutorials, Users Can Gain Valuable Knowledge And Hone Their Trading Skills Whether You Are A Novice Or An Experienced Trader, AllMosawi Is The Ultimate Resource For Forex Trading. Join Our Community Today And Take Your Trading To The Next Level!",
    path: "http://almosawi.technomasrsystems.com/",
  },

  {
    id: 3,
    title: "travel",
    img: travel,
    mobImg: travelMob,
    tech: ["HTML", "CSS", "Javascript", "React JS", "Bootstrap"],
    intro: "static landing page",
    desc: "travel website is a static landing page designed by using react js and styled complelety by using bootstrap and css",
    path: "https://travel.technomasrsystems.com/",
  },
  // {
  //   id: 4,
  //   title: "fittness",
  //   path: "https://fitness-app.technomasrsystems.com/",
  //   tech: [
  //     "HTML",
  //     "CSS",
  //     "Javascript",
  //     "React JS",
  //     "Bootstrap",
  //     "React-Query",
  //     "axios",
  //     "React i18next",
  //   ],
  //   img: fittness,
  //   mobImg: fittnessmob,
  //   intro:
  //     "The Ultimate Destination For Fitness Enthusiasts! This Sleek And Dynamic Website",
  //   desc: "The Ultimate Destination For Fitness Enthusiasts! This Sleek And Dynamic Website Has Been Crafted To Cater To All Your Fitness Needs And Goals, Whether You Are A Gym-Goer Or An Online Coaching Enthusiast. With A User-Friendly Interface And Comprehensive Information 'Fittness For Gym' Is Your Go-To Source For Everything Related To Fitness. From Detailed Workout Plans To Success Stories Of Real People Who Have Transformed Their Lives With Our Online Coaching Program, We Have It All. Get Inspired By Our Transformation Stories And Take The First Step Towards A Healthier, Happier You. Whether You Are A Beginner Or A Pro, 'Fittness For Gym' Has Something For Everyone. Download Our App Today And Get Access To Exclusive Workout Plans And Coaching Packages Tailored To Your Specific Needs.",
  // },
];
export const skills = [
  {
    name: "AutoCAD",
    progress: "95%",
    bg: "linear-gradient(to right, #ff6b6b, #d62b2b)",
    delay: "300",
  },
  {
    name: "Primavera P6",
    progress: "80%",
    bg: "linear-gradient( 109.6deg, rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1% )",
    delay: "400",
  },
  {
    name: "Arch Reveit",
    progress: "85%",
    bg: "linear-gradient(to right, #DECBA4, #3E5151)",
    delay: "500",
  },
  {
    name: "Arch Reveit",
    progress: "85%",
    bg: "linear-gradient(to right, #fffbd5, #b20a2c)",
    delay: "600",
  },
  {
    name: "Excel",
    progress: "95%",
    bg: "linear-gradient(to right, #8360c3, #2ebf91)",
    delay: "700",
  },
  {
    name: "Word",
    progress: "70%",
    bg: "linear-gradient(to right, #8e2de2, #4a00e0)",
    delay: "800",
  },
  // {
  //   name: "Bootstrap",
  //   progress: "95%",
  //   bg: "linear-gradient(to right, #fffbd5, #b20a2c)",
  //   delay: "800",
  // },
  // {
  //   name: "Tailwind CSS",
  //   progress: "85%",
  //   bg: "linear-gradient(to right, #fc5c7d, #6a82fb)",
  //   delay: "900",
  // },
  // {
  //   name: "Redux toolkit",
  //   progress: "95%",
  //   bg: " linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)",
  //   delay: "1000",
  // },
  // {
  //   name: "axios",
  //   progress: "95%",
  //   bg: "radial-gradient(circle farthest-side, #fceabb, #f8b500)",
  //   delay: "1000",
  // },
  // {
  //   name: "react-query",
  //   progress: "95%",
  //   bg: "linear-gradient(to right, #fffbd5, #b20a2c)",
  //   delay: "1000",
  // },
  // {
  //   name: "react-i18next",
  //   progress: "95%",
  //   bg: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
  //   delay: "1000",
  // },
  // {
  //   name: "SASS",
  //   progress: "90%",
  //   bg: "linear-gradient(to right, #00b4db, #0083b0)",
  //   delay: "1100",
  // },
  // {
  //   name: "Github",
  //   progress: "85%",
  //   bg: "linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)",
  //   delay: "1200",
  // },
  // {
  //   name: "Jquery",
  //   progress: "65%",
  //   bg: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
  //   delay: "1300",
  // },
  // {
  //   name: "C++",
  //   progress: "65%",
  //   bg: "linear-gradient(to right, #00b09b, #96c93d)",
  //   delay: "1400",
  // },
  // {
  //   name: "OOP",
  //   progress: "65%",
  //   bg: "radial-gradient(circle farthest-side, #fceabb, #f8b500)",
  //   delay: "1500",
  // },
];
export const stats = [
  {
    id: 1,
    number: 3,
    desc: "years of experience",
  },
  {
    id: 2,
    number: 25,
    desc: "client",
  },
  {
    id: 3,
    number: 25,
    desc: "completed project",
  },
];
