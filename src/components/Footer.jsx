import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";

import { Link } from "react-scroll";
import { PERSONAL_INFO } from "../utils/constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-6">

        {/* Top Section */}

        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}

          <div>
            <h2 className="text-2xl font-bold mb-4">
              &lt; Anu.<span className="text-blue-300">dev</span> /&gt;
            </h2>

            <p className="text-gray-400 leading-7">
              Full Stack & React Native Developer
              building scalable applications,
              clean APIs and modern user experiences.
            </p>
          </div>

          {/* Navigation */}

          <div>
            <h3 className="font-semibold mb-4">
              Navigation
            </h3>

            <ul className="space-y-3 text-gray-400">

              {[
                "home",
                "about",
                "skills",
                "projects",
                "backend",
                "journey",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    smooth
                    duration={500}
                    className="cursor-pointer hover:text-purple-400 transition"
                  >
                    {item.charAt(0).toUpperCase() +
                      item.slice(1)}
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* Services */}

          <div>
            <h3 className="font-semibold mb-4">
              Expertise
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>React Development</li>
              <li>Node.js Backend</li>
              <li>REST APIs</li>
              <li>React Native</li>
              <li>Database Design</li>
            </ul>
          </div>

          {/* Social */}

          <div>
            <h3 className="font-semibold mb-4">
              Connect
            </h3>

            <div className="flex gap-4">

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500 hover:border-purple-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500 hover:border-purple-500 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500 hover:border-purple-500 transition"
              >
                <FaTwitter />
              </a>

            </div>

            <p className="text-gray-400 mt-6">
              Available for freelance and
              full-time opportunities.
            </p>
          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © {year} {PERSONAL_INFO.name}. All rights reserved.
          </p>

          <Link
            to="home"
            smooth
            duration={600}
            className="cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-500 flex items-center justify-center transition">
              <FaArrowUp />
            </div>
          </Link>

        </div>

      </div>
    </footer>
  );
};

export default Footer;