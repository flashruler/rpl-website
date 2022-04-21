import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Head>
        <title>Rocket Propulsion Laboratory</title>
        <meta
          name="description"
          content="UCSD's Rocket Propulsion Laboratory"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute z-10 w-screen h-auto mt-4 h-20 flex flex-row items-center">
        <img src="/rpl_logo.png" className=" ml-14 mr-8 w-36 h-auto"></img>
        <Link href="/phoenix">
          <h1 className="mx-3 font-medium text-sm text-white cursor-pointer">
            PHOENIX
          </h1>
        </Link>

        <h1 className="mx-3 font-medium text-sm text-white">
          NEW MEMBER PROJECT
        </h1>
        <h1 className="mx-3 font-medium text-sm text-white">TEAMS</h1>
        <h1 className="mx-3 font-medium text-sm text-white">PAST PROJECTS</h1>
        <h1 className="mx-3 font-medium text-sm text-white">ALUMNI</h1>
        <h1 className="mx-3 font-medium text-sm text-white">SPONSORS</h1>
      </div>
      <div className="w-screen h-full min-h-screen flex flex-row items-center  bg-cover bg-[url('https://i.imgur.com/5zvTqJ4.jpg')]">
        <div className=" z-10 ml-14 w-2/6 ">
          <h1 className="text-white uppercase text-4xl font-medium">
            Learn About RPL and What We Do
          </h1>
          <Link
            href="/"
            className=" my-5 w-36 h-14 outline outline-offset-2 outline-1 text-white uppercase"
          >
            <button className=" my-5 w-36 h-14 outline outline-offset-2 outline-1 text-white uppercase">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <div className="w-screen h-screen min-h-screen flex flex-row items-center  bg-cover bg-[url('https://i.imgur.com/6hxNeu5.jpg')]">
        <div className="z-10 ml-14 w-2/6 ">
          <h1 className="text-white uppercase text-xl font-light">Project</h1>
          <h1 className="text-white uppercase text-4xl font-medium">
            New Member Project
          </h1>
          <Link
            href="/"
            className=" my-5 w-36 h-14 outline outline-offset-2 outline-1 text-white uppercase"
          >
            <button className=" my-5 w-36 h-14 outline outline-offset-2 outline-1 text-white uppercase">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <div className="w-screen h-auto min-h-screen flex flex-row items-center  bg-cover bg-[url('https://i.imgur.com/cEQCLjQ.png')]">
        <div className="z-10 ml-14 w-2/5 ">
          <h1 className="text-white uppercase text-xl font-light">Teams</h1>
          <h1 className="text-white uppercase text-4xl font-medium">
            Meet the teams behind rpl
          </h1>
          <Link
            href="/"
            className=" my-5 w-36 h-14 outline outline-offset-2 outline-1 text-white uppercase"
          >
            <button className=" my-5 w-36 h-14 outline outline-offset-2 outline-1 text-white uppercase">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
