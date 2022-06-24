import React from 'react'
import { Link } from "gatsby"
import {
  SiLinkedin,
} from "react-icons/si"
import { IoIosAddCircleOutline, IoIosAddCircle } from "react-icons/io"


import "./layout.css"
import "./main.css"

const navbar = () => {
    return (
      <div id="nav-outer">
        <nav>
          <input type="checkbox" id="res-menu"></input>
          <label for="res-menu">
            <IoIosAddCircleOutline id="sign-one" size="24px" />
            <IoIosAddCircle id="sign-two" size="24px" />
          </label>

          <Link to="/">
            <h1 id="logo">Ressource</h1>
          </Link>

          <ul>
            <li>
              <Link to="/work">
                <a>WORK</a>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <a>ABOUT</a>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <a>CONTACT</a>
              </Link>
            </li>
            <li>
              <div id="nav-icon">
                <a href="https://www.linkedin.com/company/conjure-development/">
                  <SiLinkedin size="24px" />
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    )
}

export default navbar
