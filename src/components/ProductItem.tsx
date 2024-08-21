'use client'

import Image from 'next/image';
import Link from 'next/link';
import './product-item.css';

interface Product {
  id: string;
  name: string;
  price: number;
  sizes?: string[];
  colors?: string[];
}

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <Link href={{ pathname: `/product/${product.id}` }}>
      <Image
        src={`/product/${product.id}.jpg`}
        alt="Product Image"
        className="w-[270px] h-[230px] cursor-pointer transition-transform duration-150 ease-out hover:scale-105 hover:ease-in"
        width={270}
        height={230}
      />
      <div className="flex flex-col items-center relative mt-2">
        <div className="fade-in">
          <div className="text-lg font-bold my-2">{product.name}</div>
          <div className="text-center">{`Price: ${product.price} NTD`}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
