import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import Fade from "react-reveal/Fade";
export default function nmp(props) {
  return (
    <div className="w-screen h-full flex flex-col bg-[#14110F]">
      <Head>
        <title>Rocket Propulsion Laboratory</title>
        <meta name="description" content="UCSD's Premiere Aerospace Club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Fade>
        <div className="w-screen h-screen min-h-screen flex flex-col justify-center items-center  bg-cover bg-[url('https://i.imgur.com/5VZVzQB.jpg')]">
          <Fade top>
            <h1 className="text-white uppercase text-7xl font-medium">
              New Member Project
            </h1>
            <h1 className=" text-white uppercase text-lg font-light">
              Making Rocketry Accessible for everyone
            </h1>
          </Fade>
        </div>
      </Fade>
      <div className="w-screen h-full bg-black grid grid-cols-2">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center w-3/4 mt-10 mb-30">
            <h1 className="text-white text-5xl font-thin">
              What is New Member Project?
            </h1>
            <h1 className="text-white text-xl font-thin my-3">
              The New Member Project (NMP) is designed to be a low-complexity
              introduction to rocket design available to anyone dedicated to and
              passionate about rocketry and engineering design. Our NMP team
              prides itself in accepting anyone interested in learning the
              fundamentals of rocketry with the desire and drive to participate.
            </h1>
            <h1 className="text-white text-xl font-thin my-3">
              {" "}
              NMP is a two-quarter-long program, beginning in Fall Quarter and
              ending early Spring Quarter. Our more experienced members guide
              new students through the design and construction of a G-class
              model rocket. Each workday includes a short presentation that
              teaches a relevant concept, followed by group work in teams of 4-6
              people. Presentation topics include CAD development, simulation
              setup, MATLAB programming, and design review expectations. We
              strive to help new undergraduate students develop the engineering
              skills they will need to succeed in our more advanced engineering
              teams and provide foundational knowledge of practical engineering
              skill sets that reinforces fundamental theory provided by the UCSD
              curriculum. Creativity and innovation are highly encouraged, so
              design restrictions are minimized. At the end of this program,
              teams will travel to the Friends of Amateur Rocketry (FAR) in
              California City, CA to launch their designs.
            </h1>
          </div>
          <div className=" flex flex-row h-2/4 mt-8">
            <div className="flex flex-col items-center my-16 ml-28">
              <img src="cambria.png" className="w-full h-auto rounded-lg" />
              <div className="flex flex-row my-8 w-full items-center cursor-pointer">
                <a href="https://www.linkedin.com/in/cambria-helene-adams-b9bb0b168/">
                  <span>
                    <img src="LI-In-Bug.png" className="w-8 h-full" />
                  </span>
                </a>
              </div>
            </div>
            <div className="ml-10">
              <h1 className="text-white text-2xl font-bold text-center uppercase mt-3">
                Cambria Helene Adams
              </h1>
              <h1 className="text-white text-xl font-light text-center uppercase my-3">
                NMP Chief Engineer
              </h1>
              <h1 className="text-white text-lg font-extralight  text-center mb-10">
                Cambria joined RPL in 2019, beginning with a wildly successful
                New Member Project and an accompanying launch out in the Mojave
                Desert. She transitioned onto the Phoenix structures subteam,
                working on internal structure and integration with propulsion
                systems before moving on to join propulsion. After leading the
                Phoenix propulsion subteam for a year and its accompanying
                Fawkes engine development cycle, Cambria will now take on one of
                the most important roles on RPL as Chief Engineer of the New
                Member Project. She is excited that her journey in RPL has come
                full circle as she leads the team that she first started on
                almost four years ago and forges the next generation of RPL
                members.
              </h1>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center my-20 ">
          <img className="w-2/4 h-auto" src="/NMPLogo.png"></img>
          <h1 className="text-white uppercase text-3xl font-light mt-20  ">
            Apply to Join NMP Here
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
