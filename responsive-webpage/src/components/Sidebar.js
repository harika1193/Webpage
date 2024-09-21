import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faCalendar, faBuilding, faUser,faArrowRight, faArrowLeft , faCog } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button onClick={toggleSidebar} className="collapse-btn">
        <FontAwesomeIcon icon={isCollapsed ? faArrowRight : faArrowLeft} />
      </button>
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faTachometerAlt} />
            {!isCollapsed && " Dashboard"}
          </Link>
        </li>
        <li>
          <Link to="/recruitment">
            <FontAwesomeIcon icon={faUsers} />
            {!isCollapsed && " Recruitment"}
          </Link>
        </li>
        <li>
          <Link to="/schedule">
            <FontAwesomeIcon icon={faCalendar} />
            {!isCollapsed && " Schedule"}
          </Link>
        </li>
        <li>
          <Link to="/department">
            <FontAwesomeIcon icon={faBuilding} />
            {!isCollapsed && " Department"}
          </Link>
        </li>
        <li>
          <Link to="/employees">
            <FontAwesomeIcon icon={faUser} />
            {!isCollapsed && " Employees"}
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <FontAwesomeIcon icon={faCog} />
            {!isCollapsed && " Settings"}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
