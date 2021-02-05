import { useEffect, useState, useRef } from "react";
import { Tooltip } from "react-tippy";

import "./user_card.scss";
import "react-tippy/dist/tippy.css";
import photo_cover from "../../assets/photo-cover.svg";

function UserCard({ photo, name, email, phone, position }) {
  const cardElem = useRef();
  const emailElem = useRef();

  const [overflow, setOverflow] = useState(false);

  useEffect(() => {
    if (emailElem.current.offsetWidth > 216) {
      setOverflow(true);
    }
  }, []);

  return (
    <div className='user_card' ref={cardElem}>
      <img
        src={photo ? photo : photo_cover}
        alt='User avatar'
        className='user_card__img'
      />
      <span className='user_card__name'>{name}</span>
      <span className='user_card__text position'>{position}</span>
      {overflow ? (
        <Tooltip
          title={email}
          position='bottom'
          trigger='mouseenter'
          className='overflow'
        >
          <span className={`user_card__text overflow`} ref={emailElem}>
            {email}
          </span>
        </Tooltip>
      ) : (
        <span className={`user_card__text`} ref={emailElem}>
          {email}
        </span>
      )}
      <span className='user_card__text'>{phone}</span>
    </div>
  );
}

export default UserCard;
