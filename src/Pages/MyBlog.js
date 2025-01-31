import { useEffect, useState } from 'react';
import axios from 'axios';
import './MyBlog.css';

// Configure axios defaults
axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

export default function MyBlog() {
    const [posts, setPosts] = useState([]);
    const [editingPost, setEditingPost] = useState(null);
    const [editForm, setEditForm] = useState({
        title: '',
        content: '',
        author: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchPosts = async () => {
        try {
            setLoading(true);
            const response = await axios.get('/post');
            setPosts(response.data);
            setError('');
        } catch (error) {
            console.error('Error fetching posts:', error.response || error);
            setError('Failed to fetch posts. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleEdit = (post) => {
        setEditingPost(post._id);
        setEditForm({
            title: post.title || '',
            content: post.content || '',
            author: post.author || ''
        });
        setError('');
    };

    const handleUpdate = async (postId) => {
        try {
            setError('');
            setLoading(true);

            // Validate fields
            const title = editForm.title?.trim();
            const content = editForm.content?.trim();
            const author = editForm.author?.trim();

            if (!title) {
                setError('Title is required');
                return;
            }
            if (!content) {
                setError('Content is required');
                return;
            }
            if (!author) {
                setError('Author is required');
                return;
            }

            // Prepare update data
            const updateData = { title, content, author };
            console.log('Updating post:', postId);
            console.log('Update data:', updateData);

            // Make the update request
            const response = await axios.put(`/post/${postId}`, updateData);
            console.log('Server response:', response.data);

            // Handle successful update
            setEditingPost(null);
            setEditForm({ title: '', content: '', author: '' });
            await fetchPosts();
        } catch (error) {
            console.error('Error updating post:', error);
            console.error('Error details:', {
                response: error.response,
                request: error.request,
                message: error.message
            });

            // Set appropriate error message
            if (error.response) {
                // Server responded with error
                setError(error.response.data.message || 'Server error. Please try again.');
            } else if (error.request) {
                // Request made but no response
                setError('No response from server. Please check your connection.');
            } else {
                // Request setup error
                setError('Failed to make request. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (postId) => {
        if (!window.confirm('Are you sure you want to delete this post?')) {
            return;
        }

        try {
            setError('');
            setLoading(true);
            await axios.delete(`/post/${postId}`);
            await fetchPosts();
        } catch (error) {
            console.error('Error deleting post:', error.response || error);
            setError('Failed to delete post. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        try {
            return new Date(dateString).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch (error) {
            console.error('Error formatting date:', error);
            return 'Invalid date';
        }
    };

    return (
        <div className="blog-container">
            {/* <h1>My Blog Posts</h1> */}
            {error && <div className="error-message">{error}</div>}
            {loading && <div className="loading">Loading...</div>}
            <div className="posts-container">
                {posts.length === 0 && !loading ? (
                    <div className="no-posts">
                        <p>No blog posts found. Create your first post!</p>
                    </div>
                ) : (
                    posts.map(post => (
                        <div key={post._id} className="post">
                            {editingPost === post._id ? (
                                <div className="edit-form">
                                    <input
                                        type="text"
                                        value={editForm.title}
                                        onChange={(e) => setEditForm({...editForm, title: e.target.value})}
                                        placeholder="Title"
                                        required
                                    />
                                    <input
                                        type="text"
                                        value={editForm.author}
                                        onChange={(e) => setEditForm({...editForm, author: e.target.value})}
                                        placeholder="Author"
                                        required
                                    />
                                    <textarea
                                        value={editForm.content}
                                        onChange={(e) => setEditForm({...editForm, content: e.target.value})}
                                        placeholder="Content"
                                        required
                                    />
                                    <div className="edit-buttons">
                                        <button 
                                            onClick={() => handleUpdate(post._id)}
                                            disabled={loading || !editForm.title?.trim() || !editForm.content?.trim() || !editForm.author?.trim()}
                                        >
                                            {loading ? 'Saving...' : 'Save'}
                                        </button>
                                        <button 
                                            onClick={() => {
                                                setEditingPost(null);
                                                setError('');
                                            }}
                                            disabled={loading}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <h2>{post.title}</h2>
                                    <p className="post-meta">
                                        By {post.author} | Created: {formatDate(post.createdAt)}
                                        {post.updatedAt && post.updatedAt !== post.createdAt && 
                                            ` | Updated: ${formatDate(post.updatedAt)}`}
                                    </p>
                                    <p className="post-content">{post.content}</p>
                                    <div className="post-actions">
                                        <button onClick={() => handleEdit(post)} disabled={loading}>Edit</button>
                                        <button onClick={() => handleDelete(post._id)} disabled={loading}>Delete</button>
                                    </div>
                                </>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
