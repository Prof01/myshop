'use client'
import { ProductType } from "@/types";
import ProductImageCard from './ProductImageCard';
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import Loader from "../Loaders/Loader";

export default function ProductList() {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const result = await axios.get(`https://api.escuelajs.co/api/v1/products`);
                  setProducts(result.data as ProductType[]);
                setLoading(false);
              } catch (error) {
                setError('Error fetching product details. Please try again later.');
                setLoading(false);
              }
            }

        getProducts();
    }, []);
    
    if (loading) return <Loader />; // Display a loader component while loading
  if (error) return <div className='p-4 bg-white text-center text-red-500 font-semibold flex justify-center items-center h-full'>{error}</div>; // Display an error message
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Featured Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-gray-300 p-4">
                {products.map((product) => (
                    <Link href={`/app/products/${product.id}`} key={product.id} className="border rounded overflow-hidden shadow-lg bg-gray-100">
                        <ProductImageCard image={product.category.image as string} />
                        <div className="p-4 bg-white h-full">
                            <h2 className="text-lg font-semibold text-gray-900  bg-white">{product.title}</h2>
                            <div className="font-bold text-red-500 bg-white text-xl pt-2">${product.price.toFixed(2)}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
