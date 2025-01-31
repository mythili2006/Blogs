import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './BlogPost.css';

const BlogPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:4000/post/${id}`);
                setPost(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching post:', err);
                setError('Failed to load the blog post');
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) {
        return (
            <div className="blog-post-container loading">
                <div className="loader">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="blog-post-container error">
                <h2>Error</h2>
                <p>{error}</p>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="blog-post-container not-found">
                <h2>Post Not Found</h2>
                <p>The blog post you're looking for doesn't exist.</p>
            </div>
        );
    }

    return (
        <div className="blog-post-container">
            <article className="blog-post-content">
                <h1>{post.title}</h1>
                <div className="post-metadata">
                    <span className="author">By: {post.author}</span>
                </div>
                <div className="post-body">
                    {post.content}
                </div>
            </article>
        </div>
    );
};

export default BlogPost;
