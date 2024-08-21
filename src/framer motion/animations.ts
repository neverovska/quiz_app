const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.15,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const pulseVariants = {
  normal: {
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
  warning: {
    scale: 1.2,
    color: "#ff6961",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
};
const questionVariants = {
  initial: { x: 30, opacity: 0 },
  enter: { x: 0, opacity: 1 },
  exit: { x: -30, opacity: 0 },
};

const spinnerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
};

export {
  containerVariants,
  itemVariants,
  pulseVariants,
  questionVariants,
  spinnerVariants,
};
