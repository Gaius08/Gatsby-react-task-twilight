import React from 'react';
import { Link } from 'gatsby';

const SideBar = () => {
  return (
    <div
      style={{
        width: '15%', // Adjust the width as needed
        backgroundColor: '#f0f0f0', // Example background color
        height: '100vh', // Make sidebar full height
        position: 'fixed',
        top: 0,
        left: 0,
        overflowY: 'auto', // Allow scrolling if content exceeds sidebar height
        padding: '16px', // Example padding
      }}
    >
      {/* Sidebar content */}
      <nav>
        <ul style={{ listStyleType: 'none', cursor: 'pointer', marginTop: '50%', fontSize: '20px', textDecoration:'none' }}>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
         
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
