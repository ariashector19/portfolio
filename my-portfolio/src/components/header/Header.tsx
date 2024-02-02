import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./header.scss";

export const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <header>
        <div className="header-text">Mi Potfolio</div>
        <nav>
          <ul className="horizontal-list">
            <li className={pathname.includes("/aboutme") ? "selected" : ""}>
              <Link to="/aboutme" className="accent">
                About Me
              </Link>
            </li>
            <li className={pathname.includes("/skills") ? "selected" : ""}>
              <Link to="/skills" className="accent">
                Skills
              </Link>
            </li>
            <li className={pathname.includes("/projects") ? "selected" : ""}>
              <Link to="/projects" className="accent">
                Projects
              </Link>
            </li>
            <li className={pathname.includes("/contact") ? "selected" : ""}>
              <Link to="/contact" className="accent">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </motion.header>
  );
};
