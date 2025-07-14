import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import CardComponet from "./CardComponet";
import { Link } from "react-router-dom";

const PostsList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error, search } = useSelector((state) => state.postsData);

  // ✅ Fetch posts once
  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch, posts]);

  const filteredPosts = posts.filter((item) =>
    item.body.toLowerCase().includes(search.toLowerCase()) ||
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="posts-list">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {filteredPosts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        filteredPosts.map((item) => (
          <div className="product-wrapper">
            <Link to={`/item/${item.id}`} style={{textDecoration:"none"}}><CardComponet key={item.id} item={item} /></Link>
          </div>
        ))
      )}
    </div>
  );
};

export default PostsList;
