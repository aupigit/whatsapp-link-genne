import { motion } from "framer-motion";
import { IconButton, Tooltip } from "@chakra-ui/react";

const AppButton = ({ motionKey, tooltip, ...props }) => {
  return (
 
    <motion.div
      key={motionKey}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Tooltip label={tooltip}>
        <IconButton {...props} />
      </Tooltip>
    </motion.div>
  );
};

export default AppButton;
