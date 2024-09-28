import { CheckIcon, ChevronRightIcon, ChevronLeft } from "lucide-react";
import { AnimatedSubscribeButton } from "@/components/ui/animated-subscribe-button";


export function PreviousButton() {
  return (
    <AnimatedSubscribeButton
      className="group"
      buttonColor="#f8fafc"
      buttonTextColor="#000000"
      subscribeStatus={false}
      initialText={
        <span className="group inline-flex items-center">
          <ChevronLeft className="mr-1 size-4 transition-transform duration-300 group-hover:-translate-x-1" />
          {" "}Previous
        </span>
      }
      changeText={
        <span className="group inline-flex items-center">
          <CheckIcon className="mr-2 size-4" />
          {" "}
          Previous 
        </span>
      }
    />
  );
}
