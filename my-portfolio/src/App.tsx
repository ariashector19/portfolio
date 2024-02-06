// App.tsx
import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/header/Header";
import { AboutMe } from "./components/aboutme/AboutMe";
import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";
//import { Footer } from "./components/footer/Footer";
import { ABOUT_ME, SKILLS, PROJECTS, CONTACT } from "./utils/Props";
import "./App.scss";
import { Home } from "./components/home/Home";
import { motion, AnimatePresence } from "framer-motion";

const ROUTES = [
  {
    path: ABOUT_ME,
    element: <AboutMe />,
  },
  {
    path: SKILLS,
    element: <Skills />,
  },
  {
    path: PROJECTS,
    element: <Projects />,
  },
  {
    path: CONTACT,
    element: <Contact />,
  },
  {
    path: "*",
    element: <Home />,
  },
];

function App() {
  return (
    <Router>
      <div id="root">
        <Header />
        <AnimatePresence exitBeforeEnter={false} mode="wait">
          <Routes>
            {ROUTES.map((ROUTE, i) => (
              <Route key={i} path={ROUTE.path} element={ROUTE.element} />
            ))}
          </Routes>
        </AnimatePresence>
      </div>
      {/*<Footer />*/}
    </Router>
  );
}

export default App;
