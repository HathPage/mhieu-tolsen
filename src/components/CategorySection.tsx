import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Category, Product } from '../data/products';
import ProductCard from './ProductCard';

interface CategorySectionProps {
  category: Category;
  products: Product[];
  reverse?: boolean;
}

export default function CategorySection({ category, products, reverse = false }: CategorySectionProps) {
  return (
<div className="py-16 relative">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`lg:col-span-4 ${reverse ? 'lg:col-start-9' : ''}`}>
            <Link to={`/category/${category.slug}`}>
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f04c39] via-[#d93c2b] to-black transform -skew-y-2 group-hover:skew-y-2 transition-transform duration-500" />

                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="transform group-hover:translate-y-0 transition-transform">
                      <h2 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight drop-shadow-lg">
                        {category.name}
                      </h2>
                      <p className="text-[#ff6b56] text-lg font-semibold mb-4 tracking-wide">
                        {category.description}
                      </p>
                      <div className="flex items-center text-[#f04c39] font-bold group-hover:text-white transition-colors">
                        <span className="mr-2">XEM TẤT CẢ</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-[#f04c39] transform rotate-45 opacity-20" />
              </div>
            </Link>
          </div>

          <div className={`lg:col-span-8 ${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-64 h-64 bg-[#f04c39] rounded-full blur-3xl opacity-10 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black rounded-full blur-3xl opacity-10 -z-10" />
    </div>
  );
}
