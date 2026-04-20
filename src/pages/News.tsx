import { Calendar, ArrowRight } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: 'Ra mắt dòng sản phẩm công cụ điện mới 2024',
    excerpt: 'TOLSEN tự hào giới thiệu bộ sưu tập công cụ điện chuyên nghiệp mới nhất từ Bosch và DeWalt, mang đến hiệu suất tối ưu cho mọi công việc.',
    date: '15 Tháng 4, 2024',
    image: 'https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Sản phẩm mới',
  },
  {
    id: 2,
    title: 'Chương trình khuyến mại khủng tháng 5 - Giảm đến 40%',
    excerpt: 'Cơ hội vàng để sở hữu các công cụ cơ khí chất lượng cao với giá ưu đãi. Chương trình áp dụng từ ngày 1 đến 31 tháng 5 năm 2024.',
    date: '1 Tháng 5, 2024',
    image: 'https://openend.vn/wp-content/uploads/2022/01/chuong-trinh-khuyen-mai-trong-kinh-doanh-scaled-1.jpg',
    category: 'Khuyến mại',
  },
  {
    id: 3,
    title: 'TOLSEN tham gia Hội chợ Quốc tế Vietnam Expo 2024',
    excerpt: 'TOLSEN sẽ có mặt tại triển lãm Vietnam Expo 2024 với các sản phẩm độc quyền và ưu đãi đặc biệt cho các nhà thầu và công ty.',
    date: '10 Tháng 4, 2024',
    image: 'https://images.pexels.com/photos/3976325/pexels-photo-3976325.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Sự kiện',
  },
  {
    id: 4,
    title: 'Hướng dẫn chọn công cụ cơ khí phù hợp cho dự án của bạn',
    excerpt: 'Bài viết chi tiết về cách lựa chọn công cụ cơ khí đúng loại, đúng chất lượng cho mỗi loại công việc và ngành nghề khác nhau.',
    date: '28 Tháng 3, 2024',
    image: 'https://bizweb.dktcdn.net/100/456/510/articles/cong-dung-cua-dung-cu-co-khi-min.jpg?v=1665645957330',
    category: 'Hướng dẫn',
  },
  {
    id: 5,
    title: 'Bảo trì và sử dụng công cụ cơ khí hiệu quả',
    excerpt: 'Những mẹo vàng để bảo trì, sửa chữa và sử dụng công cụ cơ khí đúng cách, kéo dài tuổi thọ thiết bị và đảm bảo an toàn lao động.',
    date: '15 Tháng 3, 2024',
    image: 'https://ngophangroup.com/uploads/news/2019_12/bao-tri-co-khi.jpg',
    category: 'Kiến thức',
  },
  {
    id: 6,
    title: 'TOLSEN nhận chứng chỉ ISO 9001:2015',
    excerpt: 'Công ty TOLSEN vinh dự nhận được chứng chỉ ISO 9001:2015, khẳng định cam kết về chất lượng và dịch vụ khách hàng.',
    date: '1 Tháng 3, 2024',
    image: 'https://clv.vn/wp-content/uploads/2020/04/chi-phi-cap-chung-chi-iso-9001-2015.jpg',
    category: 'Tin tức',
  },
];

export default function News() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#231f20] via-[#3a3538] to-[#5a3535] mt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="News"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">TIN TỨC</h1>
          <p className="text-xl text-gray-300">Cập nhật thông tin sản phẩm, khuyến mại và các sự kiện từ TOLSEN</p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#f04c39] text-white px-4 py-1 rounded-full text-sm font-bold">
                    {article.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {article.date}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#f04c39] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>

                  <button className="flex items-center text-[#f04c39] font-bold hover:text-[#d93c2b] transition-colors">
                    Đọc tiếp
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Đăng ký nhận bản tin tin tức</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Nhận thông tin mới nhất về sản phẩm, khuyến mại và các sự kiện độc quyền từ TOLSEN
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#f04c39] transition-colors"
            />
            <button className="bg-[#f04c39] hover:bg-[#d93c2b] text-white font-bold px-8 py-3 rounded-lg transition-all whitespace-nowrap">
              Đăng ký
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
