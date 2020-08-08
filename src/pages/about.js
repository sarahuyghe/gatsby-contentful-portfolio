import React from "react"

import selfportrait from "./me.png"

import Layout from "../components/layout"
import Head from "../components/head"

// import Image from "../components/image"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <section className="about">
        <div className="about_header">
          <h4>console.log("hello")</h4>
          <h1>
            I'm Sara, a <strong>Front End Developer</strong>
          </h1>
        </div>
        {/* <div className="about_container"> */}

        <div className="about_detail">
          <p>
            I'm Sara Huyghe, a 22-years old Digital design and development
            student at Howest. My main focus is front-end development.{" "}
          </p>
          <p>
            When I’m not working or learning about new technologies, you can
            find me watching/playing sports, listening to music or talking about
            anything in a local pub.
          </p>
        </div>
        {/* </div> */}
        {/* <div > */}
        {/* <Image src={selfportrait} width={390} height={525} mode="fit" /> */}
        {/* <div></div> */}

        <img
          src={selfportrait}
          alt="img of myself"
          className="image_container"
        />
        {/* </div> */}
      </section>
      <section className="info_skills">
        <h3>Skills</h3>
        <ul className="skills">
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
      <section className="info_contact">
        <div>
          <p>
            Currently open for interesting job offers!
            <br />
            I’d hire me, would you?
          </p>
          <a href="mailto:sara.huyghe.work@gmail.com?subject=job offer">YES!</a>
        </div>
        <div>
          <p>If you have any questions or just grab a beer and chat?</p>
          <a href="mailto:sara.huyghe.work@gmail.com">Contact me!</a>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
