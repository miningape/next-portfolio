import { type NextPage } from "next";
import React, { useCallback } from "react";
import { Particles } from "react-particles";
import { loadFull } from "tsparticles";
import { type Engine } from "tsparticles-engine";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { type IconType } from "react-icons";

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
  const particlesInit = useCallback(async (engine: Engine) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    await loadFull(engine);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-bl from-[#1f1e1e] to-[#0b0b0c]">
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

      <Particles
        className="absolute"
        init={particlesInit}
        options={{
          background: {
            opacity: 0,
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              // resize: true,
            },
            modes: {
              grab: {
                distance: 200,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            opacity: {
              value: 0.1,
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: true,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      ></Particles>
    </main>
  );
};

export default Home;
