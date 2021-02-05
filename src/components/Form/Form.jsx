import { useState, useEffect, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";
import axios from "axios";

import "./form.scss";

function Form({ visibleModal }) {
  const fileInput = useRef();

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [position, setPosition] = useState(null);
  const [photoName, setPhotoName] = useState(null);
  const [positionsArr, setPositionsArr] = useState(null);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    photo: false,
  });

  useEffect(() => {
    axios
      .get("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
      .then((obj) => {
        setPositionsArr(obj.data.positions);
      });
  }, []);

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
    const pattern = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm;
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
          setPosition(parseInt(value));
          break;
        default:
          break;
      }
    },
    500,
    { maxWait: 2000 }
  );

  const photoCheck = () => {
    if (fileInput.current.files[0] && fileInput.current.files[0].size < 5242880) {
      setPhotoName(fileInput.current.files[0].name);
      console.log(fileInput.current.files[0]);
    }
  };

  const submit = () => {
    if (name && email && phone && position && fileInput.current.files[0]) {
      if (!errors.name && !errors.email && !errors.phone && !errors.photo) {

        axios.get("https://frontend-test-assignment-api.abz.agency/api/v1/token").then((tokenData) => {
            const token = tokenData.data.token;

            let formData = new FormData();
            formData.append('position_id', position);
            formData.append('name', name);
            formData.append('email', email);
            formData.append('phone', phone);
            formData.append('photo', fileInput.current.files[0]);

            const config = {     
              headers: {
                'content-type': 'multipart/form-data',
                Token: token
              }
            }

            axios.post("https://frontend-test-assignment-api.abz.agency/api/v1/users", formData, config)
              .then((res) => {
                visibleModal();
              })
              .catch((err) => {
                alert('Something went wrong please try again later')
              });
          });
      }
    } else {
      // alert("⚠ Fill in all the fields!");
      visibleModal();
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

            {positionsArr &&
              positionsArr.map((obj) => (
                <p key={`${obj.name}_${obj.id}`}>
                  <input
                    type='radio'
                    name='position'
                    id={`radio-${obj.id}`}
                    value={obj.id}
                    onChange={(e) =>
                      debounced.callback(e.target.value, "position")
                    }
                  />
                  <label htmlFor={`radio-${obj.id}`}>{obj.name}</label>
                </p>
              ))}
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
