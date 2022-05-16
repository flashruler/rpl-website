import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header.js";
import Fade from "react-reveal/Fade";
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
      <Header />
      <div className="w-screen h-full min-h-screen flex flex-row items-center  bg-cover bg-[url('https://cdn.discordapp.com/attachments/904136026329612298/974879342402347028/unknown.png')]">
        <div className=" z-10 ml-14 w-2/6 ">
          <Fade top>
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
          </Fade>
        </div>
      </div>
      <div className="w-screen h-screen min-h-screen flex flex-row items-center  bg-cover bg-[url('https://i.imgur.com/6hxNeu5.jpg')]">
        <div className="z-10 ml-14 w-2/6 ">
          <Fade top>
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
          </Fade>
        </div>
      </div>
      <div className="w-screen h-auto min-h-screen flex flex-row items-center  bg-cover bg-[url('https://i.imgur.com/N3HaTw3.jpg')]">
        <div className="z-10 ml-14 w-2/5 ">
          <Fade top>
            <h1 className="text-white uppercase text-xl font-light">
              Outreach
            </h1>
            <h1 className="text-white uppercase text-4xl font-medium">
              Check Out Events we featured at
            </h1>
            <Link
              href="/outreach"
              className=" my-5 w-36 h-14 outline outline-offset-2 outline-1 text-white uppercase"
            >
              <button className=" my-5 w-36 h-14 outline outline-offset-2 outline-1 text-white uppercase">
                Learn More
              </button>
            </Link>
          </Fade>
        </div>
      </div>
    </div>
  );
}
