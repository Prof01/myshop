import ProductDetails from '@/app/components/product/ProductDetails';
import { NextPage } from 'next';
import React from 'react';
import Navbar from '@/app/components/headers/Navbar';

type ProductDetailsPageProps = {
  params: { id: string };
};

const ProductDetailsPage: NextPage<ProductDetailsPageProps> = ({ params }) => {
  return (
    <div>
      <Navbar />
      <ProductDetails id={params.id} />
    </div>
  );
};

export default ProductDetailsPage;
