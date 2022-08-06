import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import Event from "../components/event";
import Fade from "react-reveal/Fade";
export default function Admin() {
  return (
    <div className="w-screen h-full flex flex-col bg-white">
      <Head>
        <title>Rocket Propulsion Laboratory</title>
        <meta name="description" content="UCSD's Premiere Aerospace Club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Fade>
        <div className="w-screen h-auto min-h-screen flex flex-row items-center justify-center bg-cover bg-[url('/Admin.jpg')]">
          {/* <img src="/Admin.jpg" className="h-screen w-auto" /> */}
        </div>
      </Fade>
      <div className="w-screen flex flex-col items-center  bg-cover bg-black">
        <h1 className="text-white uppercase text-4xl font-bold text-center mt-5">
          The Administrative Team
        </h1>
        <div className="z-10 w-4/5 p-3 mb-5">
          <h1 className="text-white text-xl font-extralight text-center">
            Learn about our leadership team and our commitment to RPL&apos;s
            mission. Each of us recognizes that fundamentally we are students
            first. We promise prospective members and our partners that
            RPL&apos;s leadership team is steadfast in its desire to balance
            educational priorities with our drive to tackle complex engineering
            challenges.
          </h1>
        </div>
      </div>
      <h1 className="my-10 text-black uppercase text-4xl font-bold text-center">
        2022-2023 Administrative Team
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
                  Bora joined RPL back in 2019, starting off in the New Member
                  Project. After a successful launch with his team he
                  transitioned onto the Phoenix structures team where he was
                  closely involved with the design and development of the
                  internal support structure. He joined the admin team in 2021
                  as the vice president finance where he managed fund
                  distributions for project development as RPL&apos;s
                  transitioned back to on site activities. As President, he is
                  excited to realize the completion of RPL&apos;s multi-year
                  Phoenix project and foster greater connections between RPL and
                  the broader community of students, alumni, and industry
                  partners.
                </h1>
                <div className="flex flex-row my-8 w-full items-center cursor-pointer">
                  <a href="https://www.linkedin.com/in/bora-gursel/">
                    <span>
                      <img src="LI-In-Bug.png" className="w-8 h-full" />
                    </span>
                  </a>
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
                  Blake Andersen
                </h1>
                <h1 className="text-2xl font-light text-center uppercase my-5">
                  VP Safety
                </h1>
                <h1 className="text-xl font-extralight  text-center ">
                  Blake joined RPL&apos;s new member project during his first
                  year, successfully completing the project and then
                  transitioning to the Phoenix recovery subteam. He admires
                  RPL&apos;s dedication to making rocketry accessible for all
                  and cares about making sure everybody can be safe while having
                  fun pursuing their passion. In that respect, RPL is thankful
                  to have Blake as our Vice President Safety as we look towards
                  a safe and successful launch this academic year.
                </h1>
                <div className="flex flex-row my-8 w-full items-center cursor-pointer">
                  <a href="https://www.linkedin.com/in/blake-c-andersen/">
                    <span>
                      <img src="LI-In-Bug.png" className="w-8 h-full" />
                    </span>
                  </a>
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
                  Emily first joined RPL in her search for a place to build,
                  design, and fly rockets and has been with us for two years
                  now. First as a member of our propulsion team and now as our
                  incumbent propulsion lead, Emily is no stranger to tackling
                  the most complex challenges inherent to rocketry. Also serving
                  in a dual role this year as our propulsion lead and Vice
                  President External, Emily is excited to be leading our amazing
                  community of engineers in preparation for the Phoenix launch.
                </h1>
                <div className="flex flex-row my-8 w-full items-center">
                  <img src="LI-In-Bug.png" className="w-8 h-full" />
                  <h1 className="text-sm font-extralight  text-center "></h1>
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
                  Kylan has been with RPL for three years and he considers the
                  time he&apos;s spent with the team to be an integral part of
                  his educational and professional development. He has been
                  involved in structural design and development of critical
                  systems and will be serving RPL in a dual role as our Phoenix
                  structures co-lead and vice president internal. Kylan is
                  looking forward to seeing the efforts of his team come to
                  fruition during the upcoming launch.
                </h1>
                <div className="flex flex-row my-8 w-full items-center cursor-pointer">
                  <a href="https://www.linkedin.com/in/kylanzhao/">
                    <span>
                      <img src="LI-In-Bug.png" className="w-8 h-full" />
                    </span>
                  </a>
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
                  Adi joined RPL&apos;s Phoenix structures his freshman year,
                  driven by his passion for rocketry and space exploration. He
                  greatly values RPL&apos;s emphasis on applying and building on
                  conceptual materials to real life applications. As RPL enters
                  the fabrication and assembly stage of the Phoenix rocket, we
                  are lucky to have Adi as our Vice President Finance to oversee
                  putting the proverbial shoves in the ground.
                </h1>
                <div className="flex flex-row my-8 w-full items-center cursor-pointer">
                  <a href="https://www.linkedin.com/in/adi-shah-/">
                    <span>
                      <img src="LI-In-Bug.png" className="w-8 h-full" />
                    </span>
                  </a>
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
                  Website Development Lead
                </h1>
                <h1 className="text-xl font-extralight  text-center ">
                  Jay started with RPL&apos;s Phoenix Structures subteam to get
                  involved with a hands-on team based project within collegiate
                  rocketry. Since then he&apos;s been involved in many things he
                  never expected to learn such as composite manufacturing. As
                  RPL moves towards the launch window for Phoenix, we&apos;re
                  grateful to have Jay as our Website Development Lead to
                  document this amazing journey for our friends and partners.
                </h1>
                <div className="flex flex-row my-8 w-full items-center cursor-pointer">
                  <a href="https://www.linkedin.com/in/jaybuens/">
                    <span>
                      <img src="LI-In-Bug.png" className="w-8 h-full" />
                    </span>
                  </a>
                </div>
              </div>
            </Fade>
          </div>
        </Fade>
      </div>
    </div>
  );
}
