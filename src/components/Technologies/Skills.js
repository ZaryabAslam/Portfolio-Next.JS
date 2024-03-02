import { DiAndroid, DiTerminal, DiJava, DiHtml5, DiBootstrap, DiNodejs   } from "react-icons/di";
import { SiFirebase, SiGit, SiDart, SiCss3, SiMysql, SiMongodb } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { TbBrandKotlin } from "react-icons/tb";
import { SiNextdotjs, SiReact  } from "react-icons/si";

export const Skills = [
  {
    slug: "react",
    Component: SiReact ,
    title: "React",
    Description: () => <>For FrontEnd development</>,
  },
  {
    slug: "bootstrap",
    Component: DiBootstrap,
    title: "Bootstrap",
    Description: () => <>Ui Library for styling</>,
  },
  {
    slug: "node",
    Component: DiNodejs,
    title: "NodeJS",
    Description: () => <>Open-source JavaScript runtime environment</>,
  },

  {
    slug: "html",
    Component: DiHtml5,
    title: "HTML",
    Description: () => <>Static webpages and portfolio projects</>,
  },
  {
    slug: "css",
    Component: SiCss3,
    title: "CSS",
    Description: () => <>Styling of my webpages</>,
  },

  {
    slug: "mongo",
    Component: SiMongodb,
    title: "MongoDB",
    Description: () => <>Storing data</>,
  },
  {
    slug: "next",
    Component: SiNextdotjs,
    title: "Next",
    Description: () => <>Full Stack Framwork</>,
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Bash",
    Description: () => <>Ease of life and build scripts</>,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>Authentication, database and analytics</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Code management and open source contributions</>,
  }
];
