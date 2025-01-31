// import React from 'react';
// import { Link } from 'react-router-dom';
// import './HomePage.css';

// const HomePage = () => {
//   return (
//     <div className="homepage">
//       {/* Header */}
//       <header className="homepage-header">
//         <h1>Welcome to My Personal Blog!</h1>
//         <p>
//           Hi there! I’m excited to share my thoughts, experiences, and stories with you. This blog is my space to document my journey, hobbies, and the little things that inspire me in life.
//         </p>
//         <p>
//           Whether it’s about my latest project, lessons I’ve learned, or musings on everyday moments, I hope you’ll find something here that resonates with you!
//         </p>
//         <Link to="/login">
//           <button id="btn">Join the Journey!</button>
//         </Link>
//       </header>

//       {/* Featured Blog Posts Section */}
//       <section className="featured-posts">
//         <h2>Featured Posts</h2>
//         <div className="post-list">
//           <div className="post-item">
//             <h3>My Journey into Coding</h3>
//             <p>Sharing how I started my adventure in coding, the challenges I faced, and the moments that made it all worth it...</p>
//           </div>
//           <div className="post-item">
//             <h3>Top 5 Lessons I Learned This Year</h3>
//             <p>From personal growth to professional insights, here are the top lessons that shaped my year...</p>
//           </div>
//           <div className="post-item">
//             <h3>Exploring My New Hobby: Gardening</h3>
//             <p>Diving into the world of rooftop gardening and discovering how plants can teach us patience and care...</p>
//           </div>
//         </div>
//       </section>

//       {/* Call-to-Action Section */}
//       <section className="cta-section">
//         <p>Want to read more about my journey? <a href="#all-posts">Explore all my posts!</a></p>
//       </section>
//     </div>
//   );
// };

// export default HomePage;


import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="homepage-header">
        <h1>Welcome to My Blog!</h1>
        <p>
          A space where I share my thoughts, experiences, and passions.
        </p>
        <Link to="/login">
          <button id="btn">Join the Journey!</button>
        </Link>
      </header>

    </div>
  );
};

export default HomePage;
