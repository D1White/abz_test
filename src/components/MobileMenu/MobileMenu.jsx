import { useEffect, useRef, useContext } from "react";
import "./mobmenu.scss";
import logo from "../../assets/logo.svg";
import { FormContext } from '../../utils/Context'

function MobileMenu({ hideMobMenu }) {
  const mobMenuElem = useRef();
  const formElem = useContext(FormContext);


  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    document.body.classList.add('disable-scroll');

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
      document.body.classList.remove('disable-scroll');
    };
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(mobMenuElem.current)) {
      mobMenuElem.current.classList.add('hide');
      mobMenuElem.current.parentElement.classList.add('hide');
      setTimeout(() => {
        hideMobMenu();
      }, 500);
    }
  };

  const navClick = () => {
    if (formElem.current) {
      formElem.current.scrollIntoView({block: "start", behavior: "smooth"});
      mobMenuElem.current.classList.add('hide');
      mobMenuElem.current.parentElement.classList.add('hide');
      setTimeout(() => {
        hideMobMenu();
        
      }, 500);
    }
  }

  return (
    <div className='mob-menu__bg'>
      <div className='mob-menu' ref={mobMenuElem}>
        <div className='mob-menu__logo'>
          <img src={logo} alt='Logo' />
        </div>
        <nav className="mob-menu__nav">
          <ul className='mob-menu__nav__list'>
            <li onClick={navClick}>About me</li>
            <li onClick={navClick}>Relationships</li>
            <li onClick={navClick}>Users</li>
            <li onClick={navClick}>Sign Up</li>
            <li onClick={navClick}>Terms and Conditions</li>
          </ul>
          <ul className='mob-menu__nav__list'>
            <li onClick={navClick}>How it works</li>
            <li onClick={navClick}>Partnership</li>
            <li onClick={navClick}>Help</li>
            <li onClick={navClick}>Leave testimonial</li>
            <li onClick={navClick}>Contact us</li>
          </ul>
          <ul className='mob-menu__nav__list'>
            <li onClick={navClick}>Articles</li>
            <li onClick={navClick}>Our news</li>
            <li onClick={navClick}>Testimonials</li>
            <li onClick={navClick}>Licenses</li>
            <li onClick={navClick}>Privacy Policy</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;
