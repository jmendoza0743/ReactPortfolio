import React from 'react'
import Joel from './pics/Joel.jpg'

function Profilecontent() {
    return (
        <div  className="body" id="AboutMeContent">
        <div className="row">
          <div className="col-sm">
            <img src={Joel} className="img-fluid" id="joel-pic" alt="image of Joel Mendoza" />
        </div>
          <div className="col-sm">
              <h2 id="aboutme">About Me</h2>
            <p id="about-me-p">My name is Joel Mendoza. I am currently enrolled in Northwestern's Full-Stack Web development course. Previously, I went to Oakton Community College and received an associate's degree in liberal arts. I am currently employeed at Donlen as a customer support representative. I have chosen the web development career path for a variety of reasons.  Computer programming has always been somthing that interested me. I have a fascination for computers and writing programs that make the computer perform complex actions. Prior to the Northwestern program, I took a few Python courses. 
            </p>
          </div>
          </div>
        </div>
        )
    }
export default Profilecontent;