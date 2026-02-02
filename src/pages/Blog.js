import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "blog_posts"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Dicas e artigos</h1>
      {posts.map(post => (
        <div key={post.id}>
          <Link to={`/blog/${post.id}`}><h3>{post.title}</h3></Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
