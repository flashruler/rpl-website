import Head from "next/head";
import Link from "next/link";
import Header from "../components/header"
export default function phoenix() {
  return (
    <div className="w-screen h-screen flex flex-col bg-[#14110F]">
      <Head>
        <title>Rocket Propulsion Laboratory</title>
        <meta name="description" content="UCSD's Premiere Aerospace Club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
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
        <div className="h-1/4 w-auto flex flex-row justify-center mb-10">
          <h1 className="w-2/4 text-white text-xl text-center font-extralight uppercase">
            The Phoenix rocket is designed to compete in the FAR-Mars
            competition. The goal of the rocket is to reach as close to 45,000
            feet as possible but must be within the bounds of 30,000-50,000
            feet. The rockets will be fueled by Liquid Natural Gas (LNG) and
            Liquid Oxygen (LOX). The total length of the rocket is 157.4 in and
            the outer diameter is 8.675 in.
          </h1>
        </div>
        <div>
        <h1 className="text-white text-4xl font-light my-10 uppercase text-center">
          Composite Skin
        </h1>
        <div className="h-1/4 w-auto flex flex-row justify-center">
          <h1 className="w-2/4 text-white text-xl text-center font-extralight uppercase">
            Our rocket utilizes a composite skin meticulously designed to withstand the forces
            during launch. It is the first time RPL has layed-up a composite skin section in house.
          </h1>
        </div>
        </div>
        
      </div>

    </div>
  );
}
