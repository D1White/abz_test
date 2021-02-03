import React from 'react';
import './user_card.scss';

function UserCard() {
  return (
    <div className='user_card'>
      <img src="https://frontend-test-assignment-api.abz.agency/images/users/6019f5678a50d57.jpg" alt="User avatar" className='user_card__img'/>
      <span className="user_card__name">Alexander Jayden</span>
      <span className="user_card__text position">Backend developer</span>
      <span className="user_card__text mail">email@gamil.com</span>
      <span className="user_card__text">+380 50 678 03 24</span>
    </div>
  )
}

export default UserCard
