interface Design {
  name: string;
  splash: string;
  images: string[];
  embed: string;
}

const designs: Design[] = [
  {
    name: "Bountiful Bags",
    splash: require("./BountifulBags/splash.png"),
    images: [
      require("./BountifulBags/splash.png"),
      require("./BountifulBags/1.png"),
      require("./BountifulBags/2.png"),
      require("./BountifulBags/3.png"),
      require("./BountifulBags/4.png"),
    ],
    embed: "https://www.youtube.com/embed/iHrtWnT_Obk",
  },
  {
    name: "ChairScape",
    splash: require("./ChairScape/1.png"),
    images: [
      require("./ChairScape/1.png"),
      require("./ChairScape/2.png"),
      require("./ChairScape/3.png"),
      require("./ChairScape/4.png"),
      require("./ChairScape/5.png"),
    ],
    embed: "https://www.youtube.com/embed/-koYusH1aiM",
  },
  {
    name: "Young Girls",
    splash: require("./YoungGirls/1.png"),
    images: [
      require("./YoungGirls/1.png"),
      require("./YoungGirls/2.png"),
      require("./YoungGirls/3.png"),
      require("./YoungGirls/4.png"),
      require("./YoungGirls/5.png"),
    ],
    embed: "https://www.youtube.com/embed/EcXql8xuwaI",
  },
  {
    name: "StepComfort",
    splash: require("./StepComfort/1.png"),
    images: [
      require("./StepComfort/1.png"),
      require("./StepComfort/2.png"),
      require("./StepComfort/3.png"),
      require("./StepComfort/4.png"),
      require("./StepComfort/5.png"),
    ],
    embed: "https://www.youtube.com/embed/g9eY0N6_grM",
  },
  {
    name: "Queen Step",
    splash: require("./QueenStep/1.png"),
    images: [
      require("./QueenStep/1.png"),
      require("./QueenStep/2.png"),
      require("./QueenStep/3.png"),
      require("./QueenStep/4.png"),
      require("./QueenStep/5.png"),
    ],
    embed: "https://www.youtube.com/embed/ecT_n1tt7OI",
  },
  {
    name: "FeelNight",
    splash: require("./FeelNight/1.png"),
    images: [
      require("./FeelNight/1.png"),
      require("./FeelNight/2.png"),
      require("./FeelNight/3.png"),
      require("./FeelNight/4.png"),
      require("./FeelNight/5.png"),
    ],
    embed: "https://www.youtube.com/embed/CSh3ykzaVTs",
  },
  {
    name: "TasteBox",
    splash: require("./TasteBox/1.png"),
    images: [
      require("./TasteBox/1.png"),
      require("./TasteBox/2.png"),
      require("./TasteBox/3.png"),
      require("./TasteBox/4.png"),
      require("./TasteBox/5.png"),
    ],
    embed: "https://www.youtube.com/embed/aL8HQNGoNkg",
  },
  {
    name: "SoundSorrounding",
    splash: require("./SoundSorrounding/5.png"),
    images: [
      require("./SoundSorrounding/5.png"),
      require("./SoundSorrounding/1.png"),
      require("./SoundSorrounding/2.png"),
      require("./SoundSorrounding/3.png"),
      require("./SoundSorrounding/4.png"),
    ],
    embed: "https://www.youtube.com/embed/S0WHnhCUY6g",
  },
  {
    name: "BunnyCookies",
    splash: require("./BunnyCookies/5.png"),
    images: [
      require("./BunnyCookies/5.png"),
      require("./BunnyCookies/1.png"),
      require("./BunnyCookies/2.png"),
      require("./BunnyCookies/3.png"),
      require("./BunnyCookies/4.png"),
    ],
    embed: "https://www.youtube.com/embed/4AHWNAd9ueU",
  },
];

export default designs;
