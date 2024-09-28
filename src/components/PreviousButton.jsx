import { CheckIcon, ChevronRightIcon, ChevronLeft } from "lucide-react";
import { AnimatedSubscribeButton } from "@/components/ui/animated-subscribe-button";
import { useEffect } from "react";


export function PreviousButton({direction}) {
  return (
    <AnimatedSubscribeButton
      className="group"
      direction={direction}
      buttonColor="#f8fafc"
      buttonTextColor="#000000"
      subscribeStatus={false}
      initialText={
        <span className="group inline-flex items-center" >
          <ChevronLeft className="mr-1 size-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="md:block hidden">{" "}Previous</span>
        </span>
      }
      changeText={
        <span className="group inline-flex text-[#000000] items-center">
          <CheckIcon className="mr-2 size-4" />
          {" "}
          <span className="md:block hidden">Previous</span>
        </span>
      }
    />
  );
}
