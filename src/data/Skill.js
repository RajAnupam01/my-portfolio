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
    title: "Mobile App Development",
    icon:FaMobileAlt,
    items: [
      "React Native",
      "Expo",
      "Firebase",
      "Zustand",
      "zod",
      "TanStack Query",
      "Native Wind" 
    ]
  },
  {
    title: "Web App Development",
    icon:FaServer,
    items: [
      "React.js",
      "TailWind CSS",
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