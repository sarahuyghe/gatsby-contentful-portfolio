import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <div className="footer_section">
        <div>
          <p>
            <Link to="/">Sara Huyghe</Link>
          </p>
        </div>
        <ul>
          <li>
            <a href="https://github.com/sarahuyghe">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sara-huyghe-ab1846141/">
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/sarahuyghe/">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
