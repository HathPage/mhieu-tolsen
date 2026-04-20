import { Phone, Mail, MapPin, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#2a2527] to-[#231f20] border-t-4 border-[#f04c39]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-[#f04c39] font-bold text-xl mb-4 uppercase tracking-wide">
              Về Chúng Tôi
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              TOLSEN - Đơn vị cung cấp dụng cụ cơ khí chuyên nghiệp, uy tín hàng đầu Việt Nam
              với hơn 15 năm kinh nghiệm.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-[#f04c39] transition-colors group"
              >
                <Facebook className="w-5 h-5 text-[#f04c39] group-hover:text-black" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-[#f04c39] transition-colors group"
              >
                <Youtube className="w-5 h-5 text-[#f04c39] group-hover:text-black" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[#f04c39] font-bold text-xl mb-4 uppercase tracking-wide">
              Trang
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'Trang chủ', path: '/' },
                { label: 'Giới thiệu', path: '/about' },
                { label: 'Sản phẩm', path: '/products' },
                { label: 'Tin tức', path: '/news' },
                { label: 'Liên hệ', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-[#f04c39] transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-[#f04c39] mr-2 transform group-hover:scale-125 transition-transform" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#f04c39] font-bold text-xl mb-4 uppercase tracking-wide">
              Hỗ Trợ
            </h3>
            <ul className="space-y-2">
              {['Chính sách bảo hành', 'Hướng dẫn mua hàng', 'Thanh toán', 'Vận chuyển', 'Đổi trả hàng'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#f04c39] transition-colors flex items-center group"
                    >
                      <span className="w-2 h-2 bg-[#f04c39] mr-2 transform group-hover:scale-125 transition-transform" />
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-[#f04c39] font-bold text-xl mb-4 uppercase tracking-wide">
              Liên Hệ
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-400">
                <MapPin className="w-5 h-5 text-[#f04c39] mr-3 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                360 Đ. La Thành, Ô Chợ Dừa, Hà Nội, Việt Nam
                </span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 text-[#f04c39] mr-3 flex-shrink-0" />
                <span>(+84) 928 052 396</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 text-[#f04c39] mr-3 flex-shrink-0" />
                <span>minhhieu@tolsen.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 TOLSEN. Bảo lưu mọi quyền. Thiết kế bởi{' '}
            <span className="text-[#f04c39] font-semibold">TOLSEN Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
