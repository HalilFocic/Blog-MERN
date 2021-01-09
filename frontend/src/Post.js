import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Post component
// It will take arguemnts like author,text,content,like number etc

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const loadPost = async () => {
    const response = await fetch("/post/" + id);
    const data = await response.json();
    setPost(data);
  };
  useEffect(() => {
    loadPost();
  }, [post]);
  return (
    <>
      {post && (
        <div className="post-page-container">
          <section className="post">
            <header className="post-title">{post.title}</header>
            <div className="post-author">{post.author}</div>
            <div className="post-content">{post.content}</div>
          </section>
        </div>
      )}
    </>
  );
};

export default Post;
