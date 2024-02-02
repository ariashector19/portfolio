import { Link } from "react-router-dom";
import { ABOUT_ME, CONTACT, PROJECTS, SKILLS } from "../../utils/Props";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={ABOUT_ME}>About Me</Link>
          </li>
          <li>
            <Link to={SKILLS}>Skills</Link>
          </li>
          <li>
            <Link to={PROJECTS}>Projects</Link>
          </li>
          <li>
            <Link to={CONTACT}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
