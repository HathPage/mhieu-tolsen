import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import Rating from '../components/Rating';
import { ShoppingCart, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Không tìm thấy sản phẩm</h1>
          <a href="/" className="text-[#f04c39] hover:underline">
            Về trang chủ
          </a>
        </div>
      </div>
    );
  }

  const images = [product.image, product.image2, product.image3];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <div>
              <div className="mb-4 rounded-xl overflow-hidden bg-gray-100 aspect-square">
                <img
                  src={images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`rounded-lg overflow-hidden border-4 transition-all ${
                      selectedImage === index ? 'border-[#f04c39]' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full aspect-square object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h1 className="text-4xl font-black text-gray-900 mb-4">{product.name}</h1>

              <div className="flex items-center space-x-4 mb-6">
                <Rating rating={product.rating} size={20} />
                <span className="text-gray-600">({product.rating} / 5)</span>
              </div>

              {product.price && (
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-1">Giá tham khảo:</p>
                  <p className="text-4xl font-black text-[#f04c39]">{product.price}</p>
                </div>
              )}

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Mô tả sản phẩm</h3>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Thông số kỹ thuật</h3>
                <div className="space-y-3">
                  {product.specs.map((spec, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-semibold">{spec.label}:</span>
                      <span className="text-gray-900 font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-[#f04c39] to-[#d93c2b] text-black font-bold py-4 rounded-xl hover:from-[#d93c2b] hover:to-[#b92d1d] transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                  <ShoppingCart className="w-5 h-5" />
                  <span>THÊM VÀO GIỎ HÀNG</span>
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:0928052396"
                    className="bg-gray-900 text-[#f04c39] font-bold py-3 rounded-xl hover:bg-black transition-all text-center flex items-center justify-center space-x-2 border-2 border-[#f04c39]"
                  >
                    <Phone className="w-5 h-5" />
                    <span>GỌI NGAY</span>
                  </a>
                  <a
                    href="mailto:contact@mechtool.vn"
                    className="bg-gray-900 text-[#f04c39] font-bold py-3 rounded-xl hover:bg-black transition-all text-center flex items-center justify-center space-x-2 border-2 border-[#f04c39]"
                  >
                    <Mail className="w-5 h-5" />
                    <span>EMAIL</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">Sản phẩm liên quan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products
              .filter((p) => p.category === product.category && p.id !== product.id)
              .slice(0, 5)
              .map((relatedProduct) => (
                <a
                  key={relatedProduct.id}
                  href={`/product/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-3 aspect-square">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 line-clamp-2 group-hover:text-[#f04c39] transition-colors">
                    {relatedProduct.name}
                  </h3>
                  {relatedProduct.price && (
                    <p className="text-[#f04c39] font-bold mt-2">{relatedProduct.price}</p>
                  )}
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
