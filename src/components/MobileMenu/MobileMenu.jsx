import { useEffect, useRef } from "react";
import "./mobmenu.scss";
import logo from "../../assets/logo.svg";

function MobileMenu({ hideMobMenu }) {
  const mobMenuElem = useRef();


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


  return (
    <div className='mob-menu__bg'>
      <div className='mob-menu' ref={mobMenuElem}>
        <div className='mob-menu__logo'>
          <img src={logo} alt='Logo' />
        </div>
        <nav className="mob-menu__nav">
          <ul className='mob-menu__nav__list'>
            <li>About me</li>
            <li>Relationships</li>
            <li>Users</li>
            <li>Sign Up</li>
            <li>Terms and Conditions</li>
          </ul>
          <ul className='mob-menu__nav__list'>
            <li>How it works</li>
            <li>Partnership</li>
            <li>Help</li>
            <li>Leave testimonial</li>
            <li>Contact us</li>
          </ul>
          <ul className='mob-menu__nav__list'>
            <li>Articles</li>
            <li>Our news</li>
            <li>Testimonials</li>
            <li>Licenses</li>
            <li>Privacy Policy</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;
