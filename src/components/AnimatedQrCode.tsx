'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedQrCode() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src="/assets/images/qr-code.svg"
        alt="QR Code"
        width={170}
        height={120}
      />
    </motion.div>
  );
}