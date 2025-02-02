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
import SpockPhotos from "Assets/Spock";
import MeshPhotos from "Assets/Mesh";
import DexterPhotos from "Assets/Dexter";
import HitStakingPhotos from "Assets/HitStaking";
import NodeManagerPhotos from "Assets/NodeManager";
import FomoStakingPhotos from "Assets/FomoStaking";
import HelloMonsterPhotos from "Assets/HelloMonster";
import PetLifePhotos from "Assets/PetLife";
import GizmoPortalPhotos from "Assets/GizmoPortal";
import NebulaPhotos from "Assets/Nebula";
import RampxPhotos from "Assets/Rampx";
import LuminaDexPhotos from "Assets/LuminaDex";
import SendItPhotos from "Assets/SendIt";

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
    name: "Send It",
    cardPhoto: SendItPhotos.card,
    description:
      "Unipilot is a concentrated liquidity manager on uniswap. that helps you to gain maximum APR on various token pools",
    technologies: {
      react: TechnologiesIcons.react,
      ts: TechnologiesIcons.typescript,
      ethereum: TechnologiesIcons.ethereum,
    },
    github: false,
    demo: "https://sendit-landing-page.vercel.app/",
    photos: SendItPhotos.dialog,
  },
  {
    name: "Lumina Dex",
    cardPhoto: LuminaDexPhotos.card,
    description:
      "Unipilot is a concentrated liquidity manager on uniswap. that helps you to gain maximum APR on various token pools",
    technologies: {
      react: TechnologiesIcons.react,
      ts: TechnologiesIcons.typescript,
      ethereum: TechnologiesIcons.ethereum,
    },
    github: false,
    demo: false,
    photos: LuminaDexPhotos.dialog,
  },
  {
    name: "RampX",
    cardPhoto: RampxPhotos.card,
    description:
      "Unipilot is a concentrated liquidity manager on uniswap. that helps you to gain maximum APR on various token pools",
    technologies: {
      nextjs: TechnologiesIcons.nextjs,
      ts: TechnologiesIcons.typescript,
      ethereum: TechnologiesIcons.ethereum,
    },
    github: false,
    demo: "https://rampx-dapp.vercel.app/swap",
    photos: RampxPhotos.dialog,
  },
  {
    name: "Nebula",
    cardPhoto: NebulaPhotos.card,
    description:
      "Unipilot is a concentrated liquidity manager on uniswap. that helps you to gain maximum APR on various token pools",
    technologies: {
      nextjs: TechnologiesIcons.nextjs,
      ts: TechnologiesIcons.typescript,
      ethereum: TechnologiesIcons.ethereum,
    },
    github: false,
    demo: "https://app.nebula-agency.com/",
    photos: NebulaPhotos.dialog,
  },
  {
    name: "Gizmo Portal",
    cardPhoto: GizmoPortalPhotos.card,
    description:
      "Unipilot is a concentrated liquidity manager on uniswap. that helps you to gain maximum APR on various token pools",
    technologies: {
      nextjs: TechnologiesIcons.nextjs,
      ts: TechnologiesIcons.typescript,
      ethereum: TechnologiesIcons.ethereum,
    },
    github: false,
    demo: "https://portal.gizmolab.io/",
    photos: GizmoPortalPhotos.dialog,
  },
  {
    name: "PetLife",
    cardPhoto: PetLifePhotos.card,
    description:
      "Unipilot is a concentrated liquidity manager on uniswap. that helps you to gain maximum APR on various token pools",
    technologies: {
      nextjs: TechnologiesIcons.nextjs,
      ts: TechnologiesIcons.typescript,
      ethereum: TechnologiesIcons.ethereum,
    },
    github: false,
    demo: "https://pet-life-chi.vercel.app/",
    photos: PetLifePhotos.dialog,
  },
  {
    name: "Hello Monster",
    cardPhoto: HelloMonsterPhotos.card,
    description:
      "Unipilot is a concentrated liquidity manager on uniswap. that helps you to gain maximum APR on various token pools",
    technologies: {
      nextjs: TechnologiesIcons.nextjs,
      ts: TechnologiesIcons.typescript,
      ethereum: TechnologiesIcons.ethereum,
    },
    github: false,
    demo: false,
    photos: HelloMonsterPhotos.dialog,
  },
  {
    name: "Node Manager Radix",
    cardPhoto: NodeManagerPhotos.card,
    description:
      "Unipilot is a concentrated liquidity manager on uniswap. that helps you to gain maximum APR on various token pools",
    technologies: {
      react: TechnologiesIcons.react,
      ts: TechnologiesIcons.typescript,
      ethereum: TechnologiesIcons.ethereum,
    },
    github: "https://github.com/HIT-radix/node-manager",
    demo: "https://nodemanager.addix.meme/",
    photos: NodeManagerPhotos.dialog,
  },
  {
    name: "FOMO Staking",
    cardPhoto: FomoStakingPhotos.card,
    description:
      "Unipilot is a concentrated liquidity manager on uniswap. that helps you to gain maximum APR on various token pools",
    technologies: {
      react: TechnologiesIcons.react,
      js: TechnologiesIcons.js,
      ethereum: TechnologiesIcons.ethereum,
    },
    github: "https://github.com/nemster/fomo_staking",
    demo: "https://www.fomostake.com/",
    photos: FomoStakingPhotos.dialog,
  },
  {
    name: "HIT Staking",
    cardPhoto: HitStakingPhotos.card,
    description:
      "Unipilot is a concentrated liquidity manager on uniswap. that helps you to gain maximum APR on various token pools",
    technologies: {
      react: TechnologiesIcons.react,
      ts: TechnologiesIcons.typescript,
      ethereum: TechnologiesIcons.ethereum,
    },
    github: "https://github.com/HIT-radix/staking-interface",
    demo: "https://addix.meme/",
    photos: HitStakingPhotos.dialog,
  },
  {
    name: "Dexter",
    cardPhoto: DexterPhotos.card,
    description:
      "Unipilot is a concentrated liquidity manager on uniswap. that helps you to gain maximum APR on various token pools",
    technologies: {
      nextjs: TechnologiesIcons.nextjs,
      ts: TechnologiesIcons.typescript,
      ethereum: TechnologiesIcons.ethereum,
    },
    github: "https://github.com/DeXter-on-Radix/website",
    demo: "https://dexteronradix.com/trade",
    photos: DexterPhotos.dialog,
  },
  {
    name: "Mesh",
    cardPhoto: MeshPhotos.card,
    description:
      "Unipilot is a concentrated liquidity manager on uniswap. that helps you to gain maximum APR on various token pools",
    technologies: {
      react: TechnologiesIcons.react,
      ts: TechnologiesIcons.typescript,
      ethereum: TechnologiesIcons.ethereum,
    },
    github: "https://github.com/mesh-protocol/mesh-staking",
    demo: "https://app.meshprotocol.xyz/",
    photos: MeshPhotos.dialog,
  },
  {
    name: "Spock",
    cardPhoto: SpockPhotos.card,
    description:
      "Unipilot is a concentrated liquidity manager on uniswap. that helps you to gain maximum APR on various token pools",
    technologies: {
      react: TechnologiesIcons.react,
      ts: TechnologiesIcons.typescript,
      ethereum: TechnologiesIcons.ethereum,
    },
    github: false,
    demo: "https://spock-analytics-demo-d6c77.web.app/probe/dashboard",
    photos: SpockPhotos.dialog,
  },
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
