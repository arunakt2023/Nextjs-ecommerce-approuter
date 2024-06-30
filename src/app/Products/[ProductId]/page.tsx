"use client";

import { useEffect, useState } from 'react';
import AddToCart from '@/app/Components/addToCart/AddToCart';
import { ProductServices } from '@/app/Services/Product-Services';
import Link from 'next/link';


const ProductDetail = ({ params }: { params: { ProductId: string } }) => {
  const [product, setProduct] = useState<any>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const productDet = await ProductServices.getProductById(params.ProductId);
      setProduct(productDet);
    };
    fetchProduct();
  }, [params.ProductId]);

  const handleAddToCartSuccess = () => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000); 
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
    
      {showSuccessMessage && (
        <div className="alert alert-success position-fixed top-0 end-0 m-3">
          Item successfully added!
        </div>
      )}
      <div className='col-md-6 mt-3'>
        <img src={product.image.url} alt={product.name} height={400} width={300} />
      </div>
      <div className='col-md-6 mt-4 p-4 mb-3'>
        <h1 className='display-5'>{product.name}</h1>
        <h4 className='text-uppercase text-info'>{product.categories[0].slug}</h4>
        <h3 className='display-6 fw=bolder my-5'>${product.price.raw}</h3>
        <p className='lead'>{product.description}</p>
        <AddToCart prodId={product.id} onAddSuccess={handleAddToCartSuccess} />
        </div>
    </>
  );
};

export default ProductDetail;