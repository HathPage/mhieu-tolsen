import { Phone, MapPin, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#231f20] via-[#3a3538] to-[#5a3535] mt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Contact"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">LIÊN HỆ CHÚNG TÔI</h1>
          <p className="text-xl text-gray-300">Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {[
              {
                icon: Phone,
                title: 'Điện thoại',
                info: '(+84) 928 052 396',
                subinfo: '(+84) 928 052 396',
              },
              {
                icon: Mail,
                title: 'Email',
                info: 'info@TOLSEN.vn',
                subinfo: 'sales@TOLSEN.vn',
              },
              {
                icon: MapPin,
                title: 'Địa chỉ',
                info: '360 Đ. La Thành, Ô Chợ Dừa',
                subinfo: 'TP. Hà Nội, Việt Nam',
              },
              {
                icon: Clock,
                title: 'Giờ hoạt động',
                info: 'Thứ 2 - Thứ 6: 8h - 18h',
                subinfo: 'Thứ 7: 8h - 12h',
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#f04c39] hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="bg-gradient-to-br from-[#f04c39] to-[#d93c2b] p-3 rounded-lg mr-3">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-700 font-semibold">{item.info}</p>
                <p className="text-gray-600 text-sm">{item.subinfo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-6">Gửi tin nhắn cho chúng tôi</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Họ và tên</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nhập họ và tên"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#f04c39] transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Nhập email"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#f04c39] transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Số điện thoại</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Nhập số điện thoại"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#f04c39] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Chủ đề</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#f04c39] transition-colors bg-white cursor-pointer"
                      required
                    >
                      <option value="">Chọn chủ đề</option>
                      <option value="sales">Tư vấn mua hàng</option>
                      <option value="support">Hỗ trợ kỹ thuật</option>
                      <option value="partnership">Hợp tác kinh doanh</option>
                      <option value="other">Khác</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Lời nhắn</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Nhập lời nhắn của bạn"
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#f04c39] transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#f04c39] to-[#d93c2b] hover:from-[#d93c2b] hover:to-[#b92d1d] text-white font-bold py-4 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-lg"
                >
                  <Send className="w-5 h-5" />
                  GỬI TIN NHẮN
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-6">Bản đồ vị trí</h2>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4084.970435509562!2d105.82198915709446!3d21.023954323155476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab79d9e00c97%3A0xb18bdf08f7889a6!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBN4bu5IHRodeG6rXQgQ8O0bmcgbmdoaeG7h3A!5e0!3m2!1svi!2s!4v1775706755528!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="bg-gradient-to-br from-[#f04c39] to-[#d93c2b] rounded-lg p-6 mt-6 text-white">
                <h3 className="font-bold text-lg mb-2">Tới văn phòng trực tiếp</h3>
                <p className="mb-2"> 360 Đ. La Thành, Ô Chợ Dừa, Hà Nội</p>
                <p className="text-sm opacity-90">
                  Đến thăm chúng tôi để xem đầy đủ bộ sưu tập sản phẩm và nhận tư vấn trực tiếp từ đội ngũ chuyên gia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t-4 border-[#f04c39]">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Hỗ trợ nhanh chóng</h3>
          <p className="text-gray-600 mb-8">
            Hãy liên hệ ngay với chúng tôi qua các kênh sau để được hỗ trợ nhanh nhất
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+84928052396"
              className="bg-[#f04c39] hover:bg-[#d93c2b] text-white font-bold px-8 py-3 rounded-lg transition-all inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Gọi ngay
            </a>
            <a
              href="mailto:info@TOLSEN.vn"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-lg transition-all inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
            <a
              href="#"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg transition-all inline-flex items-center gap-2"
            >
              Zalo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
