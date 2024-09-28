import { useEffect, useState } from "react";
import Particles from "./ui/particles";
import { ExploreNowButton } from "./ExploreNowButton";

export function ParticlesBg() {
  const [color, setColor] = useState("#ffffff");

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg  md:shadow-xl px-5 md:px-0">
      <span className="pointer-events-none whitespace-pre-wrap text-white font-bold bg-clip-text text-center md:text-8xl leading-none text-transparent text-5xl">
        React Workshop
      </span>
      <div className="pointer-events-none mt-5 whitespace-pre-wrap text-white text-2xl bg-clip-text text-center">Get ready to dive deep into the world of React! 🚀</div>
      <ExploreNowButton />
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
