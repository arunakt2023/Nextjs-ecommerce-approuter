import Link from 'next/link';
import React from 'react';

interface Product {
  id: string;
  name: string;
  image: { url: string };
  price: { formatted: string };
}

interface ProductCardProps {
  products: Product[];
}

const ProductCard = ({ products }: ProductCardProps) => {
  return (
    <div className='d-flex flex-row flex-wrap m-3 gap-3'>
      {products?.map((p) => (
        <Link key={p.id} href={'/Products/' + p.id} style={{ textDecoration: 'none' }}>
          <div className="card text-center pb-4" style={{ width: 240 }}>
            <img src={p.image.url} className="card-img-top mt-2" alt="card image" height={200} />
            <div className="card-body">
              <h5 className="card-title fw-bold lead">{p.name}</h5>
              <p className="card-text fw-bold">₹{p.price.formatted}</p>
              <button className='btn btn-success'>BUY NOW</button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductCard;
