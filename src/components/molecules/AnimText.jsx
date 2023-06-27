import {motion} from 'framer-motion';

const AnimText = ({text, delay}) => {  

  const item = {
    visible: {
      opacity: 1,
      y: 0
    },
    hidden: {
      opacity: 0,
      y: 10
    },
  }
  
  return (
    <div className="mt-2 text-2xl font-semibold text-neutral-300">
      {
        text.split('').map((letter, index) => {
          return (
            <motion.span
              key={index}
              variants={item}
              initial="hidden"
              animate="visible"
              transition={{
                delay: delay + index * 0.01,
                duration: 1,
              }}
            >
              {letter}
            </motion.span>
          )
        }
        )
      }

    </div>
  )
}

export default AnimText