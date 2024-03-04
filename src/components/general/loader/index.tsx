import React, { useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import { motion } from "framer-motion";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

interface LoaderProps {
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  useEffect(() => {
    const menuElement = document.querySelector(".loader");

    if (menuElement) {
      if (loading) {
        disableBodyScroll(menuElement);
      } else {
        enableBodyScroll(menuElement);
      }
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [loading]);

  return (
    <motion.div className="loader">
      <TailSpin
        height={45}
        width={45}
        color="#da9a23"
        ariaLabel="tail-spin-loading"
        radius={0}
        wrapperStyle={{}}
        wrapperClass=""
        visible={loading}
      />
    </motion.div>
  );
};

export default Loader;
