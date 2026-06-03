import { motion } from "framer-motion";

const SectionTitle = ({
  badge,
  title,
  description,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
      className="mb-12"
    >
      {badge && (
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm">
          {badge}
        </span>
      )}

      <h2 className="text-4xl font-bold mt-4">
        {title}
      </h2>

      {description && (
        <p className="text-gray-400 mt-4 max-w-3xl leading-7">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;