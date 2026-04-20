import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Search } from 'lucide-react';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const searchMatch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen">
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#231f20] via-[#3a3538] to-[#5a3535] mt-20">
        <div className="absolute inset-0">
          <img
            src="https://i.ibb.co/nMCDngs9/pexels-cottonbro-7019377.jpg"
            alt="Products"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">TOÀN BỘ SẢN PHẨM</h1>
          <p className="text-xl text-gray-300">Hơn 200 sản phẩm chất lượng cao trên thị trường</p>
        </div>
      </section>

      <section className="py-12 bg-white border-b-4 border-[#f04c39]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-end">
            <div className="flex-1 w-full">
              <label className="block text-sm font-bold text-gray-700 mb-2">TÌM KIẾM</label>
              <div className="relative">
                <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#f04c39] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">DANH MỤC</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-6 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#f04c39] transition-colors font-semibold bg-white cursor-pointer"
              >
                <option value="all">Tất cả danh mục</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.slug}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-gray-600 font-semibold">
            Tìm thấy <span className="text-[#f04c39] text-lg">{filteredProducts.length}</span> sản phẩm
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="hover:no-underline"
                >
                  <ProductCard product={product} />
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-2xl font-bold text-gray-600 mb-4">Không tìm thấy sản phẩm</p>
              <p className="text-gray-500 mb-6">Hãy thử tìm kiếm hoặc chọn danh mục khác</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-[#f04c39] hover:bg-[#d93c2b] text-white font-bold px-8 py-3 rounded-lg transition-all"
              >
                ĐẶT LẠI BỘ LỌC
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
