import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <section class="about">
        <div>
          <h4>console.log("hello")</h4>
          <h1>
            I'm Sara, a junior <strong>Front End Developer</strong>
          </h1>
          <div class="about_detail">
            <p>
              I'm Sara Huyghe, a 21-years old Digital design and development
              student at Howest. My main focus is front-end development.{" "}
            </p>
            <p>
              When I’m not working or learning about new technologies, you can
              find me watching/playing sports, listening to music or talking
              about anything in a local pub.
            </p>
          </div>
        </div>
        <div class="image_container">
          <img src="./assets/img/me.png" alt="" width="302" />
        </div>
      </section>
      <section class="info_skills">
        <h3>Skills</h3>
        <ul class="skills">
          <li>HTML5 & CSS</li>
          <li>React</li>
          <li>Javascript ES6</li>
          <li>Styled components</li>
          <li>SASS</li>
          <li>PHP & SQL </li>
          <li>Bootstrap</li>
          <li>Git</li>
        </ul>
      </section>
      <section class="info_contact">
        <div>
          <p>
            Currently open for interesting job offers!
            <br />
            I’d hire me, would you?
          </p>
          <a href="mailto:sara.huyghe@student.howest.be?subject=internship">
            YES!
          </a>
        </div>
        <div>
          <p>If you have any questions or just grab a beer and chat?</p>
          <a href="mailto:sara.huyghe@student.howest.be">Contact me!</a>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
