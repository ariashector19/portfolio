import React from "react";
import "./App.scss";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { ABOUT_ME, SKILLS, PROJECTS, CONTACT } from "./utils/Props";
import { Header } from "./components/header/Header";
import { AboutMe } from "./components/aboutme/AboutMe";
import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";
import { Home } from "./components/home/Home";

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
    path: "/",
    element: <Home />,
  },
];

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          {ROUTES.map((ROUTE, i) => (
            <Route key={i} path={ROUTE.path} element={ROUTE.element} />
          ))}
        </Routes>
      </>
    </Router>
  );
}

export default App;
