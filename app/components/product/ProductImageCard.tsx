import React from 'react';
import Image from 'next/image';

type ProductImageCardProps = {
  image: string;
};

const ProductImageCard: React.FC<ProductImageCardProps> = ({ image }) => {
  
  return (
    <div className="max-w-2xl mx-auto  bg-white">
            <Image
              src={image}
              width={640}
              height={480}
              alt="product image"
            />
    </div>
  );
};

export default ProductImageCard;
