"use client";

import React, { useState, useEffect } from 'react';
import { ProductServices } from '../Services/Product-Services';
import ProductCard from '../Components/ProductCard/ProductCard';
import CategoryFilter from '../Components/CategoryFilter/CategoryFilter';


interface Product {
  id: string;
  name: string;
  image: { url: string };
  price: { formatted: string };
  categories: { slug: string }[];
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await ProductServices.getProducts();
      setProducts(data);
      setFilteredProducts(data);
    };
    fetchProducts();
  }, []);

  const handleFilterChange = (category: string) => {
    setSelectedCategory(category);
    if (category) {
      setFilteredProducts(products.filter(product => product.categories.some(cat => cat.slug === category)));
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-3'>
          <CategoryFilter onFilterChange={handleFilterChange} />
        </div>
        <div className='col-md-9'>
          <ProductCard products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}

export default Products;
