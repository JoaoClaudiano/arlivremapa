// src/components/BlogPost.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const docRef = doc(db, "blog_posts", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) setPost(docSnap.data());
    };
    fetchPost();
  }, [id]);

  if (!post) return <p>Carregando...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{post.title}</h1>
      <p><i>Por {post.author}</i></p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default BlogPost;
