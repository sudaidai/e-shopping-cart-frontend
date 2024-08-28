import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: number;
}

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`} className="group">
      <div className="overflow-hidden rounded-lg shadow-sm transition-shadow duration-300 group-hover:shadow-md">
        <Image
          src={`/product/${product.id}.jpg`}
          alt={product.name}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          width={270}
          height={230}
        />
        <div className="p-4 bg-white">
          <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">{product.name}</h3>
          <p className="text-sm text-gray-600">{`${product.price} NTD`}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;