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
            <h1 className=" text-white uppercase text-lg font-light">
              Liquid Bi-propellant Rocket designed to compete in the FAR-Mars
              competition
            </h1>
          </Fade>
        </div>
      </Fade>
      <div className="w-screen h-full bg-black grid grid-cols-2">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center w-3/4 mt-10 mb-30">
            <h1 className="text-white text-6xl font-thin">Phoenix</h1>
            <h1 className="text-white text-xl font-thin my-3">
              Small in scale, but brimming with complex challenges is the
              FAR-MARS Competition. RPL is entering into the competition with
              our very first liquid bi-propellant vehicle to win the finalist
              cash prize of $50,000. The goals of the competition are twofold:
              reach 45,000 feet to demonstrate the precise control required to
              create reusable launch vehicles, and do so using a combination of
              liquid methane and liquid oxygen propellants, both of which may be
              extracted from the Martian environment in future missions to the
              red planet.
            </h1>
            <h1 className="text-white text-xl font-thin my-3">
              {" "}
              Phoenix measures 13 feet tall. Powered by the Fox engine, designed
              in-house, our propulsion system will provide 600 lbs of thrust and
              reach half the temperature of the sun. At T+15, the rocket will
              break the sound barrier, and continue accelerating to Mach 2 (1150
              mph).
            </h1>
            <h1 className="text-white text-xl font-thin my-3">
              {" "}
              The Phoenix program is designed to give more advanced members a
              deeper understanding of the complexities of the design,
              fabrication, and operation of a liquid propellant rocket. Students
              get an in-depth look at avionics systems, structural mechanics,
              propulsion and flight dynamics, and testing and launch site safety
              and operations.
            </h1>
          </div>
          <div className="flex flex-col w-3/4 mt-10 mb-30">
            <h1 className="text-white text-2xl font-thin">Phoenix</h1>
            <h1 className="text-white text-6xl font-light"> Overview</h1>
            <div className="grid grid-cols-2 grid-row-6  my-3">
              <div className="my-3">
                <h1 className="text-white text-2xl font-thin">HEIGHT</h1>
              </div>
              <div className="flex flex-row justify-end  my-3">
                <h1 className="text-white text-2xl font-thin">13 ft / 4 m</h1>
              </div>
              <div className="my-3">
                <h1 className="text-white text-2xl font-thin">DIAMETER</h1>
              </div>
              <div className="flex flex-row justify-end  my-3">
                <h1 className="text-white text-2xl font-thin">
                  8.056 in / 20.5 cm
                </h1>
              </div>
              <div className="my-3">
                <h1 className="text-white text-2xl font-thin">MAXIMUM SPEED</h1>
              </div>
              <div className="flex flex-row justify-end  my-3">
                <h1 className="text-white text-2xl font-thin">MACH 2</h1>
              </div>
              <div className="my-3">
                <h1 className="text-white text-2xl font-thin">DRY MASS</h1>
              </div>
              <div className="flex flex-row justify-end  my-3">
                <h1 className="text-white text-2xl font-thin">
                  100 lb / 45.4 kg
                </h1>
              </div>
              <div className="my-3">
                <h1 className="text-white text-2xl font-thin">APOGEE HEIGHT</h1>
              </div>
              <div className="flex flex-row justify-end my-3">
                <h1 className="text-white text-xl font-thin">
                  35,000 - 45,000 ft / 10,668 - 13,716 m
                </h1>
              </div>
              <div className="my-3">
                <h1 className="text-white text-2xl font-thin">
                  EXPECTED LAUNCH DATE
                </h1>
              </div>
              <div className="flex flex-row justify-end items-center my-3">
                <h1 className="text-white text-2xl font-thin">JANUARY 2023</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-3/4 mt-96 mb-72">
            <h1 className="text-white text-3xl font-light">Recovery</h1>
            <h1 className="text-white text-xl font-thin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h1>
            <Link
              href="/phoenix"
              className=" my-5 w-36 h-14 outline outline-offset-2 outline-1 text-white uppercase"
            >
              <button className=" my-5 w-36 h-14 outline outline-offset-2 outline-1 text-white uppercase">
                Learn More
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-center w-3/4 my-72">
            <h1 className="text-white text-3xl font-light">Avionics</h1>
            <h1 className="text-white text-xl font-thin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h1>
            <Link
              href="/phoenix"
              className=" my-5 w-36 h-14 outline outline-offset-2 outline-1 text-white uppercase"
            >
              <button className=" my-5 w-36 h-14 outline outline-offset-2 outline-1 text-white uppercase">
                Learn More
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-center w-3/4 my-72">
            <h1 className="text-white text-3xl font-light">Structures</h1>
            <h1 className="text-white text-xl font-thin">
              Help. We have no idea what we are doing. We feel like we are
              trapped in Zachs D&D RPL campaign. Save us.
            </h1>

            <Link
              href="/phoenix"
              className=" my-5 w-36 h-14 outline outline-offset-2 outline-1 text-white uppercase"
            >
              <button className=" my-5 w-36 h-14 outline outline-offset-2 outline-1 text-white uppercase">
                Learn More
              </button>
            </Link>
            {/* {!strMin && <Subteam/>} */}
          </div>
          <div className="flex flex-col items-center w-3/4 my-72">
            <h1 className="text-white text-3xl font-light">Plumbing</h1>
            <h1 className="text-white text-xl font-thin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h1>
            <Link
              href="/phoenix"
              className=" my-5 w-36 h-14 outline outline-offset-2 outline-1 text-white uppercase"
            >
              <button className=" my-5 w-36 h-14 outline outline-offset-2 outline-1 text-white uppercase">
                Learn More
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-center w-3/4 my-72">
            <h1 className="text-white text-3xl font-light">Propulsion</h1>
            <h1 className="text-white text-xl font-thin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h1>
            <Link
              href="/phoenix"
              className=" my-5 w-36 h-14 outline outline-offset-2 outline-1 text-white uppercase"
            >
              <button className=" my-5 w-36 h-14 outline outline-offset-2 outline-1 text-white uppercase">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className=" flex justify-center">
          <img className="w-auto" src="/untitled2.png"></img>
        </div>
      </div>
    </div>
  );
}
