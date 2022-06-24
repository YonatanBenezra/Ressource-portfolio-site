import React from 'react'
import {
  SiLinkedin,
} from "react-icons/si"

import "./layout.css"
import "./main.css"

const StyledFooter = () => {
    return (
      <div className="styled-footer">
        <footer>
          <div id="footer-icon">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/yonatanbenezra/"
            >
              <SiLinkedin size="20px" />
            </a>
          </div>
          <p id="footer-footer">
            &copy; {new Date().getFullYear()} Ressource
            <br /> Tel aviv, Israel
          </p>
        </footer>
      </div>
    )
}

export default StyledFooter
