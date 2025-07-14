import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CardComponet from './CardComponet';


function MoreProducts() {
  const { id } = useParams(); // ✅ Fix: add ()
  const { posts, loading, error } = useSelector((state) => state.postsData);

  // Convert `id` to number for comparison
  const filteredData = posts.filter((item) => item.id !== Number(id));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px",justifyContent:"center"}}>
      {filteredData.map((item) => (
         <Link to={`/item/${item.id}`} style={{textDecoration:"none"}}><CardComponet key={item.id} item={item} /></Link>
      ))}
    </div>
  );
}

export default MoreProducts;
