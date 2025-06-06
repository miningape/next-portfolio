import { onMount, ParentProps } from "solid-js";
import { tsParticles } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

// See: https://github.com/tsparticles/solid/#readme
// https://github.com/tsparticles/solid/blob/main/apps/solid/src/App.tsx
// https://particles.js.org/
export default function ClientParticles(
  props: ParentProps<{ className?: string }>
) {
  onMount(async () => {
    tsParticles.init();
    await loadFull(tsParticles);
    await tsParticles.load({
      id: "tsparticles",
      options: {
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
              // area: 1000,
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
      },
    });

    return true;
  });

  return (
    <div id="tsparticles" class={props.className}>
      <canvas class={props.className}></canvas>
    </div>
  );
}
