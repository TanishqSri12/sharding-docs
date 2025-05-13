import {
  faDiscord,
  faTelegram,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { faBook, faHammer, faServer } from "@fortawesome/free-solid-svg-icons";

const homepage = {
  hero: {
    title: "Intelchain Upgraded Documentation",
    subtitle: "Start Your Exploration",
    cards: [
      {
        title: "Intelchain",
        text: "Its an Intelchain ",
        link: "/welcome/welcome-to-multiversx",
        // icon: faBook,
      },
      {
        title: "Sharding Architecture ",
        text: "Intelchain Architecture of Sharding",
        link: "/developers/overview",
        // icon: faHammer,
      },
      // {
      //   title: "Run a validator node",
      //   text: "Validate transactions, secure the network, and earn rewards.",
      //   link: "/validators/overview",
      //   icon: faServer,
      // },
    ],
  },
  features: {
    title: "Explore More On ITC ",
    cards: [
      {
        title: "Mine a Token",
        text: "Creating an ITC token is easy and fast.",
        link: "/developers/overview",
      },
      {
        title: "Sharding Architecture",
        text: "Intelchain sharding architecture .",
        link: "/developers/overview",
      },
      // {
      //   title: "Integrate MultiversX",
      //   text: "Follow our guide to integrate exchanges, wallets, and other platforms.",
      //   link: "/integrators/overview",
      // },
      // {
      //   title: "Get the Architecture Overview",
      //   text: "Explore MultiversX innovations.",
      //   link: "/learn/architecture-overview",
      // },
      // {
      //   title: "Discover SpaceVM",
      //   text: "A fast and secure virtual machine to power growth.",
      //   link: "/learn/space-vm",
      // },
      // {
      //   title: "Get EGLD",
      //   text: "You need EGLD or xEGLD in order to be able to interact with the MultiversX Network.",
      //   link: "/learn/EGLD#getting-egld",
      // },
      // {
      //   title: "Tools & Resources",
      //   text: "You can access the best set of tools that you may need for running your project.",
      //   link: "https://multiversx.com/builders/builder-tools-resources",
      // },
      // {
      //   title: "Tutorials",
      //   text: "A great start for anyone looking to learn.",
      //   link: "https://multiversx.com/builders/build-your-first-multiversx-dapp-in-30-minutes",
      // },
    ],
  },
  promo: {
    title: "Intelchain Blockchain",
    tag: "ITC",
    subtitle:
      " Secured Decentralised Blockchain.",
    link: "sovereign/overview",
    button: "Intelchain docs ",
  },
  community: {
    title: "To Connect",
    subtitle:
      "Community we created ",
    cards: [
      {
        title: "Github ",
        text: "Connect to us ",
        link: "",
        // icon: faDiscord,
      },
      // {
      //   title: "Developer Telegram",
      //   text: "Connect with other MultiversX Builders and developers",
      //   link: "https://t.me/MultiversX",
      //   icon: faTelegram,
      // },
      // {
      //   title: "Stack Overflow",
      //   text: "Get answers to technical questions from the community",
      //   link: "https://stackoverflow.com/questions/tagged/multiversx",
      //   icon: faStackOverflow,
      // },
    ],
  },
  resources: {
    subtitle: "Heplful ",
    links: [
      {
        text: "Know More ",
        link: "",
      },
      // {
      //   text: "Stack Overflow",
      //   link: "https://stackoverflow.com/questions/tagged/multiversx",
      // },
      // {
      //   text: "Tech Talks from xDay 2023",
      //   link: "https://www.youtube.com/watch?v=WoIa4sQuNDo",
      // },
      // {
      //   text: "@multiversx on X",
      //   link: "https://twitter.com/MultiversX",
      // },
    ],
  },
};

export default homepage;
