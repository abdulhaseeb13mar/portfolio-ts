import CSSIcon from "@/assets/Technologies-Icons/Css-icon.png";
import ETHIcon from "@/assets/Technologies-Icons/Ethereum-logo.png";
import FirebaseIcon from "@/assets/Technologies-Icons/Firebase-icon.png";
import HTMLIcon from "@/assets/Technologies-Icons/Html-icon.png";
import JSIcon from "@/assets/Technologies-Icons/Javascript-icon.png";
import ReactIcon from "@/assets/Technologies-Icons/React-icon.png";
import TSIcon from "@/assets/Technologies-Icons/Typescript-icon.png";
import VueIcon from "@/assets/Technologies-Icons/Vue-icon.png";
import ArduinoIcon from "@/assets/Technologies-Icons/arduinoicon.png";
import CIcon from "@/assets/Technologies-Icons/cicon.png";
import MaterialIcon from "@/assets/Technologies-Icons/materialicon.png";
import NodeJSIcon from "@/assets/Technologies-Icons/nodeJsIcon.png";
import ReduxIcon from "@/assets/Technologies-Icons/reduxicon.png";
import ShopifyIcon from "@/assets/Technologies-Icons/shopifyicon.png";
import Me from "@/assets/me.png";

const expertise = [
  { name: "React", icon: ReactIcon },
  { name: "TypeScript", icon: TSIcon },
  { name: "JavaScript", icon: JSIcon },
  { name: "Node.js", icon: NodeJSIcon },
  { name: "HTML", icon: HTMLIcon },
  { name: "CSS", icon: CSSIcon },
  { name: "Ethereum", icon: ETHIcon },
  { name: "Material UI", icon: MaterialIcon },
  { name: "Redux", icon: ReduxIcon },
  { name: "Firebase", icon: FirebaseIcon },
  { name: "C", icon: CIcon },
  { name: "Vue", icon: VueIcon },
  { name: "Arduino", icon: ArduinoIcon },
  { name: "Shopify", icon: ShopifyIcon },
];

const academicJourney = [
  { year: "2020", title: "Graduated as Software Engineer", description: "NED University of Engineering and Technology" },
  { year: "2016", title: "Started Software Engineering", description: "NED University of Engineering and Technology" },
  { year: "Intermediate", title: "Pre-Engineering", description: "Secured 85.45%" },
  { year: "Matriculation", title: "Computer Science", description: "Secured 94.5%" },
  { year: "Class 8", title: "First Interaction with Code", description: "Introduction to GW BASIC" },
];

const achievements = [
  "Winner of the Best Final Year Project 2020 in Software Engineering at NED",
  "Winner of the Best C project at tech exhibition 2017 at NED",
  "Runner up in Techera startup project for Home Automation System",
  "Certificate of Excellence for exceptional performance at NED Academy as Web Developer",
];

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-20">
      {/* Intro Section */}
      <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
        <div className="shrink-0">
          <img
            src={Me}
            alt="Abdul Haseeb"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-violet-600">About Me</h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
            Senior Frontend Engineer with 5+ years of experience building high-scale Financial and SaaS products handling millions of dollars.
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
            I specialize in React/Next.js and performance optimization. Over my career, I've led development for DeFi platforms like "Send It" (handling{" "}
            <span className="font-bold text-blue-600">$3.5M TVL</span>), built analytics dashboards for millions of on-chain events, and contributed to
            open-source blockchain infrastructure.
          </p>
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/AbdulHaseebSE050"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/abdulhaseeb13mar"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-900 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">My Expertise</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6">
          {expertise.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center p-4 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-700 hover:shadow-md transition-all"
            >
              <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-3 object-contain" />
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Academic Journey */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Academic Journey</h2>
          <div className="relative border-l-2 border-zinc-200 dark:border-zinc-700 ml-3 space-y-8">
            {academicJourney.map((item, index) => (
              <div key={index} className="relative pl-8">
                <span className="absolute -left-2.25 top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-zinc-900"></span>
                <span className="text-sm text-blue-600 font-bold tracking-wider uppercase mb-1 block">{item.year}</span>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{item.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* University Achievements */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Achievements</h2>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-orange-50 dark:bg-zinc-800/50 border border-orange-100 dark:border-zinc-700">
                <span className="text-2xl mt-1">🏆</span>
                <p className="text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed">{achievement}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
