import { type NextPage } from "next";
import { useCallback } from "react";
import { Particles } from "react-particles";
import { loadFull } from "tsparticles";
import { type Engine } from "tsparticles-engine";

const Home: NextPage = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    await loadFull(engine);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-bl from-[#1f1e1e] to-[#0b0b0c]">
      <Particles
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
