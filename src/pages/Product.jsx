// Product.jsx
import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Breadcrum from '../components/Breadcrums/Breadcrum'
import  { useParams } from 'react-router-dom'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'

import RelatedProducts from '../components/RelatedProducts/RelatedProducts'
const Product = () => {
  // Your component code
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
  
      <RelatedProducts/>
    </div>
  )
}

export default Product;
