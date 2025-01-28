// Technologies Icons imports
import TechnologiesIcons from "Assets/Technologies-Icons";

// Project photos imports
import UnipilotPhotos from "Assets/Unipilot";
import OvoPhotos from "Assets/Ovo";
import SonarWalletPhotos from "Assets/SonarWallet";
import NumioPhotos from "Assets/Numio";
import FamilyWinsPhotos from "Assets/FamilyWins";
import SlackClonePhotos from "Assets/SlackClone";
import ToDoAppPhotos from "Assets/TodoApp";
import TictactoePhotos from "Assets/TicTacToe";
import ShareFoodPakistanPhotos from "Assets/ShareFoodPakistan";
import HealthEarnPhotos from "Assets/HealthEarn";

export interface Project {
  name: string;
  cardPhoto: string;
  description: string;
  technologies: {
    [key: string]: string;
  };
  github: string | boolean;
  demo: string | boolean;
  photos: string[];
}

const projects: Project[] = [
  {
    name: "UNIPILOT",
    cardPhoto: UnipilotPhotos.card,
    description:
      "Unipilot is a concentrated liquidity manager on uniswap. that helps you to gain maximum APR on various token pools",
    technologies: {
      react: TechnologiesIcons.react,
      js: TechnologiesIcons.js,
      ethereum: TechnologiesIcons.ethereum,
    },
    github: false,
    demo: false,
    photos: UnipilotPhotos.dialog,
  },
  {
    name: "Sonar Wallet",
    cardPhoto: SonarWalletPhotos.card,
    description:
      "A crypto Wallet Extension that let's you handle your crypto assets on multiple chains including multiple wallets",
    technologies: {
      react: TechnologiesIcons.react,
      js: TechnologiesIcons.js,
      ethereum: TechnologiesIcons.ethereum,
    },
    github: false,
    demo: false,
    photos: SonarWalletPhotos.dialog,
  },
  {
    name: "Numio",
    cardPhoto: NumioPhotos.card,
    description:
      "An Ethereum Layer 2 scaling solution that lets you make instant Ethereum transactions with significantly lower gas fees",
    technologies: {
      react: TechnologiesIcons.react,
      js: TechnologiesIcons.js,
      ethereum: TechnologiesIcons.ethereum,
    },
    github: false,
    demo: false,
    photos: NumioPhotos.dialog,
  },
  {
    name: "OVO",
    cardPhoto: OvoPhotos.card,
    description:
      "A mobile Application crypto wallet for Ethereum. That allows users to send and receive crypto coins in a secure way.",
    technologies: {
      react: TechnologiesIcons.react,
      js: TechnologiesIcons.js,
      ethereum: TechnologiesIcons.ethereum,
    },
    github: false,
    demo: false,
    photos: OvoPhotos.dialog,
  },
  {
    name: "Family Wins Web App",
    cardPhoto: FamilyWinsPhotos.card,
    description:
      "A Web application for christians to get closer to christianity by reading bible article and connect with fellow companions",
    technologies: {
      react: TechnologiesIcons.react,
      js: TechnologiesIcons.js,
    },
    github: false,
    demo: "https://the-familywins.web.app/",
    photos: FamilyWinsPhotos.dialog,
  },
  {
    name: "Slack Clone Web App",
    cardPhoto: SlackClonePhotos.card,
    description:
      "A clone of slack built on ReactJS that offers direct messages as well as channel messages. including media messages with firebase at back",
    technologies: {
      react: TechnologiesIcons.react,
      js: TechnologiesIcons.js,
      firebase: TechnologiesIcons.firebase,
    },
    github: "https://github.com/abdulhaseeb13mar/clone-slack-react",
    demo: "https://clone-slack-react-f2b16.firebaseapp.com",
    photos: SlackClonePhotos.dialog,
  },
  {
    name: "Steps Counter Mobile App",
    cardPhoto: HealthEarnPhotos.card,
    description:
      "A Mobile Side of My FYP where it counts the number of steps user has walked at the background and then periodically sends the user steps data to the iota tangle server",
    technologies: {
      react: TechnologiesIcons.react,
      js: TechnologiesIcons.js,
      firebase: TechnologiesIcons.firebase,
    },
    github: "https://github.com/abdulhaseeb13mar/healthEarn",
    demo: false,
    photos: HealthEarnPhotos.dialog,
  },
  {
    name: "ShareFoodPakistan Mobile App",
    cardPhoto: ShareFoodPakistanPhotos.card,
    description:
      "A Food Sharing app to let your excess food not go to waste instead you can post it and give it someone needy or even sell it",
    technologies: {
      react: TechnologiesIcons.react,
      js: TechnologiesIcons.js,
      firebase: TechnologiesIcons.firebase,
    },
    github: false,
    demo: false,
    photos: ShareFoodPakistanPhotos.dialog,
  },
  {
    name: "Interactive To-Do App",
    cardPhoto: ToDoAppPhotos.card,
    description:
      "A To do app with a trello like drag n drop feature for the tasks",
    technologies: {
      html: TechnologiesIcons.html,
      css: TechnologiesIcons.css,
      js: TechnologiesIcons.js,
    },
    github: "https://github.com/abdulhaseeb13mar/todolist",
    demo: "https://abdulhaseeb13mar.github.io/todolist/",
    photos: ToDoAppPhotos.dialog,
  },
  {
    name: "Tic Tac Toe Game",
    cardPhoto: TictactoePhotos.card,
    description:
      "A Simple Tic tac toe game using vanilla Javascript for the logic behind. with eye catching UI",
    technologies: {
      html: TechnologiesIcons.html,
      css: TechnologiesIcons.css,
      js: TechnologiesIcons.js,
    },
    github: "https://github.com/abdulhaseeb13mar/tictactoe",
    demo: "https://abdulhaseeb13mar.github.io/tictactoe/",
    photos: TictactoePhotos.dialog,
  },
];

export default projects;
