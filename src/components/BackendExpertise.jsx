import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaCloudUploadAlt,
  FaDatabase,
} from "react-icons/fa";

import { TbApi } from "react-icons/tb";

const backendServices = [
  {
    id: 1,
    title: "Authentication System",
    description:
      "JWT access & refresh tokens, bcrypt password hashing, role-based authorization and secure authentication flows.",
    icon: <FaShieldAlt />,
  },

  {
    id: 2,
    title: "File Upload Service",
    description:
      "Secure file uploads using Multer and Cloudinary with optimized delivery and storage management.",
    icon: <FaCloudUploadAlt />,
  },

  {
    id: 3,
    title: "Database Design",
    description:
      "Normalized PostgreSQL schemas with Prisma ORM and optimized database relationships.",
    icon: <FaDatabase />,
  },

  {
    id: 4,
    title: "REST API Design",
    description:
      "Clean, scalable and well-documented RESTful APIs following industry best practices.",
    icon: <TbApi />,
  },
];

const BackendExpertise = () => {
  return (
    <section
      id="backend"
      className="py-24"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}

        <div className="mb-10">
          <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm">
            ⚙️ Backend Expertise
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Backend Expertise
          </h2>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {backendServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              className="glass border border-white/10 rounded-2xl p-6 hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}

              <div className="mb-5">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-3xl text-purple-400">
                  {service.icon}
                </div>
              </div>

              {/* Title */}

              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              {/* Description */}

              <p className="text-gray-400 leading-7 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackendExpertise;