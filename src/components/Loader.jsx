import { motion } from "framer-motion";

const loaderVariants = {
  animate: {
    y: [0, -30, 0],
    opacity: [1, 0.5, 1],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 0.8,
        ease: "easeInOut"
      },
      opacity: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  }
};

const Loader = () => (
  <div style={{
    minHeight: "100vh",
    background: "#222",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}>
    <motion.div
      variants={loaderVariants}
      animate="animate"
      style={{
        width: 60,
        height: 60,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #ffeb3b 40%, #ff4081 100%)",
        boxShadow: "0 0 30px #ffeb3b88",
      }}
    />
  </div>
);

export default Loader;