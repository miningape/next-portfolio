import { type NextPage } from "next";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { type IconType } from "react-icons";
import { Particles } from "~/components/particles";

const LinkWithIcon: React.FC<{
  Icon: IconType;
  href: string;
  text: string;
}> = ({ Icon, href, text }) => (
  <Link
    href={href}
    className="flex px-10 text-lg text-sky-100 hover:text-amber-100"
  >
    <Icon className="mr-1 h-7 w-7 align-middle" />
    <span>{text}</span>
  </Link>
);

const Home: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-bl from-[#1f1e1e] to-[#0b0b0c] text-center">
      <div>
        <p className="text-8xl text-sky-100">Kyle Johnson</p>

        <div className="flex justify-center pt-5">
          <LinkWithIcon
            Icon={FaGithub}
            href="https://github.com/miningape"
            text="Github"
          />

          <LinkWithIcon
            Icon={FaLinkedin}
            href="https://linkedin.com/in/kyle-craig-johnson/"
            text="Linkedin"
          />
        </div>
      </div>

      {/* <div className="absolute top-0 right-0 m-5 text-white"></div> */}
      <Particles className="absolute" />
    </main>
  );
};

export default Home;
