import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContest";
import { useParams } from "react-router-dom";
import Breadcrums from "../Components/Breadcums/Breadcrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Description from "../Components/descriptionbox/Description";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelatedProducts />
    </div>
  );
}

export default Product;
