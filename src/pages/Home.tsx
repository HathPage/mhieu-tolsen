import { cate, products } from '../data/products';
import CategorySection from '../components/CategorySection';
import { Wrench, Shield, Truck, Headphones as HeadphonesIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[665px] md:h-[665px] flex items-start justify-center pt-20 md:pt-28 overflow-hidden bg-gradient-to-br from-[#231f20] via-[#3a3538] to-[#5a3535]">
        <div className="absolute inset-0">
          <img
            src="https://i.ibb.co/rqhQNvg/pexels-tima-miroshnichenko-6790045.jpg"
            alt="Hero"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#f04c39] text-black px-6 py-2 rounded-full font-bold mb-6 text-sm tracking-wider">
              CHUYÊN NGHIỆP • UY TÍN • CHẤT LƯỢNG
            </div>
         <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
  <span className="italic">
    DỤNG CỤ SỬA CHỮA
  </span>
  <br />
  <span className="text-[#f04c39]">
    CHUYÊN NGHIỆP
  </span>
</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Cung cấp đầy đủ các loại dụng cụ cơ khí: kìm, khoan, tô vít, máy cắt, bộ công cụ <br />
              chất lượng cao từ các thương hiệu hàng đầu thế giới.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="bg-[#f04c39] hover:bg-[#d93c2b] text-black font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg inline-flex items-center"
              >
                <Wrench className="mr-2" />
                XEM SẢN PHẨM
              </a>
              <a
                href="Contact"
                className="bg-transparent border-2 border-[#f04c39] text-[#f04c39] hover:bg-[#f04c39] hover:text-black font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                LIÊN HỆ NGAY
              </a>
            </div>
          </div>
        </div>

<div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#f04c39]"></div>
    </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'BẢO HÀNH CHÍNH HÃNG',
                desc: 'Đầy đủ giấy tờ, tem phiếu',
              },
              {
                icon: Truck,
                title: 'GIAO HÀNG TOÀN QUỐC',
                desc: 'Nhanh chóng, an toàn',
              },
              {
                icon: Wrench,
                title: 'SẢN PHẨM CHẤT LƯỢNG',
                desc: 'Nhập khẩu chính hãng',
              },
              {
                icon: HeadphonesIcon,
                title: 'HỖ TRỢ 24/7',
                desc: 'Tư vấn nhiệt tình',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className="bg-gradient-to-br from-[#f04c39] to-[#d93c2b] w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <item.icon className="w-10 h-10 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="products" className="bg-gradient-to-b from-white to-gray-100 pb-20">
        {cate.map((category, index) => {
          const categoryProducts = products.filter((p) => p.category === category.slug);
          return (
            <CategorySection
              key={category.id}
              category={category}
              products={categoryProducts}
              reverse={index % 2 !== 0}
            />
          );
        })}
        <div className="mt-10 flex justify-center">
  <a
    href="/products"
    className="bg-[#f04c39] hover:bg-[#d93c2b] text-black font-bold px-10 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
  >
    XEM TẤT CẢ SẢN PHẨM
  </a>
</div>
      </div>

      <section className="py-20 bg-gradient-to-br from-[#231f20] via-[#3a3538] to-[#5a3535] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#f04c39] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f04c39] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            SẴN SÀNG TRANG BỊ CÔNG CỤ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Liên hệ ngay với chúng tôi để được tư vấn và báo giá tốt nhất
          </p>
          <a
            href="/contact"
            className="bg-[#f04c39] hover:bg-[#d93c2b] text-black font-bold px-12 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-2xl inline-block"
          >
            LIÊN HỆ NGAY
          </a>
        </div>
      </section>
    </div>
  );
}
