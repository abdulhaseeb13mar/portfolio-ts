import ReactIcon from "./React-icon.png";
import JSIcon from "./Javascript-icon.png";
import CSSIcon from "./Css-icon.png";
import HTMLIcon from "./Html-icon.png";
import VueIcon from "./Vue-icon.png";
import FirebaseIcon from "./Firebase-icon.png";
import EthereumIcon from "./Ethereum-logo.png";
import TypeScriptIcon from "./Typescript-icon.png";
import nextJsIcon from "./nextjs-icon.svg";

interface TechnologyIcons {
  react: string;
  js: string;
  css: string;
  html: string;
  vue: string;
  firebase: string;
  ethereum: string;
  typescript: string;
  nextjs: string;
}

const technologyIcons: TechnologyIcons = {
  react: ReactIcon,
  js: JSIcon,
  css: CSSIcon,
  html: HTMLIcon,
  vue: VueIcon,
  firebase: FirebaseIcon,
  ethereum: EthereumIcon,
  typescript: TypeScriptIcon,
  nextjs: nextJsIcon,
};

export default technologyIcons;
