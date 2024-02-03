import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./header.scss";

export const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <header className="header">
        <div className="header-text-container">
          <Link to="/" className="header-text">
            Mi Portfolio
          </Link>
        </div>
        <nav>
          <ul className="horizontal-list">
            <li className={pathname.includes("/aboutme") ? "selected" : ""}>
              <Link
                to="/aboutme"
                className={pathname.includes("/aboutme") ? "accent" : ""}
              >
                About Me
              </Link>
            </li>
            <li className={pathname.includes("/skills") ? "selected" : ""}>
              <Link
                to="/skills"
                className={pathname.includes("/skills") ? "accent" : ""}
              >
                Skills
              </Link>
            </li>
            <li className={pathname.includes("/projects") ? "selected" : ""}>
              <Link
                to="/projects"
                className={pathname.includes("/projects") ? "accent" : ""}
              >
                Projects
              </Link>
            </li>
            <li className={pathname.includes("/contact") ? "selected" : ""}>
              <Link
                to="/contact"
                className={pathname.includes("/contact") ? "accent" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </motion.header>
  );
};
