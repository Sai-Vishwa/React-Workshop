import { useEffect, useState } from "react";
import Particles from "./ui/particles";

export function ParticlesBg() {
  const [color, setColor] = useState("#ffffff");

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg  md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap text-white font-bold bg-clip-text text-center text-8xl leading-none text-transparent ">
        React Event
      </span>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}
