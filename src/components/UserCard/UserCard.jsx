import React from 'react';
import './user_card.scss';
import photo_cover from '../../assets/photo-cover.svg'

function UserCard() {
  return (
    <div className='user_card'>
      <img src={photo_cover} alt="User avatar" className='user_card__img'/>
      <span className="user_card__name">Alexander Jayden</span>
      <span className="user_card__text position">Backend developer</span>
      <span className="user_card__text mail">email@gamil.com</span>
      <span className="user_card__text">+380 50 678 03 24</span>
    </div>
  )
}

export default UserCard
