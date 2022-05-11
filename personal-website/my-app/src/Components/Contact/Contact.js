import React from 'react'
import "./Contact.css"
import Resume from "../Resume_Brendan_Berkman.pdf"

const Contact = () => {
  return (
    <div className= "contact-content">
    <h1 className = "contact">Contact Me</h1>
      <div className = "citems">
        <div className = "cwrap">
          <a href = "https://github.com/bberkman1302" target="_blank">
            <button className = "button">Github</button>
          </a>
        </div>
        <div className = "cwrap">
          <a href = "https://www.linkedin.com/in/brendan-berkman-495119206/" target="_blank">
            <button className = "button">LinkedIn</button>
          </a>
        </div>
        <div className = "cwrap">
          <a href = {Resume} download="BrendanBerkmanResume" target="_blank">
            <button className = "button">Resume</button>
          </a>
        </div>
      </div>
      <div id = "Email">Email: brendanberkman@gmail.com</div>
    </div>
  )
}

export default Contact