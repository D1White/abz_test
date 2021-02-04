import { useState, useEffect, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";
import axios from "axios";

import "./form.scss";

function index() {
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
    console.log(position);
  }, [position]);

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
    <form>
      <input
        type='text'
        placeholder='Your name'
        className={`form__input ${errors.name ? 'error' : ''}`}
        onChange={(e) => {debounced.callback(e.target.value, "name")}}
      />
      {errors.name && <span className='form__text-info error'>Error</span>}

      <input
        type='text'
        placeholder='Your email'
        className={`form__input ${errors.email ? "error" : ""}`}
        onChange={(e) => debounced.callback(e.target.value, "email")}
      />
      {errors.email && <span className='form__text-info error'>Error</span>}

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
    </form>
  );
}

export default index;
