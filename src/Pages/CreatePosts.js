import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CreatePost.css';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:4000/createpost', { 
                title, 
                content,
                author
            });
            console.log("Post created:", response.data);
            alert('Post created successfully!');
            navigate('/myblog');   
        } catch (error) {
            console.error('Error creating post:', error);
            setError(error.response?.data?.message || 'Failed to create post');
        }
    };

    return (
        <div id="create-post-container">
            <h2 id="create-post-title">Create Your Post</h2>
            {/* Error Message */}
            {error && <div className="error-message">{error}</div>}

            {/* Form */}
            <form id="create-post-form" onSubmit={handleSubmit}>
                <input 
                    id="post-title" 
                    type="text" 
                    placeholder="Title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required 
                />
                
                <input 
                    id="post-author" 
                    type="text" 
                    placeholder="Author Name" 
                    value={author} 
                    onChange={(e) => setAuthor(e.target.value)} 
                    required 
                />

                <textarea 
                    id="post-content" 
                    placeholder="Write your post content here..." 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                    required 
                />

                <button type="submit" id="submit-post">Create Post</button>
            </form>
        </div>
    );
};

export default CreatePost;
