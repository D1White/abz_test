import React from "react";
import "./modal.scss";

function Modal() {
  return (
    <div className='modal__bg'>
      <div className='modal'>
        <h2 className='modal__title'>Congratulations</h2>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='12px'
          height='12px'
          className='modal__close'
        >
          <path
            fill-rule='evenodd'
            fill='rgb(123, 123, 123)'
            d='M11.998,9.899 L9.899,11.998 L6.000,8.099 L2.101,11.998 L0.002,9.899 L3.901,6.000 L0.002,2.101 L2.101,0.002 L6.000,3.901 L9.899,0.002 L11.998,2.101 L8.099,6.000 L11.998,9.899 Z'
          />
        </svg>
        <div className='modal__text'>
          You have successfully passed the registration
        </div>
        <div className='modal__btn-block'>
          <button type='button' className='modal__btn'>
            Great
          </button>
        </div>
      </div>
      <div className="mobile-modal">
        <span className="mobile-modal__text">You have successfully passed the registration</span>
        <button type='button' className="mobile-modal__btn">OK</button>
      </div>
    </div>
  );
}

export default Modal;
