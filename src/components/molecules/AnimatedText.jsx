import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedText = ({ text, isBig, delay, isMedium }) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 75,
        stiffness: 500,
      },
    },
  };

  if (isBig) {
    return (
      <motion.div className="flex overflow-hidden" variants={container} initial="hidden" animate="visible">
        {words.map((word, index) => (
          <motion.span variants={child} className={`mr-4     bg-gradient-to-r from-purple-600 to-violet-700 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent`} key={index}>
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  } else {
    return (
      <motion.div className="flex overflow-hidden" variants={container} initial="hidden" animate="visible">
        {words.map((word, index) => (
          <motion.span variants={child} className="mr-2 mt-2 text-2xl font-semibold text-neutral-300" key={index}>
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }
};
