import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductDetail() {
  const [details, setDetails] = useState("details");
  const { id } = useParams();
  const { posts, loading, error } = useSelector((state) => state.postsData);

  const post = posts.find((item) => item.id.toString() === id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!post) return <p>No post found with ID: {id}</p>;

  return (
    <div style={{ padding: "20px",marginTop:"60px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="back-arrow">&larr;</div>
        </Link>
        <h2>Post Number {post.id}</h2>
      </div>
      <div
        style={{ display: "flex", padding: "10px"}}
      >
        <div
          style={{
            backgroundImage: `url("https://picsum.photos/200?random=${id}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "4px",
            height: "270px",
            width: "270px",
            borderRadius: "8px",
            color: "white",
            display: "flex",
            flexDirection: "column",

            overflowY: "hidden",
            justifyContent: "flex-end",
            whiteSpace: "nowrap" /* Prevents line break */,
            overflow: "hidden" /* Hides overflow text */,
            textOverflow: "ellipsis",
            /* Shows "..." at the end */
          }}
        >
          <div style={{ display: "flex" }}>
            <h2 width="2px" style={{overflowX:"hidden"}}>{post.title}</h2>
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-sharp/24/ffffff/share.png"
              alt="share" style={{ margin:"5px"}}
            />
               <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios-filled/50/ffffff/like.png"
            alt="like"
            style={{margin:"5px"} }
          />
          </div>
        </div>
        <div
          style={{
            padding: "20px",
            gap: "15px",
            display: "flex",
            flexDirection: "column",
            width: "50%",
          }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              style={{
                padding: "8px",
                width: "100px",
                border: "none",
                backgroundColor: details === "details" ? "orangered" : "white",
                color: details === "details" ? "white" : "black",
              }}
              onClick={() => {
                setDetails("details");
              }}
            >
              Details
            </button>
            <button
              style={{
                padding: "8px",
                width: "100px",
                border: "none",
                backgroundColor: details != "details" ? "orangered" : "white",
                color: details != "details" ? "white" : "black",
              }}
              onClick={() => {
                setDetails("userinfo");
              }}
            >
              {" "}
              User Info
            </button>
          </div>
          {details === "userinfo" ? (
            <p>{`Post was posted by ${post.userId}`}</p>
          ) : (
            <p>{post.body}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
