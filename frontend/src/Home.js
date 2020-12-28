import React, { useEffect, useState } from "react";
import Post from "./Post";
const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/posts");
    const newPosts = await response.json();
    setPosts(newPosts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      {posts.map((post) => {
        <Post key={post._id} {...post} />;
      })}
    </>
  );
};
export default Home;
