import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import PostList from "./PostList";
import "./PostsPage.css";
const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const response = await fetch("/posts");
    const newPosts = await response.json();
    setPosts(newPosts);
  };
  useEffect(() => {
    fetchPosts();
  }, [posts]);
  return (
    <>
      <NavBar />
      <div className="post-list">
        <PostList posts={posts} />
      </div>
    </>
  );
};
export default PostsPage;
