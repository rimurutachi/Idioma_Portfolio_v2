"use client";

import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const CertificateCard = ({ title, issuer, date, credentialId, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-tertiary/70 p-6 rounded-lg"
    >
      <div className="flex items-start gap-4">
        <FaCertificate className="text-2xl text-accent mt-1" />
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-accent mb-2">{issuer}</p>
          <p className="text-sm text-gray-400 mb-2">{date}</p>
          <p className="text-sm text-gray-300 mb-3">Credential ID: {credentialId}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:underline"
            >
              View Certificate
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateCard; 