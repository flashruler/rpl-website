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
          <h1 className="text-white text-3xl font-light">Phoenix</h1>
          <h1 className="text-white text-xl font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
           ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
           dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
        </div>
          <div className="flex flex-col items-center w-3/4 mt-96 mb-72">
          <h1 className="text-white text-3xl font-light">Recovery</h1>
          <h1 className="text-white text-xl font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
           ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
           dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
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
          <h1 className="text-white text-xl font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
           ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
           dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
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
          <h1 className="text-white text-xl font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
           ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
           dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>

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
          <h1 className="text-white text-xl font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
           ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
           dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
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
          <h1 className="text-white text-xl font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
           ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
           dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
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
          <img className="w-auto" src="/untitled 2.png"></img>
        </div>
        
        
      </div>
    </div>
  );
}
