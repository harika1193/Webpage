import React from 'react';
import './Header.css';

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="header">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="user-profile">
        <img src="/user-avatar.png" alt="Profile" />
        <span>User</span>
      </div>
    </div>
  );
};

export default Header;
