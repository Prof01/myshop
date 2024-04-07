'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductType } from '@/types';
import ProductImageCard from './ProductImageCard';
import BuyNowOrAddToCart from './BuyNowOrAddToCart';
import Loader from '../Loaders/Loader';

type ProductDetailsProps = {
  id: string; 
};

// const fallbackProduct = {
//     "id": 4,
//     "title": "Handmade Fresh Table",
//     "price": 687,
//     "description": "Andy shoes are designed to keeping in...",
//     "category": {
//       "id": 5,
//       "name": "Others",
//       "image": "https://i.imgur.com/QkIa5tT.jpeg"
//     },
//     "images": [
//       "https://i.imgur.com/QkIa5tT.jpeg",
//       "https://i.imgur.com/Qphac99.jpeg",
//       "https://i.imgur.com/Qphac99.jpeg"
//     ]
//   }

const ProductDetails: React.FC<ProductDetailsProps> = ({ id }) => {
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProduct = async () => {
        if (!id) return; // Check if 'id' is available in the query
  
        try {
          const result = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
            setProduct(result.data as ProductType);
          setLoading(false);
        } catch (error) {
            // setProduct(fallbackProduct as ProductType);
          setError('Error fetching product details. Please try again later.');
          setLoading(false);
        }
    }

    getProduct();
  }, [id]);

  if (loading) return <Loader />; // Display a loader component while loading
  if (error) return <div className='p-4 bg-white text-center text-red-500 font-semibold flex justify-center items-center h-full'>{error}</div>; // Display an error message

  return (
    <div className="bg-white mx-auto my-12 p-4 flex justify-center flex-col items-center h-full">
      {product ? (
        <div className='flex flex-wrap justify-center'>
          <div className='max-w-2xl sm:max-w-xs md:max-w-sm xl:max-w-xl py-8 px-4'>
            <ProductImageCard image={product.category.image as string} />
          </div>
          <div className='max-w-2xl sm:max-w-xs md:max-w-sm lg:max-w-xl mx-4 py-8'>
            <h1 className="text-xl font-bold mb-4 p-2 bg-white">{product.title}</h1>
            <div className="flex justify-between mb-4 px-4">
                <span className="text-red-500 font-semibold text-2xl">${product.price.toFixed(2)}</span>
                <span className="text-gray-500 px-4">{product.category.name}</span>
            </div>
            <BuyNowOrAddToCart 
            id={id as string}
            />
            <div className='bg-white p-4'>
                <h1 className='text-center py-4 bg-white font-semibold'>Product Description</h1>
                <p className="text-gray-900 bg-white">{product.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className='text-center text-red-500 font-semibold bg-white'>No product found</div>
      )}
    </div>
  );
};

export default ProductDetails;
