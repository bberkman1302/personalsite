import React from 'react'
import "./Intro.css";


const Intro = () => {
  return (
      <div className= "i-Content">
          <h1 className = "name">Hi, I'm Brendan Berkman</h1>
          <div className = "title">
            <div className = "titlewrap">
              <div className = "titleitem">Computer Science Student</div>
              <div className = "titleitem">New Yorker</div>
              <div className = "titleitem">Graphic Designer</div>
              <div className = "titleitem">Aspiring Data Scientist</div>
            </div>
          </div>
          <div className = "desc">
            I'm a sophomore at Dartmouth majoring in Computer Science and intending to
            minor in Digital Arts or Math. I have a particular interest in machine learning
            and data science, and spend time outside of class exploring those fields. 
            In my free time, I love to be outdoors, playing basketball or skiing with friends.
          </div>
      </div>

  )
}

export default Intro