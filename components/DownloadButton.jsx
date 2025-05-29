"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

const DownloadButton = ({ fileUrl, fileName, buttonText }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleDownload}
      className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
    >
      <Download size={20} />
      {buttonText}
    </motion.button>
  );
};

export default DownloadButton; 