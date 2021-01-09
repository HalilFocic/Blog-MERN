import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Post = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [commentText, setCommentText] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");
  const [reload, setReload] = useState(false);
  const postComment = async (e) => {
    e.preventDefault();
    let newComment = {
      text: commentText,
      author: commentAuthor ? commentAuthor : "Anonymous",
    };
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios.post("/comment/" + id, newComment, axiosConfig);
    const response = await fetch("/post/" + id);
    const data = await response.json();
    const timer = setTimeout(() => {
      console.log("This will run after 1 second!");
    }, 300);
    clearTimeout(timer);
    setCommentText("");
    setCommentAuthor("");
    window.location.reload(false);
  };
  const loadPost = async () => {
    const response = await fetch("/post/" + id);
    const data = await response.json();
    setPost(data);
    setLoading(false);
  };
  useEffect(() => {
    loadPost();
    return () => {};
  }, []);
  return (
    <>
      {!loading && (
        <div className="post-page-container">
          <section className="post">
            <header className="post-title">{post.title}</header>
            <div className="post-author">{post.author}</div>
            <div className="post-content">{post.content}</div>
            <div className="comment-section">
              <h2
                style={{
                  color: "white",
                  fontWeight: "bolder",
                  background: "rgba(41,68,119,0.5)",
                  borderTop: "1px solid black",
                  borderBottom: "1px solid black",
                }}
              >
                Comments({post.reviews.length})
              </h2>
              {post.reviews.map((comment) => {
                let { author, text } = comment;
                return (
                  <div className="comment" key={comment._id}>
                    <div className="comment-author">{author}</div>
                    <div className="comment-content">{text}</div>
                  </div>
                );
              })}

              <div className="comment-post">
                <form>
                  <input
                    type="text"
                    placeholder="Enter your comment here"
                    className="comment-text"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                  ></input>
                  <input
                    className="author-comment"
                    type="text"
                    placeholder="Your name"
                    value={commentAuthor}
                    onChange={(e) => setCommentAuthor(e.target.value)}
                  ></input>
                  <button className="comment-btn" onClick={postComment}>
                    Post
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Post;
