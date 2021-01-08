import React, { useState, useEffect } from "react";
import "./Home.css";
import PostFeed from "./PostFeed";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const response = await fetch("/posts");
    const data = await response.json();
    setPosts(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      <div className="home-container">
        {loading ? <h3>Loading...</h3> : <PostFeed posts={posts} />}
      </div>
    </>
  );
};
export default Home;
