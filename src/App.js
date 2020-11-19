import React from 'react';
import Profile from './components/profile/Profile.js';
import user from './data/user.json';

import Statistics from './components/Statistics/Statistics.js';
import dataStatistic from './data/Statistics.json';

import FriendList from "./components/FriendList/FriendList.js"
import dataFriendList from "./data/FriendList.json"

const App = () => {
  return (
    <>
      <Profile user={user} />

      <Statistics data={dataStatistic} />

      <FriendList friends={dataFriendList}/>
    </>
  );
};
export default App;
