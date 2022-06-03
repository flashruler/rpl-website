import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import Fade from "react-reveal/Fade";
export default function phoenix() {
  return (
    <div className="w-screen h-full flex flex-col bg-[#14110F]">
      <Head>
        <title>Rocket Propulsion Laboratory</title>
        <meta name="description" content="UCSD's Premiere Aerospace Club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Fade>
        <div className="w-screen h-full min-h-screen flex flex-col items-center justify-center bg-cover bg-[url('/spaceshuttle.jpg')]">
          <Fade top>
            <h1 className="text-white uppercase text-7xl font-medium">
              Phoenix
            </h1>
            <h1 className="text-white uppercase text-lg font-light">
              Liquid Bi-propellant Rocket designed to compete in the FAR-Mars
              competition
            </h1>
          </Fade>
        </div>
      </Fade>
      <div className="w-screen h-full flex flex-col items-center bg-black">
        <h1 className="text-white text-4xl font-light my-10 uppercase text-center">
          Meet Phoenix
        </h1>
        <div className="h-1/4 w-auto flex flex-row justify-center mb-10">
          <h1 className="w-2/4 text-white text-xl text-center font-extralight ">
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
            <h1 className="w-2/4 text-white text-xl text-center font-extralight ">
              Our rocket utilizes a composite skin meticulously designed to
              withstand the forces during launch. It is the first time RPL has
              layed-up a composite skin section in house.
            </h1>
          </div>
        </div>
        <div className="my-10">
          <h1 className="text-white text-4xl font-light my-10 uppercase text-center">
            Injector
          </h1>
          <div className="h-1/4 w-auto flex flex-row justify-center">
            <h1 className="w-2/4 text-white text-xl text-center font-extralight ">
              Our rocket utilizes a composite skin meticulously designed to
              withstand the forces during launch. It is the first time RPL has
              layed-up a composite skin section in house.
            </h1>
            <img
              className="w-2/5 h-full"
              src="https://images.squarespace-cdn.com/content/v1/5a0e8f206957daab5b003d09/1632342895128-M77VH8PV76RL2ZD20BNN/Inejector.PNG?format=1500w"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
