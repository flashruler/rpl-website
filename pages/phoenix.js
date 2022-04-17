import Head from "next/head";
import Link from "next/link";
export default function phoenix() {
  return (
    <div className="w-screen h-screen flex flex-col bg-[#14110F]">
      <Head>
        <title>Rocket Propulsion Laboratory</title>
        <meta name="description" content="UCSD's Premiere Aerospace Club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute z-10 w-screen h-auto mt-4 h-20 flex flex-row items-center">
        <Link href="/">
          <img
            src="/rpl_logo.png"
            className=" ml-14 mr-8 w-36 h-auto cursor-pointer"
          ></img>
        </Link>

        <h1 className="mx-3 font-medium text-sm text-white">PHOENIX</h1>
        <h1 className="mx-3 font-medium text-sm text-white">
          NEW MEMBER PROJECT
        </h1>
        <h1 className="mx-3 font-medium text-sm text-white">TEAMS</h1>
        <h1 className="mx-3 font-medium text-sm text-white">PAST PROJECTS</h1>
        <h1 className="mx-3 font-medium text-sm text-white">ALUMNI</h1>
        <h1 className="mx-3 font-medium text-sm text-white">SPONSORS</h1>
      </div>
      <div className="w-screen h-full min-h-screen flex flex-row items-center  bg-cover bg-[url('https://i.imgur.com/5zvTqJ4.jpg')]">
        <div className=" z-10 mx-auto flex flex-col items-center">
          <h1 className="text-white uppercase text-7xl font-medium">Phoenix</h1>
          <h1 className="text-white uppercase text-lg font-light">
            Liquid Bi-propellant Rocket designed to compete in the FAR-Mars
            competition
          </h1>
        </div>
      </div>
      <div className="w-screen h-full flex flex-col items-center bg-black">
        <h1 className="text-white text-4xl font-light my-10 uppercase text-center">
          Meet Phoenix
        </h1>
        <div className="h-1/4 w-auto flex flex-row justify-center">
          <h1 className="w-2/4 text-white text-xl text-center font-extralight uppercase">
            The Phoenix rocket is designed to compete in the FAR-Mars
            competition. The goal of the rocket is to reach as close to 45,000
            feet as possible but must be within the bounds of 30,000-50,000
            feet. The rockets will be fueled by Liquid Natural Gas (LNG) and
            Liquid Oxygen (LOX). The total length of the rocket is 157.4 in and
            the outer diameter is 8.675 in.
          </h1>
        </div>
      </div>
    </div>
  );
}
