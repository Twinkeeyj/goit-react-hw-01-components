import React from 'react';


const FriendList = ({ el }) => {
  console.log(el);
  return (
    <li className="item">
      {el.isOnline?<span className="status online"></span>: <span className="status offline"></span>}
    <img className="avatarFrend" src={el.avatar} alt="" width="48" />
  <p className="name">{el.name}</p>
  </li>
  );
};

export default FriendList;




// {el.isOnline?online:offline}