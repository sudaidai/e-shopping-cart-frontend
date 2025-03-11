import Image from 'next/image'
import Link from 'next/link'

export interface ProductItemProps {
  product: IProduct
}

const ProductItem: React.FC<ProductItemProps> = ({product}) => {
  return (
    <Link href={`/product/${product.id}`} className="group">
      {/* `group`: Allows the use of `group-hover` to apply styles when the parent group is hovered */}
      <div className="overflow-hidden rounded-lg shadow-sm transition-shadow duration-300 group-hover:shadow-md">
        {/* `overflow-hidden`: Hides any overflow content
            `rounded-lg`: Applies large rounded corners to the div
            `shadow-sm`: Adds a small shadow for a subtle 3D effect
            `transition-shadow duration-300`: Smoothly transition the shadow effect over 300ms
            `group-hover:shadow-md`: Increases the shadow size when the group is hovered */}
        <Image
          src={`/product/${product.id}.jpg`}
          alt={product.name}
          className="w-full h-[160px] object-cover transition-transform duration-300 group-hover:scale-105"
          width={160}
          height={160}
        />
        {/* `w-full`: Makes the image take the full width of the container
            `h-auto`: Adjusts the height automatically to maintain the aspect ratio
            `object-cover`: Ensures the image covers the container, possibly cropping to fit
            `transition-transform duration-300`: Smoothly transitions any transform properties over 300ms
            `group-hover:scale-105`: Slightly scales the image up (5%) when the group is hovered */}
        <div className="p-4 bg-white">
          {/* `p-4`: Adds padding of 1rem (16px) around the content
              `bg-white`: Sets the background color to white */}
          <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
            {product.name}
          </h3>
          {/* `text-lg`: Sets the font size to large
              `font-semibold`: Makes the text slightly bolder than normal (600 weight)
              `text-gray-800`: Applies a dark gray color to the text
              `mb-1`: Adds a small margin to the bottom of the heading (0.25rem or 4px)
              `truncate`: Truncates the text with an ellipsis if it overflows the container */}
          <p className="text-sm text-gray-600">{`${product.price} NTD`}</p>
          {/* `text-sm`: Sets the font size to small
              `text-gray-600`: Applies a medium gray color to the text */}
          <p className="text-sm text-gray-400 line-clamp-3 min-h-[75px]">
            {product.description}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem
