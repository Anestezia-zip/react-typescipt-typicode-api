import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      {/* <ol>
        <li><Link to="/comments">Comments</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/photos">Photos</Link></li>
      </ol> */}
    </nav>
  );
}

export default NavBar;

// App:

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

{/* <Router>
  <Routes>
    <Route path="/posts" element={<Posts />} />
    <Route path="/photos" element={<Photos />} />
    <Route path="/comments" element={<Comments />} />
  </Routes>
</Router> */}
