import React from 'react'
import "./Project.css";
import wordle from "../imgs/wordle.jpg"
import wiki from "../imgs/wiki.jpeg"
import maya from "../imgs/maya.jpg"

const Project = () => {
  return (
    <div className= "projects-content">
        <h1 className = "project">Some projects I've done</h1>
        <div className = "pitems">
          <div className = "pwrap">
            <a href = "https://github.com/kevink107/wiki-app" rel="noreferrer" arget="_blank">
              <img alt="" src={wordle} className = "proimg" id = "wordle"></img>
            </a>
            <div id = "wdesc">Wordle Bot</div>
          </div>
          <div className = "pwrap">
            <a href = "https://github.com/kevink107/wiki-app">
                <img alt="" src={wiki} className = "proimg" id = "wiki"></img>
            </a>
            <div className = "otherdesc">Rabbit Hole</div>
          </div>
          <div className = "pwrap">
            <a href = "https://drive.google.com/drive/folders/1_bwhR9eOY0mhkIgET6U82g6fMTNH8Elr?usp=sharing" rel="noreferrer" target="_blank">
                <img alt="" src={maya} className = "proimg" id = "maya"></img>
            </a>
            <div className = "otherdesc">3D Modeling Project</div>
          </div>
        </div>
    </div>
  )
}

export default Project;