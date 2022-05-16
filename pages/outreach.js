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
          <h1 className="text-white text-7xl text-center font-bold uppercase">
            Outreach
          </h1>
        </Fade>
      </div>
      <div className="w-screen flex flex-col items-center  bg-cover bg-black">
        <h1 className="text-white uppercase text-4xl font-bold text-center mt-5">
          Our Goal
        </h1>
        <div className="z-10 w-4/5 p-3 mb-5">
          <h1 className="text-white text-xl font-extralight text-center">
            Rocket Propulsion Laboratory is dedicated to UCSD and the larger
            community of San Diego. We are always looking for opportunities to
            work together and share in our knowledge of rocketry, inspiring
            people of all ages to look at science and space in a new way.
          </h1>
        </div>
      </div>
      <h1 className="my-10 text-black uppercase text-4xl font-bold text-center">
        Previous events
      </h1>
      <Event />
    </div>
  );
}
