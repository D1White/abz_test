import React from "react";
import "./users.scss";
import { UserCard } from "../index";

function Users() {
  return (
    <div className='users'>
      <div className='users__container'>
        <h1 className='users__title'>Our cheerful users</h1>
        <span className='users__text'>
          Attention! Sorting users by registration date
        </span>
        <div className='users__cards'>
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
        <div className='users__cards'>
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
        <button type='button' className='users__btn'>Show more</button>
      </div>
    </div>
  );
}

export default Users;
