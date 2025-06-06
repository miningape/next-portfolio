import { IconTypes } from "solid-icons";
import { FaBrandsGithub, FaBrandsLinkedin } from "solid-icons/fa";
import { Component } from "solid-js";
import { Particles } from "~/components/Particles";

const LinkWithIcon: Component<{
  Icon: IconTypes;
  href: string;
  text: string;
}> = ({ Icon, href, text }) => (
  <a href={href} class="flex px-10 text-lg text-sky-100 hover:text-amber-100">
    <Icon class="mr-1 h-7 w-7 align-middle" />
    <span>{text}</span>
  </a>
);

export default function Index() {
  return (
    <div class="flex min-h-screen flex-col items-center bg-gradient-to-bl from-[#1f1e1e] to-[#0b0b0c] justify-center text-center">
      <div class="z-1">
        <p class="text-8xl text-sky-100">Kyle Johnson</p>

        <div class="flex justify-center pt-5">
          <LinkWithIcon
            Icon={FaBrandsGithub}
            href="https://github.com/miningape"
            text="Github"
          />

          <LinkWithIcon
            Icon={FaBrandsLinkedin}
            href="https://linkedin.com/in/kyle-craig-johnson/"
            text="Linkedin"
          />
        </div>
      </div>

      {/* <div className="absolute top-0 right-0 m-5 text-white"></div> */}
      <Particles className="absolute" />
    </div>
  );
}
