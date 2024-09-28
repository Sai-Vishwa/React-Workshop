import { CheckIcon, ChevronRightIcon, ChevronLeft } from "lucide-react";
import { AnimatedSubscribeButton } from "@/components/ui/animated-subscribe-button";

export function NextButton() {
  return (
    <AnimatedSubscribeButton
      className="group"
      buttonColor="#f8fafc"
      buttonTextColor="#000000"
      subscribeStatus={false}
      initialText={
        <span className="group inline-flex items-center">
          <span className="md:block hidden">Next</span>{" "}
          <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      }
      changeText={
        <span className="group text-[#000000] inline-flex items-center">
          <CheckIcon className="mr-2 size-4" />
          <span className="md:block hidden">Next{" "}</span>
        </span>
      }
    />
  );
}
