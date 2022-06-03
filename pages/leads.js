import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import Event from "../components/event";
import Fade from "react-reveal/Fade";
export default function Leads() {
  return (
    <div className="w-screen h-full flex flex-col bg-white">
      <Head>
        <title>Rocket Propulsion Laboratory</title>
        <meta name="description" content="UCSD's Premiere Aerospace Club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="w-screen h-auto min-h-screen flex flex-row items-center justify-center bg-cover bg-[url('/Leads1.jpg')]">
        {/* <img src="/Admin.jpg" className="h-screen w-auto" /> */}
      </div>
      <div className="w-screen flex flex-col items-center  bg-cover bg-black">
        <h1 className="text-white uppercase text-4xl font-bold text-center mt-5">
          The Leadership Team
        </h1>
        <div className="z-10 w-4/5 p-3 mb-5">
          <h1 className="text-white text-xl font-extralight text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque tincidunt diam eros, vitae lobortis velit dapibus non.
            Integer in leo ultricies, maximus magna laoreet, sodales felis.
          </h1>
        </div>
      </div>
      <h1 className="my-10 text-black uppercase text-4xl font-bold text-center">
        2022-2023 Chief Engineers
      </h1>
      <div className=" max-h-max grid grid-cols-2 bg-white p-3">
        <Fade top>
          <div className="grid grid-cols-2 h-2/4">
            <img src="Bora2.jpg" className="w-full h-auto rounded-lg" />
            <Fade top>
              <div className="p-3">
                <h1 className="text-3xl font-bold text-center uppercase my-5">
                  Bora Gursel
                </h1>
                <h1 className="text-2xl font-light text-center uppercase my-5">
                  President
                </h1>
                <h1 className="text-xl font-extralight  text-center ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque quis imperdiet nunc. Sed in pretium elit, at finibus
                  dolor. Suspendisse semper turpis vitae dui scelerisque
                  sodales.
                </h1>
                <div className="flex flex-row my-8 w-full items-center">
                  <img src="LI-In-Bug.png" className="w-8 h-full" />
                  <h1 className="text-sm font-extralight  text-center ">
                    Linkedin.com/whatever-your-url-is
                  </h1>
                </div>
              </div>
            </Fade>
          </div>
        </Fade>
        <Fade top>
          <div className="grid grid-cols-2 h-2/4">
            <img src="SafetyChad.jpg" className="w-full h-auto rounded-lg" />
            <Fade top>
              <div className="p-3">
                <h1 className="text-3xl font-bold text-center uppercase my-5">
                  Blake Anderson
                </h1>
                <h1 className="text-2xl font-light text-center uppercase my-5">
                  VP Safety
                </h1>
                <h1 className="text-xl font-extralight  text-center ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque quis imperdiet nunc. Sed in pretium elit, at finibus
                  dolor. Suspendisse semper turpis vitae dui scelerisque
                  sodales.
                </h1>
                <div className="flex flex-row my-8 w-full items-center">
                  <img src="LI-In-Bug.png" className="w-8 h-full" />
                  <h1 className="text-sm font-extralight  text-center ">
                    Linkedin.com/whatever-your-url-is
                  </h1>
                </div>
              </div>
            </Fade>
          </div>
        </Fade>
        <Fade top>
          <div className="grid grid-cols-2 h-2/4 mt-8">
            <img src="Emily2.jpg" className="w-full h-auto rounded-lg" />
            <Fade top>
              <div className="p-3">
                <h1 className="text-3xl font-bold text-center uppercase my-5">
                  Emily DeBoer
                </h1>
                <h1 className="text-2xl font-light text-center uppercase my-5">
                  VP External
                </h1>
                <h1 className="text-xl font-extralight  text-center ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque quis imperdiet nunc. Sed in pretium elit, at finibus
                  dolor. Suspendisse semper turpis vitae dui scelerisque
                  sodales.
                </h1>
                <div className="flex flex-row my-8 w-full items-center">
                  <img src="LI-In-Bug.png" className="w-8 h-full" />
                  <h1 className="text-sm font-extralight  text-center ">
                    Linkedin.com/whatever-your-url-is
                  </h1>
                </div>
              </div>
            </Fade>
          </div>
        </Fade>
        <Fade top>
          <div className="grid grid-cols-2 h-2/4 mt-8">
            <img src="Kylan1.jpg" className="w-full h-auto rounded-lg" />
            <Fade top>
              <div className="p-3">
                <h1 className="text-3xl font-bold text-center uppercase my-5">
                  Kylan Zhao
                </h1>
                <h1 className="text-2xl font-light text-center uppercase my-5">
                  VP Internal
                </h1>
                <h1 className="text-xl font-extralight  text-center ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque quis imperdiet nunc. Sed in pretium elit, at finibus
                  dolor. Suspendisse semper turpis vitae dui scelerisque
                  sodales.
                </h1>
                <div className="flex flex-row my-8 w-full items-center">
                  <img src="LI-In-Bug.png" className="w-8 h-full" />
                  <h1 className="text-sm font-extralight  text-center ">
                    Linkedin.com/whatever-your-url-is
                  </h1>
                </div>
              </div>
            </Fade>
          </div>
        </Fade>
        <Fade top>
          <div className="grid grid-cols-2 h-2/4 mt-8">
            <img src="Adi2.png" className="w-full h-auto rounded-lg" />
            <Fade top>
              <div className="p-3">
                <h1 className="text-3xl font-bold text-center uppercase my-5">
                  Aditya Shah
                </h1>
                <h1 className="text-2xl font-light text-center uppercase my-5">
                  VP Finance
                </h1>
                <h1 className="text-xl font-extralight  text-center ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque quis imperdiet nunc. Sed in pretium elit, at finibus
                  dolor. Suspendisse semper turpis vitae dui scelerisque
                  sodales.
                </h1>
                <div className="flex flex-row my-8 w-full items-center">
                  <img src="LI-In-Bug.png" className="w-8 h-full" />
                  <h1 className="text-sm font-extralight  text-center ">
                    Linkedin.com/whatever-your-url-is
                  </h1>
                </div>
              </div>
            </Fade>
          </div>
        </Fade>
        <Fade top>
          <div className="grid grid-cols-2 h-2/4 mt-8">
            <img src="Jay2.jpg" className="w-full h-auto rounded-lg" />
            <Fade top>
              <div className="p-3">
                <h1 className="text-3xl font-bold text-center uppercase my-5">
                  Jay Buensuceso
                </h1>
                <h1 className="text-2xl font-light text-center uppercase my-5">
                  Webmaster
                </h1>
                <h1 className="text-xl font-extralight  text-center ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque quis imperdiet nunc. Sed in pretium elit, at finibus
                  dolor. Suspendisse semper turpis vitae dui scelerisque
                  sodales.
                </h1>
                <div className="flex flex-row my-8 w-full items-center">
                  <img src="LI-In-Bug.png" className="w-8 h-full" />
                  <h1 className="text-sm font-extralight  text-center ">
                    Linkedin.com/whatever-your-url-is
                  </h1>
                </div>
              </div>
            </Fade>
          </div>
        </Fade>
      </div>
    </div>
  );
}
