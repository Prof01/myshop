import React from 'react'


type BuyNowOrAddToCartProps = {
  id: string;
};

const BuyNowOrAddToCart: React.FC<BuyNowOrAddToCartProps> = ({ id }) =>  {

  const handleBuyNow = () => {
    console.log(`Buy Now: ${id}`);
  }
  
  const handleAddToCart = () => {
    console.log(`Product Added to Cart: ${id}`);
  }
  return (
    <div className='pb-4 flex justify-between'>
        <button 
        onClick={handleBuyNow}
        className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        >
            Buy Now
        </button>
        <button 
          onClick={handleAddToCart}
        className="mt-4 bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full"
        >
            Add to Cart
        </button>
    </div>
  )
}

export default BuyNowOrAddToCart;