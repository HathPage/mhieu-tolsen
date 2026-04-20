import { Award, Users, Target, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#231f20] via-[#3a3538] to-[#5a3535] mt-20">
        <div className="absolute inset-0">
          <img
            src="https://i.ibb.co/jZqr4QWw/pexels-cottonbro-4480461.jpg"
            alt="About"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">VỀ CHÚNG TÔI</h1>
            <p className="text-xl text-gray-300">Hơn 15 năm phục vụ thị trường công cụ cơ khí Việt Nam</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-6">Công Ty cổ phần Tolsen</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Được thành lập vào năm 2009, Tolsen là một trong những nhà cung cấp hàng đầu dụng cụ cơ khí chuyên nghiệp tại Việt Nam. Chúng tôi cam kết mang đến cho khách hàng những sản phẩm chất lượng cao từ các thương hiệu nổi tiếng trên thế giới.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Với đội ngũ nhân viên tận tâm và kinh nghiệm nhiều năm, chúng tôi luôn sẵn sàng hỗ trợ khách hàng tìm kiếm các giải pháp dụng cụ tối ưu nhất cho nhu cầu công việc.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Sự thành công của chúng tôi được xây dựng trên nền tảng UY TÍN, CHẤT LƯỢNG và DỊCH VỤ KHÁCH HÀNG TỐT NHẤT.
              </p>
            </div>

            <div className="space-y-6">
              <img
                src="https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Company"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-gray-900 mb-12 text-center">GIÁ TRỊ CỐT LÕI</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'CHẤT LƯỢNG',
                desc: 'Sản phẩm nhập khẩu chính hãng, đủ giấy tờ, bảo hành đầy đủ',
              },
              {
                icon: Users,
                title: 'DỊCH VỤ',
                desc: 'Đội ngũ tư vấn chuyên nghiệp, hỗ trợ 24/7, giao hàng nhanh chóng',
              },
              {
                icon: Target,
                title: 'CHUYÊN NGHIỆP',
                desc: 'Hiểu rõ nhu cầu khách hàng, cung cấp giải pháp tối ưu',
              },
              {
                icon: TrendingUp,
                title: 'UY TÍN',
                desc: 'Hơn 15 năm phục vụ thị trường, được khách hàng tin tưởng',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#f04c39]"
              >
                <div className="bg-gradient-to-br from-[#f04c39] to-[#d93c2b] w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-gray-900 mb-12 text-center">CON SỐ CHỈ RA THÀNH CÔNG</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '15+', label: 'NĂM KINH NGHIỆM' },
              { number: '50000+', label: 'KHÁCH HÀNG' },
              { number: '2000000+', label: 'SẢN PHẨM' },
              { number: '63', label: 'TỈNH THÀNH' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-black text-[#f04c39] mb-2">{item.number}</div>
                <p className="text-gray-600 font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#231f20] via-[#3a3538] to-[#5a3535]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-white mb-12 text-center">THƯƠNG HIỆU ĐỐI TÁC</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Bosch', 'DeWalt', 'Makita', 'Stanley', 'Hitachi', 'Festool', 'AEG', 'Ryobi'].map(
              (brand, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-lg flex items-center justify-center border border-white/20 hover:border-[#f04c39] transition-colors group"
                >
                  <p className="font-bold text-white text-center text-lg group-hover:text-[#f04c39] transition-colors">
                    {brand}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
