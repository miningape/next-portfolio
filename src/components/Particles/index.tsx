import { clientOnly } from "@solidjs/start";
import { ParentProps } from "solid-js";

const ClientParticles = clientOnly(() => import("./ClientParticles"));

export function Particles(props: ParentProps<{ className?: string }>) {
  return <ClientParticles className={props.className} />;
}
