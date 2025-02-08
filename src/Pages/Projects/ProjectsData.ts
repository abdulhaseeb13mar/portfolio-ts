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
      "The SendIt Interface is a decentralized finance (DeFi) platform that enables users to create and manage lending markets. Users can lend assets to earn interest or borrow assets by providing collateral.",
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
      "Lumina Dex is a decentralized exchange on Mina, providing secure, non-custodial token trading. It leverages Mina’s compact chain architecture to enable efficient, privacy-preserving transactions for decentralized finance (DeFi) and broader global Web3 ecosystem growth.",
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
      "RampX offers a decentralized token swapping service, enabling users to trade cryptocurrencies across multiple blockchain networks. By connecting a compatible wallet, users can easily exchange tokens, track real-time transaction details, and manage fees.",
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
      "Nebula Agency’s secure login portal provides a centralized platform for users to manage projects, collaborate, and track performance, ensuring streamlined workflows and secure, efficient access to essential digital marketing tools.",
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
      "Portal.GizmoLab.io offers a secure, centralized platform for users to manage projects, collaborate with teams, and monitor analytics, helping streamline product development while providing accessible, comprehensive tools for innovation and growth.",
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
      "Pet Life merges pet companionship and interactive gaming in a community-driven ecosystem. Users explore pet care resources, virtual adventures, and social features, fostering well-being and fun for all pet lovers",
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
      "Hello Monster is a Web3 gaming platform where users mint, stake, and earn points with NFT monsters. It integrates blockchain-based rewards, gamified staking mechanics, and a community-driven experience for digital collectors",
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
      "Node Manager by ADDIX is a staking management platform for tracking validator performance, managing staked XRD, and unlocking rewards. It enables users to stake, unstake, and optimize earnings with validator insights",
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
      "FOMO on XRD is a Web3 staking and airdrop platform where users stake $FOMO tokens, earn rewards, and claim NFT-based incentives. It gamifies staking with airdrop bonuses and NFT reward tracking",
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
      "ADDIX HIT is a staking platform where users stake HIT tokens, earn rewards, and participate in validator staking. It integrates NFT-based components and gamified incentives to enhance staking efficiency and earnings",
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
      "Dexter on Radix is a decentralized exchange (DEX) enabling seamless token trading on the Radix network. It offers secure swaps, liquidity provision, and efficient trading with low fees and a user-friendly interface",
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
      "Mesh is a Solana-based DeFi platform offering token swaps, liquidity provision, and staking. It aggregates liquidity from multiple DEXs for optimal trading, rewarding users with competitive APY and leaderboard incentives.",
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
      "Spock is a Web3 dApp analytics platform providing insights into user engagement, wallet activity, transaction funnels, and retention. It helps projects optimize strategies by tracking protocol metrics and on-chain behaviors",
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
