import {motion} from 'framer-motion';

const AnimText = ({text, delay}) => {
  
  const container = {
    hidden: {
      opacity: 0,
      // y: 20
    },
    visible: {
      opacity: 1,
      // y: 0,
      transition: {
        delay: 1,
        // staggerChildren: 0.05,
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
        type: 'linear',
        damping: 500,
        stiffness: 5,
      },
    },
  };
  
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text}
      {/* <motion.span
        className="text-neutral-300"
        variants={child}
      >
        {text}
      </motion.span>  */}
    </motion.div>
  )
}

export default AnimText