import Head from "next/head";
import { BsCpuFill } from "react-icons/bs";
import {AiFillLinkedin, AiOutlineGithub} from "react-icons/ai";
import Image from "next/image";
import adam from "../public/headshot-transparent.png";
import programming from "../public/programming.png";
import code from "../public/code.png";
import weather from "../public/Weather-Forecast.png";
import social from "../public/social-network-pic.png";
import tech from "../public/TECHBlogpic.png";
import workday from "../public/workday-pic.png";
import hacker from "../public/hacker.png";
import { useState } from "react";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Reed Portofolio</title>
        <meta name="description" content="Reed Portofolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-stone-400 px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">SimplyaReed</h1>
          <ul className="flex items-center">
            <li>
              <BsCpuFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" />
            </li>
            <li>
              <a className="bg-gradient-to-r from-slate-600 to-teal-50 px-4 py-2 rounded-md ml-8" href="/FullstackDevResume.pdf" 
              download="AdamReedResume.pdf">Resume</a></li>
          </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-slate-600 font-medium md:text-6xl dark:text-stone-400">Adam Reed</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-stone-400">Jr Full Stack Developer.</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-stone-400">
              Graduate from the Ohio State University Bootcamp, Full Stack Developer with a passion for building dynamic and responsive web applications. I specialize in both front-end and back-end technologies, with a keen eye for detail and a commitment to delivering high-quality code. Let's create something amazing together! </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-stone-400">
            <a href="https://www.linkedin.com/in/simplyareed/">
            <AiFillLinkedin />
            </a>
            <a href="https://github.com/Simplyareed">
            <AiOutlineGithub />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-slate-600 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 dark:from-stone-400">
            <Image src={adam} layout="scale-down"  objectFit="contain" />
          </div>
        </section>
         {/* Section Area*/}

         <section>
          <div className="shadow-lg p-10 rounded-xl my-10 dark:bg-stone-400">
            <h3 className="text-3xl py-1 ">Let's Grow Together</h3>
            <p className="text-md py-2 leading-8 text-gray-80">
              If you would like to<span className="text-green-900"> connect </span>
               with me for any future <span className="text-green-900"> internships </span>
               or <span className="text-green-900"> employment </span> don't hesitate, let's get started!</p>
          </div>
          <div className="lg:flex gap-20">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-stone-400">
              <Image src={code} width={100} height={100} class="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">Services I offer</h3>
              <p className="py-2">  
                Some brief languages and tools that I can provide for future development.
              </p>
              <h4 className="py-4 text-green-900">Full Stack tools I use</h4>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">MongoDB</p>
              <p className="text-gray-800 py-1">Express.js</p>
              <p className="text-gray-800 py-1">Node.js</p>
              <p className="text-gray-800 py-1">React</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-stone-400">
              <Image src={programming} width={100} height={100} class="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">Portfolio</h3>
              <p className="py-2">  
                Check out my portfolio to see some of the projects I have worked on.
              </p>
              <h4 className="py-4 text-green-900">Projects that I have created</h4>
              <p className="text-gray-800 py-1">Weather Dashboard</p>
              <p className="text-gray-800 py-1">Social Network API</p>
              <p className="text-gray-800 py-1">Tech Blog</p>
              <p className="text-gray-800 py-1">Regex Instructional</p>
              <p className="text-gray-800 py-1">Text Editor</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-stone-400">
              <Image src={hacker} width={100} height={100} class="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">About Me</h3>
              <p className="py-2">  
                Check out my portfolio to see some of the projects I have worked on.
              </p>
              <h4 className="py-4 text-green-900">Projects that I have created</h4>
              <p className="text-gray-800 py-1">Weather Dashboard</p>
              <p className="text-gray-800 py-1">Social Network API</p>
              <p className="text-gray-800 py-1">Tech Blog</p>
              <p className="text-gray-800 py-1">Regex Instructional</p>
              <p className="text-gray-800 py-1">Text Editor</p>
            </div>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
            <a href="https://www.youtube.com/watch?v=Ujgq3EKl0es">
              <Image src={social} className="rounded-lg object-cover" 
              width={'100%'} 
              height={'100%'} 
              layout="responsive" />
              </a>
            </div>
          </div>
          <div className="basis-1/3 flex-1">
          <a href="https://simplyareed.github.io/Weather-Dashboard/">
            <Image src={weather} className="rounded-lg object-cover" 
            width={'100%'} 
            height={'100%'} 
            layout="responsive" />
            </a>
            </div>
            <div className="basis-1/3 flex-1">
            <a href="https://limitless-falls-47689-189478fb7497.herokuapp.com/">
              <Image src={tech} className="rounded-lg object-cover" 
              width={'100%'} 
              height={'100%'} 
              layout="responsive" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
            <a href="https://simplyareed.github.io/Workday-Scheduler/">
              <Image src={workday} className="rounded-lg object-cover" 
              width={'100%'} 
              height={'100%'} 
              layout="responsive" />
              </a>
            </div>
         </section>
      </main>
    </div>
  );
}