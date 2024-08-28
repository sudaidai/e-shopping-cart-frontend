import React from 'react';
import ProductItem from '@/components/ProductItem';

const products = [
  {
    id: '1',
    name: 'Product 1',
    price: 1000
  },
  {
    id: '2',
    name: 'Product 2',
    price: 1500
  },
  {
    id: '3',
    name: 'Product 3',
    price: 2000
  },
];

const Product: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
