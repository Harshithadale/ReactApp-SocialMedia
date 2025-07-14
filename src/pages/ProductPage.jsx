import React from "react";

import MoreProducts from "../components/moreProducts";
import ProductDetail from "../components/ProductDetail";

function ProductPage() {
  return(
    <div className="product-page">
      <ProductDetail/>
      <h2>More posts</h2>
       <MoreProducts/>
    </div>
  );
}

export default ProductPage;
