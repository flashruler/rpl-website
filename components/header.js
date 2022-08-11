import Link from "next/link";
export default function Header() {
  return (
    <div className="absolute z-10 w-screen h-auto mt-4 h-20 flex flex-row items-center">
      <Link href="/">
        <img
          src="/rpl_logo.png"
          className=" ml-14 mr-8 w-36 h-auto cursor-pointer"
        ></img>
      </Link>
      <Link href="/about">
        <h1 className="mx-3 font-medium text-sm text-white cursor-pointer">
          ABOUT RPL
        </h1>
      </Link>
      <Link href="/phoenix">
        <h1 className="mx-3 font-medium text-sm text-white cursor-pointer">
          PHOENIX
        </h1>
      </Link>
      <Link href="/nmp">
        <h1 className="mx-3 font-medium text-sm text-white cursor-pointer">
          NEW MEMBER PROJECT
        </h1>
      </Link>

      <h1 className="mx-3 font-medium text-sm text-white">PAST PROJECTS</h1>
      <h1 className="mx-3 font-medium text-sm text-white">ALUMNI</h1>
      <h1 className="mx-3 font-medium text-sm text-white">SPONSORS</h1>
    </div>
  );
}
