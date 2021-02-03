import React from "react";
import "./about_me.scss";
import man_laptop from "../../assets/man-laptop-v1.svg";

function AboutMe() {
  return (
    <div className='about_me'>
      <div className='about_me__container'>
        <h1 className='about_me__title'>Let's get acquainted</h1>
        <div className='about_me__content'>
          <img src={man_laptop} alt='Man Laptop' />
          <div className='about_me__text'>
            <h3 className='about_me__text-title'>
              I am cool frontend developer
            </h3>
            <span>
              We will evaluate how clean your approach to writing CSS and
              Javascript code is. You can use any CSS and Javascript 3rd party
              libraries without any restriction. 
              <br/><br/>
              If 3rd party css/javascript
              libraries are added to the project via bower/npm/yarn you will get
              bonus points. If you use any task runner (gulp/webpack) you will
              get bonus points as well. Slice service directory page P​SD
              mockup​ into HTML5/CSS3.
            </span>
            <button type='button'>Sing up now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
