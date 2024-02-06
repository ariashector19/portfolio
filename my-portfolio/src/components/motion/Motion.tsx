import { motion } from "framer-motion";

export const Motion = (props: any) => {
  const { children } = props;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }} // Ajusta la duración según tus preferencias
    >
      {children}
    </motion.div>
  );
};
