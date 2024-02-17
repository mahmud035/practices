import { useEffect, useState } from 'react';
import './App.css';
import api from './api/api.js';
import AddPost from './components/AddPost.jsx';
import EditPost from './components/EditPost.jsx';
import Posts from './components/Posts';
// import initialPosts from "./data/db.js";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null); // post I am editing
  const [error, setError] = useState(null);

  const handleAddPost = async (newPost) => {
    try {
      const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;

      const finalPost = { id, ...newPost }; // { id, title, body }
      const response = await api.post('/posts', finalPost);

      setPosts([...posts, response.data]);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeletePost = async (postId) => {
    if (confirm('Are you sure you want to delete the post?')) {
      try {
        await api.delete(`/posts/${postId}`);

        const remainingPosts = posts.filter((post) => post.id !== postId);
        setPosts(remainingPosts);
      } catch (error) {
        setError(error.message);
      }
    } else {
      console.log(`You choose not to delete the post`);
    }
  };

  const handleEditPost = async (updatedPost) => {
    try {
      await api.patch(`/posts/${updatedPost.id}`, updatedPost);

      const updatedPosts = posts.map((post) =>
        post.id === updatedPost.id ? updatedPost : post
      );

      setPosts(updatedPosts);
    } catch (error) {
      setError(error.message);
    }
  };

  //* fetch post data
  useEffect(() => {
    let ignore = false;

    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');

        if (!ignore && response && response.data) {
          setPosts(response.data);
        }
      } catch (error) {
        console.log('inside catch');
        setError(error.message);
      }
    };

    fetchPosts();
    // cleanup
    return () => {
      ignore = true;
    };
  }, []);

  console.log(error);

  return (
    <div>
      <div>
        <h1>API Request with Axios</h1>
        <hr />

        <div>
          <Posts
            posts={posts}
            handleDeletePost={handleDeletePost}
            setPost={setPost}
          />

          <hr />

          {!post ? (
            <AddPost handleAddPost={handleAddPost} />
          ) : (
            <EditPost post={post} handleEditPost={handleEditPost} />
          )}

          {error && (
            <>
              <hr />
              <div className="error">{error}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
