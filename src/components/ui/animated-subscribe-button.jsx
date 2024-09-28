"use client";;
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const AnimatedSubscribeButton = ({
  buttonColor,
  subscribeStatus,
  buttonTextColor,
  changeText,
  initialText,
  onClick,
}) => {
  const [isSubscribed, setIsSubscribed] = useState(subscribeStatus);
  return (
    (<AnimatePresence mode="wait">
      {isSubscribed ? (
        <motion.button
          className="relative flex z-50 border md:w-[200px] w-[100px] items-center justify-center overflow-hidden py-4 rounded-md bg-white p-[10px] outline outline-1 outline-black"
          onClick={() => {
            setIsSubscribed(false)
            onClick()}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <motion.span
            key="action"
            className="relative block h-full w-full font-semibold"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            style={{ color: buttonColor }}>
            {changeText}
          </motion.span>
        </motion.button>
      ) : (
        <motion.button
          className="relative flex z-50 md:w-[200px] w-[100px] cursor-pointer items-center py-4 justify-center rounded-md border p-[10px]"
          style={{ backgroundColor: buttonColor, color: buttonTextColor }}
          onClick={() => setIsSubscribed(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <motion.span
            key="reaction"
            className="relative block font-semibold"
            initial={{ x: 0 }}
            exit={{ x: 50, transition: { duration: 0.1 } }}>
            {initialText}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>)
  );
};
