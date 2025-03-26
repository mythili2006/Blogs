import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import axios from 'axios';
import './IndexPage.css';

const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get('https://blog-app-88ee.onrender.com /post');
        console.log('Fetched posts:', response.data);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Failed to load posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <div className="index-container">
        <h2>Latest Blog Posts</h2>
        {loading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading posts...</p>
          </div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : posts.length === 0 ? (
          <div className="no-posts">
            <p>No posts available yet.</p>
            <p>Create your first post to get started!</p>
          </div>
        ) : (
          <div className="posts-container">
            {posts.map(post => (
              <div key={post._id} className="post-card">
                <h3>{post.title}</h3>
                <div className="post-content">
                  {post.content}
                </div>
                <div className="post-footer">
                  <span className="post-author">By: {post.author}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default IndexPage;
