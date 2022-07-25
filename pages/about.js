import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import Event from "../components/event";
import Fade from "react-reveal/Fade";
export default function phoenix() {
  return (
    <div className="w-screen h-fullflex flex-col bg-white">
      <Head>
        <title>Rocket Propulsion Laboratory</title>
        <meta name="description" content="UCSD's Premiere Aerospace Club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="w-screen h-auto min-h-screen flex flex-row items-center justify-center bg-cover bg-[url('https://i.imgur.com/N3HaTw3.jpg')]">
        <Fade top opposite={true}>
          <h1 className=" w-3/4 z-10 blur-none text-white text-7xl text-center font-bold uppercase">
            About Rocket Propulsion Laboratory
          </h1>
        </Fade>
      </div>
      <div className="w-screen flex flex-col items-center  bg-cover bg-black">
        <h1 className="text-white uppercase text-4xl font-bold text-center mt-5">
          Our Mission
        </h1>
        <div className="z-10 w-4/5 p-3 mb-5">
          <h1 className="text-white text-xl font-extralight text-center">
            The Rocket Propulsion Laboratory was founded in the Spring of 2017
            by Cameron Flannery, Michael Phalen, and Alex Lim. RPL’s goal is to
            provide student-led research opportunities for students passionate
            about space exploration. We strive to provide challenging and
            exciting projects for students to develop their technical knowledge,
            leadership abilities, and hands-on skills.
          </h1>
        </div>
      </div>
      <h1 className="my-10 text-black uppercase text-4xl font-bold text-center">
        Previous events
      </h1>
      <div>
        <div className="w-screen h-2/5 min-h-1/4 grid grid-cols-2 bg-cover bg-white p-3">
          <div className="w-full h-auto items-center flex flex-col justify-center">
            <h1>Picture goes here</h1>
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-bold text-center uppercase my-5">
              The Core of RPL's Mission is threefold:
            </h1>
            <ul className="list-disc p-10">
              <li className="text-xl my-5 font-extralight">
                Nurture a network of young professionals and build lifelong
                friends.
              </li>
              <li className="text-xl my-5 font-extralight">
                Make collegiate rocketry accessible to passionate students
                regardless of their background or previous experience.
              </li>
              <li className="text-xl my-5 font-extralight">
                Build rockets that push the boundaries of undergraduate
                rocketry.{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="w-screen h-2/5 min-h-1/4 grid grid-cols-2 bg-cover bg-white p-3">
          <div className="p-8">
            <h1 className="text-3xl font-bold  text-center uppercase my-5 p-10">
              UNIVERSITY OF CALIFORNIA, SAN DIEGO
            </h1>
            <h1 className="text-xl font-extralight  mb-5 text-center ">
              UCSD provides students with extensive theoretical knowledge
              necessary for aerospace design. The Rocket Propulsion Laboratory
              is a platform for students to apply that knowledge to real
              projects.
            </h1>
            <h1 className="text-xl font-extralight  text-center ">
              All our members are held to industry level standards for design,
              manufacturing, and documentation. RPL hosts workshops and seminars
              to teach students these critical engineering skills throughout the
              year. Our team hosts quarterly professional development sessions
              focusing on resume reviews and mock interviews with senior
              members.{" "}
            </h1>
          </div>
          <div className="w-full h-auto items-center flex flex-col justify-center">
            <h1>Picture goes here</h1>
          </div>
        </div>
        <div className="w-screen h-1/8 min-h-1/4 flex flex-row items-center justify-center bg-cover bg-white p-3">
          <Link
            href="/admin"
            className=" mx-10 my-5 w-36 h-14 outline outline-offset-2 outline-1 uppercase"
          >
            <button className=" mx-10 my-5 w-36 h-14 outline outline-offset-2 outline-1  uppercase">
              Our Admin Team
            </button>
          </Link>
          <Link
            href="/"
            className=" mx-10 my-5 w-36 h-14 outline outline-offset-2 outline-1 uppercase"
          >
            <button className=" mx-10 my-5 w-36 h-14 outline outline-offset-2 outline-1  uppercase">
              Our subteam leads
            </button>
          </Link>
        </div>
      </div>
      <div className="w-screen h-1/8 flex flex-row items-center  bg-cover bg-black p-10 justify-center">
        <Link
          href="/phoenix"
          className=" mx-10 my-5 w-36 h-14 outline outline-offset-2 outline-1 text-white uppercase"
        >
          <button className=" mx-10 my-5 w-36 h-14 outline outline-offset-2 outline-1 text-white uppercase">
            Learn More About Phoenix
          </button>
        </Link>
        <Link
          href="/phoenix"
          className=" mx-10 my-5 w-36 h-14 outline outline-offset-2 outline-1 text-white uppercase"
        >
          <button className=" mx-10 my-5 w-44 h-14 outline outline-offset-2 outline-1 text-white uppercase">
            Learn More About new member project
          </button>
        </Link>
        <Link
          href="/"
          className=" mx-10 my-5 w-36 h-14 outline outline-offset-2 outline-1 text-white uppercase"
        >
          <button className=" mx-10 my-5 w-44 h-14 outline outline-offset-2 outline-1 text-white uppercase">
            Learn More About Sugar Rocket
          </button>
        </Link>
      </div>
    </div>
  );
}
