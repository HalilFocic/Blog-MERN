import React, { useState, useEffect } from "react";
import "./Home.css";

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
  });
  return (
    <>
      <div className="home-container">
        {loading ? <h1>Loading...</h1> : <h1>Posts</h1>}
      </div>
    </>
  );
};
export default Home;
