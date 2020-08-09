import React from "react"
import { Link } from "gatsby"
import github from "./github_icon.svg"
import instagram from "./instagram_icon.svg"
import linkedin from "./linkedin_icon.svg"

const Footer = () => {
  return (
    <footer>
      <div className="footer_section">
        <div>
          <p>
            <Link to="/">Sara Huyghe</Link>
          </p>
        </div>
        <div className="socials">
          <a href="https://github.com/sarahuyghe">
            <img src={github} alt="github icon" />
          </a>
          <a href="https://www.linkedin.com/in/sara-huyghe-ab1846141/">
            <img src={linkedin} alt="linkedin icon" />
          </a>

          <a href="https://www.instagram.com/sarahuyghe/">
            <img src={instagram} alt="instagram icon" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
