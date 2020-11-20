import React from 'react';
import Profile from './components/profile/Profile.js';
import user from './data/user.json';

import Statistics from './components/Statistics/Statistics.js';
import dataStatistic from './data/Statistics.json';

import FriendList from "./components/FriendList/FriendList.js"
import dataFriendList from "./data/FriendList.json"

import Transaction from"./components/TransactionHistory/TransactionHistory"
import dataTransaction from "./data/transactions.json"

const App = () => {
  return (
    <>
      <Profile user={user} />

      <Statistics data={dataStatistic} />

      <FriendList friends={dataFriendList}/>

      <Transaction items={dataTransaction} />
    </>
  );
};
export default App;
