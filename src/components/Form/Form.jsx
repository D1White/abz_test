import React from "react";
import "./form.scss";

function Form() {
  return (
    <div className='form'>
      <div className='form__container'>
        <h1 className='form__title'>Register to get a work</h1>
        <span className='form__subtitle'>
          Attention! After successful registration and alert, update the
          <br />
          list of users in the block from the top
        </span>
        <form>
          <span className='form__text'>Name</span>
          <input type='text' placeholder='Your name' className='form__input' />
          <span className='form__text-info error'>Error</span>

          <span className='form__text'>Email</span>
          <input type='text' placeholder='Your email' className='form__input' />
          <span className='form__text-info error'>Error</span>

          <span className='form__text'>Phone number</span>
          <input
            type='text'
            placeholder='+380 XX XXX XX XX'
            className='form__input'
          />
          <span className='form__text-info'>
            Enter a phone number in international format
          </span>

          <div className='radio'>
            <span className='form__text'>Select your position</span>

            <p>
              <input type='radio' name='position' id='radio-1' />
              <label htmlFor='radio-1'>Frontend developer</label>
            </p>
            <p>
              <input type='radio' name='position' id='radio-2' />
              <label htmlFor='radio-2'>Frontend developer</label>
            </p>
            <p>
              <input type='radio' name='position' id='radio-3' />
              <label htmlFor='radio-3'>Frontend developer</label>
            </p>
            <p>
              <input type='radio' name='position' id='radio-4' />
              <label htmlFor='radio-4'>Frontend developer</label>
            </p>
          </div>
          <span className='form__text'>Photo</span>
          <label className='form__file'>
            <span className='form__file-text'>Upload your photo</span>
            <span className='form__file-button'>Browse</span>
            <input type='file' name='user[image]' />
          </label>
          <span className='form__text-info error'>Error</span>
        </form>
        <button type='submit' className='form__btn'>
          Sing up now
        </button>
      </div>
    </div>
  );
}

export default Form;
