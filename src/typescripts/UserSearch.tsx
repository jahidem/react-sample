import { useState } from 'react';
import React from 'react';
const users = [
  { name: 'Emon', age: 34 },
  { name: 'Jahid', age: 32 },
];

const UserSearch: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((ele) => ele.name == searchText);
    setUser(foundUser);
    setSearchText('');
  };

  return (
    <div>
      <h3>Find User</h3>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={onClick}>Seach User</button>
      {user && (
        <>
          <h4>Name: {user.name}</h4>
          <h4>age: {user.age}</h4>
        </>
      )}
    </div>
  );
};

export default UserSearch;
