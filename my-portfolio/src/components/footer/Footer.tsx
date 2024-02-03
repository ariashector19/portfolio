// Footer.tsx
import React from "react";
import "./footer.scss";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Mi Portfolio. Algunos derechos reservados.</p>
        <p>
          Licencia:{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY-SA 4.0
          </a>
        </p>
      </div>
    </footer>
  );
};
