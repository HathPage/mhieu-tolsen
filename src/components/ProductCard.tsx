import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import Rating from './Rating';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group border-2 border-transparent hover:border-[#f04c39]">
        <div className="relative overflow-hidden bg-gray-100 aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <div className="p-4">
          <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#f04c39] transition-colors min-h-[3rem]">
            {product.name}
          </h3>

          <div className="mb-3">
            <Rating rating={product.rating} />
          </div>

          {product.price && (
            <p className="text-[#f04c39] font-bold text-lg mb-3">{product.price}</p>
          )}

          <button className="w-full bg-gradient-to-r from-gray-900 to-black text-[#f04c39] py-2.5 rounded-lg font-semibold hover:from-[#f04c39] hover:to-[#d93c2b] hover:text-black transition-all duration-300 border-2 border-[#f04c39] transform hover:scale-105">
            LIÊN HỆ
          </button>
        </div>
      </div>
    </Link>
  );
}
