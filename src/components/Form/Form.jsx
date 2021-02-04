import { useState, useEffect, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

import "./form.scss";

function Form() {
  const fileInput = useRef();

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [position, setPosition] = useState(null);
  const [photoName, setPhotoName] = useState(null);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    photo: false,
  });

  useEffect(() => {
    if (name) {
      if (name.length < 2 || name.length > 60) {
        setErrors({
          ...errors,
          name: true,
        });
      } else {
        setErrors({
          ...errors,
          name: false,
        });
      }
    }
  }, [name]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const pattern = /^(?:[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/gm;
    if (email) {
      if (!pattern.test(email) || email.length < 2 || email.length > 100) {
        setErrors({
          ...errors,
          email: true,
        });
      } else {
        setErrors({
          ...errors,
          email: false,
        });
      }
    }
  }, [email]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const pattern = /^[\+]{0,1}380([0-9]{9})$/gm;
    if (phone) {
      if (!pattern.test(phone)) {
        setErrors({
          ...errors,
          phone: true,
        });
      } else {
        setErrors({
          ...errors,
          phone: false,
        });
      }
    }
  }, [phone]); // eslint-disable-line react-hooks/exhaustive-deps

  const debounced = useDebouncedCallback(
    (value, type) => {
      switch (type) {
        case "name":
          setName(value);
          break;
        case "email":
          setEmail(value);
          break;
        case "phone":
          setPhone(value);
          break;
        case "position":
          setPosition(value);
          break;
        default:
          break;
      }
    },
    500,
    { maxWait: 2000 }
  );

  const photoCheck = () => {
    if (
      fileInput.current.files[0] &&
      fileInput.current.files[0].size < 5242880
    ) {
      setPhotoName(fileInput.current.files[0].name);
      console.log(fileInput.current.files[0]);
    }
  };

  const submit = () => {
    if (name && email && phone && position) {
      if (!errors.name && !errors.email && !errors.phone && !errors.photo) {
        console.log({
          name: name,
          email: email,
          phone: phone,
          position: position,
          photo: fileInput.current.files[0],
        });
      }
    } else {
      alert("⚠ Fill in all the fields!");
    }
  };

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
          <input
            type='text'
            placeholder='Your name'
            className={`form__input ${errors.name ? "error" : ""}`}
            onChange={(e) => debounced.callback(e.target.value, "name")}
          />
          {errors.name && <span className='form__text-info error'>Error</span>}

          <span className='form__text'>Email</span>
          <input
            type='text'
            placeholder='Your email'
            className={`form__input ${errors.email ? "error" : ""}`}
            onChange={(e) => debounced.callback(e.target.value, "email")}
          />
          {errors.email && <span className='form__text-info error'>Error</span>}

          <span className='form__text'>Phone number</span>
          <input
            type='text'
            placeholder='+380 XX XXX XX XX'
            className={`form__input ${errors.phone ? "error" : ""}`}
            onChange={(e) => debounced.callback(e.target.value, "phone")}
          />
          <span className={`form__text-info ${errors.phone ? "error" : ""}`}>
            {errors.phone
              ? "Error"
              : "Enter a phone number in international format"}
          </span>

          <div className='radio'>
            <span className='form__text'>Select your position</span>

            <p>
              <input
                type='radio'
                name='position'
                id='radio-1'
                value='Frontend developer'
                onChange={(e) => debounced.callback(e.target.value, "position")}
              />
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
          <label className={`form__file ${errors.photo ? "error" : ""}`}>
            <span className='form__file-text'>
              {photoName ? photoName : "Upload your photo"}
            </span>
            <span className='form__file-button'>Browse</span>
            <input
              type='file'
              accept='.jpg, .jpeg'
              name='user[image]'
              ref={fileInput}
              onChange={photoCheck}
            />
          </label>
          {errors.photo && <span className='form__text-info error'>Error</span>}
        </form>
        <button type='submit' className='form__btn' onClick={submit}>
          Sing up now
        </button>
      </div>
    </div>
  );
}

export default Form;
