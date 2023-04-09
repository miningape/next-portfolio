import { useCallback } from "react";
import { Particles as ParticlesComponent } from "react-particles";
import { loadFull } from "tsparticles";
import { type Engine } from "tsparticles-engine";

export const Particles: React.FC<{ className: string }> = ({ className }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    await loadFull(engine);
  }, []);

  return (
    <ParticlesComponent
      className={className}
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
          },
          modes: {
            grab: {
              distance: 160,
              links: {
                opacity: 1,
              },
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
            speed: 1.8,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
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
    />
  );
};
