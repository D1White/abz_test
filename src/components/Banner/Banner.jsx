import React from "react";

import { FormContext } from '../../utils/Context'
import "./banner.scss";

function Banner() {
  const formElem = React.useContext(FormContext);

  const btnClick = () => {
    if (formElem.current) {
      formElem.current.scrollIntoView({block: "start", behavior: "smooth"});
    }
  }

  return (
    <div className='banner'>
      <div className='banner__container'>
        <div className='banner__content'>
          <h1 className='banner__title'>
            Test assignment for Frontend Developer position
          </h1>
          <span className='banner__text'>
            We kindly remind you that your test assignment should be submitted
            as a link to github/bitbucket repository. <br/> Please be patient, we
            consider and respond to every application that meets minimum
            requirements. We look forward to your submission. Good luck! The
            photo has to scale in the banner area on the different screens
          </span>
          <button type='button' className='banner__btn' onClick={btnClick} >Sing up now</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
