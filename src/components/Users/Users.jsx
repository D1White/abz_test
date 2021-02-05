import { useEffect, useState } from "react";
import axios from "axios";

import "./users.scss";
import { UserCard } from "../index";

function Users() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
      )
      .then((data) => {
        let usersArr = data.data.users;
        // console.log(usersArr);
        // console.log(usersArr.slice(0, 3), usersArr.slice(3, 6));
        setUsers([...users, usersArr.slice(0, 3), usersArr.slice(3, 6)]);
        // setUsers([ ...users, data.data.users]);
      });
  }, [page]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    console.log(users);
  }, [users]);

  const showMore = () => {
    setPage(page + 2);
  }

  return (
    <div className='users'>
      <div className='users__container'>
        <h1 className='users__title'>Our cheerful users</h1>
        <span className='users__text'>
          Attention! Sorting users by registration date
        </span>

        {users.length &&
          users.map((cards, index) => (
            <div className='users__cards' key={`user-card_${index}`}>
              { cards.map(obj => (
                <UserCard
                  photo={obj.photo}
                  name={obj.name}
                  email={obj.email}
                  phone={obj.phone}
                  position={obj.position}
                  key={obj.id}
                />
              ))} 
            </div>
          ))}
        <button type='button' className='users__btn' onClick={showMore} >
          Show more
        </button>
      </div>
    </div>
  );
}

export default Users;
