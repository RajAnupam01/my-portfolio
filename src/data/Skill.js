import { 
  FaCode, 
  FaMobileAlt, 
  FaServer, 
  FaDatabase, 
  FaCloudUploadAlt, 
  FaTools 
} from "react-icons/fa";

export const skills = [
  {
    title: "Languages",
    icon:FaCode,
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Go (Golang)",
      "Python",
      "Java",
      "C"

    ]
  },
  {
    title: "Mobile Development",
    icon:FaMobileAlt,
    items: [
      "React Native",
      "Expo",
      "Firebase",
      "Zustand",
      "TanStack Query",
      "Native Wind" 
    ]
  },
  {
    title: "Backend Development",
    icon:FaServer,
    items: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT (Auth)",
      "Redis",
      "Docker",
      "Socket.IO"
    ]
  },
  {
    title: "Databases & ORMs",
    icon:FaDatabase,
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Prisma ORM",
      "Drizzle ORM",
      "Mongoose ODM"
    ]
  },
  {
    title: "Cloud,Deployment and Tools",
    icon:FaCloudUploadAlt, 
    items: [
      "Vercel",
      "Railway",
      "Render",
      "Cloudinary",
      "Postman",
      "Git & Github"
    ]
  },
];