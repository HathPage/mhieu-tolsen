export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  image2?: string;
  image3?: string;
  image4?: string;
  rating: number;
  description: string;
  specs: { label: string; value: string }[];
  price?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Bộ đầu vít 54 chi tiết',
    category: 'dau-vit',
    image: 'https://i.ibb.co/VWqxTwY3/59-s54bc.png',
    rating: 5,
    description: 'Bộ đầu vít chuyên nghiệp gồm 54 chi tiết với đầu từ tính, phù hợp cho mọi loại ốc vít',
    specs: [
      { label: 'Số lượng', value: '54 chi tiết' },
      { label: 'Vật liệu', value: 'Thép CR-V' },
      { label: 'Độ cứng', value: 'HRC 58-62' },
    ],
    price: '280.000đ',
  },
  {
    id: '2',
    name: 'Đầu khoan HSS 13 món',
    category: 'dau-vit',
    image: 'https://i.ibb.co/mVtJbq8M/bo-a-u-khoan.jpg',
    rating: 5,
    description: 'Bộ mũi khoan kim loại HSS 13 món từ 1.5mm - 6.5mm',
    specs: [
      { label: 'Kích thước', value: '1.5-6.5mm' },
      { label: 'Vật liệu', value: 'HSS' },
      { label: 'Ứng dụng', value: 'Khoan kim loại' },
    ],
    price: '109.000đ',
  },
  {
    id: '3',
    name: 'Bộ đầu cộng',
    category: 'dau-vit',
    image: 'https://i.ibb.co/BDrJTVs/a-u-co-ng.jpg',
    rating: 4,
    description: 'Bộ đầu cộng đa năng với hộp đựng nhôm cao cấp',
    specs: [
      { label: 'Số lượng', value: '20 chi tiết' },
      { label: 'Loại', value: 'Socket set' },
      { label: 'Xuất xứ', value: 'Đài Loan' },
    ],
    price: '49.000đ',
  },
  {
    id: '4',
    name: 'Đầu lục giác 24 món',
    category: 'dau-vit',
    image: 'https://i.ibb.co/8LNYJrB8/a-u-lu-c-gia-c.jpg',
    rating: 5,
    description: 'Đầu lục giác 24 món, chiều dài đa dạng phù hợp vị trí khó tiếp cận',
    specs: [
      { label: 'Chiều dài tay cầm', value: '22cm' },
      { label: 'Đặc tính', value: 'Đầu từ tính' },
      { label: 'Vật liệu', value: 'S2 Steel' },
    ],
    price: '220.000đ',
  },
  {
    id: '5',
    name: 'Bộ kìm điện cách điện',
    category: 'kim-cam',
    image: 'https://i.ibb.co/BVydJy5C/bo-3-ke-m.jpg',
    image2: 'https://i.ibb.co/8Lqmq243/ca-y-ke-m.jpg',
    image3: 'https://i.ibb.co/8Lqmq243/ca-y-ke-m.jpg',
    rating: 5,
    description: 'Kìm điện cách điện đến 1000V, thiết kế ergonomic',
    specs: [
      { label: 'Kích thước', value: '8-12 inch' },
      { label: 'Cách điện', value: '1000V' },
      { label: 'Tiêu chuẩn', value: 'VDE' },
    ],
    price: '320.000đ',
  },
  {
    id: '6',
    name: 'Bộ cờ lê 8 món đa kích cỡ',
    category: 'kim-cam',
    image: 'https://i.ibb.co/HppKJKSm/bo-co-le-6mm-19mm-copy.jpg',
    image2: 'https://i.ibb.co/HppKJKSm/bo-co-le-6mm-19mm-copy.jpg',
    image3: 'https://i.ibb.co/HppKJKSm/bo-co-le-6mm-19mm-copy.jpg',
    rating: 4,
    description: 'Cờ lê đa năng, phù hợp mọi nhu cầu, chất liệu thép không gỉ',
    specs: [
      { label: 'Kích thước', value: '7-15 inch' },
      { label: 'Vật liệu', value: 'Thép CR-V' },
      { label: 'Độ cứng', value: 'HRC 56-60' },
    ],
    price: '85.000đ',
  },
  {
    id: '7',
    name: 'Bộ lục giác đa kích thước',
    category: 'kim-cam',
    image: 'https://i.ibb.co/xSf5nyCf/ca-y-lu-c-gia-c-copy.jpg',
    image2: 'https://i.ibb.co/xSf5nyCf/ca-y-lu-c-gia-c-copy.jpg',
    image3: 'https://i.ibb.co/xSf5nyCf/ca-y-lu-c-gia-c-copy.jpg',
    rating: 5,
    description: 'Bộ lục giác đa kích thước, phù hợp với nhiều loại ốc vít',
    specs: [
      { label: 'Kích thước', value: '10-24mm' },
      { label: 'Vật liệu', value: 'Thép CR-V' },
      { label: 'Độ cứng', value: 'HRC 58-62' },
    ],
    price: '40.000đ',
  },
  {
    id: '8',
    name: 'Cờ lê vòng miệng 8-19mm',
    category: 'kim-cam',
    image: 'https://i.ibb.co/B2w3Bqd3/co-le.jpg',
    image2: 'https://i.ibb.co/B2w3Bqd3/co-le.jpg',
    image3: 'https://i.ibb.co/B2w3Bqd3/co-le.jpg',
    rating: 5,
    description: 'Bộ cờ lê vòng miệng từ 8-19mm, mạ Chrome sáng bóng',
    specs: [
      { label: 'Số lượng', value: '1 món' },
      { label: 'Kích thước', value: '8-19mm' },
      { label: 'Bề mặt', value: 'Mạ Chrome' },
    ],
    price: '99.000đ',
  },
  {
    id: '30',
    name: 'Dao dọc giấy Tolsen',
    category: 'kim-cam',
    image: 'https://i.ibb.co/PG5P9scD/dao-ro-c-gia-y.jpg',
    image2: 'https://i.ibb.co/PG5P9scD/dao-ro-c-gia-y.jpg',
    image3: 'https://i.ibb.co/PG5P9scD/dao-ro-c-gia-y.jpg',
    rating: 5,
    description: 'Dao dọc giấy Tolsen, chất liệu thép chống gỉ, sắc bén. Có thể thay thế lưỡi dao dễ dàng',
    specs: [
      { label: 'Số lượng', value: '1 món' },
      { label: 'Kích thước', value: '8-19mm' },
      { label: 'Bề mặt', value: 'Thép không gỉ' },
    ],
    price: '39.000đ',
  },
  {
    id: '31',
    name: 'Bộ đục Tolsen 5 món',
    category: 'kim-cam',
    image: 'https://i.ibb.co/S7JLWTZD/bo-u-c.jpg',
    image2: 'https://i.ibb.co/S7JLWTZD/bo-u-c.jpg',
    image3: 'https://i.ibb.co/S7JLWTZD/bo-u-c.jpg',
    rating: 5,
    description: 'Bộ đục Tolsen 5 món, chất liệu thép chống gỉ, sắc bén. Tặng kèm bao đựng chắc chắn.',
    specs: [
      { label: 'Số lượng', value: '5 món' },
      { label: 'Kích thước', value: '8-19mm' },
      { label: 'Bề mặt', value: 'Thép không gỉ' },
    ],
    price: '89.000đ',
  },
  {
    id: '9',
    name: 'Máy vít đa năng TOLSEN',
    category: 'may',
    image: 'https://i.ibb.co/B2jrxsmw/ma-y-vi-t.jpg',
    image2: 'https://i.ibb.co/8LYppfYK/1.jpg',
    image3: 'https://i.ibb.co/V0kkcq8y/3.jpg',
    image4: 'https://i.ibb.co/PzMmrSGb/4.jpg',
    rating: 5,
    description: 'Máy vít Tolsen là lựa chọn lý tưởng cho cả thợ chuyên nghiệp lẫn người dùng gia đình nhờ thiết kế chắc chắn, hiệu suất ổn định và độ bền cao. Sản phẩm được trang bị động cơ mạnh mẽ giúp siết và tháo vít nhanh chóng, tiết kiệm thời gian và công sức. Tay cầm ergonomics chống trượt mang lại cảm giác cầm nắm thoải mái, an toàn khi sử dụng trong thời gian dài. ',
    specs: [
      { label: 'Công suất', value: '650W' },
      { label: 'Tốc độ', value: '0-3000rpm' },
      { label: 'Chuck', value: '13mm' },
    ],
    price: '349.000đ',
  },
  {
    id: '10',
    name: 'Máy khò TS2000',
    category: 'may',
    image: 'https://i.ibb.co/60YJhb69/3.webp',
    image2: 'https://i.ibb.co/gF715Vk8/1.jpg',
    image3: 'https://i.ibb.co/ZzpmNKTw/2.jpg',
    rating: 4.5,
    description: 'Máy khò Tolsen là thiết bị gia nhiệt đa năng, phù hợp cho cả thợ chuyên nghiệp và người dùng gia đình. Với công suất mạnh mẽ, máy cho khả năng tạo luồng khí nóng ổn định, giúp thực hiện nhanh chóng các công việc như bóc sơn, co màng nhiệt, uốn nhựa hay làm khô bề mặt.',
    specs: [
      { label: 'Công suất', value: '850W' },
      { label: 'Đĩa mài', value: '100mm (4")' },
      { label: 'Tốc độ', value: '11000rpm' },
    ],
    price: '399.000đ',
  },
  {
    id: '11',
    name: 'Máy cưa kiếm TS12',
    category: 'may',
    image: 'https://i.ibb.co/CKYpqX6S/2.jpg',
    image2: 'https://i.ibb.co/gMhWswM2/1.jpg',
    image3: 'https://i.ibb.co/hRWMnGSY/61-Fif-Dy-GSq-L-SL1500.jpg',
    rating: 5,
    description: 'Máy cưa kiếm TS12 là dụng cụ cắt gỗ và vật liệu nhẹ được ưa chuộng nhờ thiết kế gọn nhẹ, dễ sử dụng và độ bền cao. Sản phẩm sử dụng lưỡi cưa thép chất lượng (thường là thép 65Mn) với răng cưa sắc bén, giúp cắt nhanh, đường cắt mịn.',
    specs: [
      { label: 'Công suất', value: '400W' },
      { label: 'Tốc độ', value: '0-3000spm' },
      { label: 'Chiều dài hành trình', value: '18mm' },
    ],
    price: '469.000đ',
  },
  {
    id: '12',
    name: 'Máy cắt gỗ',
    category: 'may',
    image: 'https://i.ibb.co/MkhKb4f1/1.jpg',
    image2: 'https://i.ibb.co/9kZBKWQd/2.jpg',
    image3: 'https://i.ibb.co/m5FG0QpP/3.jpg',
    rating: 5,
    description: 'Máy cắt gỗ Tolsen là thiết bị chuyên dụng trong ngành mộc, nổi bật với thiết kế nhỏ gọn, công suất mạnh mẽ và khả năng cắt chính xác. Sản phẩm thường được trang bị động cơ từ khoảng 1200W–1300W, tốc độ quay lên đến 5000 vòng/phút, giúp cắt gỗ nhanh, đường cắt mịn và tiết kiệm thời gian thi công.',
    specs: [
      { label: 'Điện áp', value: '20V' },
      { label: 'Mô-men xoắn', value: '45Nm' },
      { label: 'Pin', value: '2.0Ah Lithium' },
    ],
    price: '999.000đ',
  },
   {
    id: '20',
    name: 'Máy cưa xoay TS20',
    category: 'may',
    image: 'https://i.ibb.co/xt0MDCJm/3.jpg',
    image2: 'https://i.ibb.co/xqkwprSX/61-U6w-ECs5-QL-AC-SL1500.jpg',
    image3: 'https://i.ibb.co/QvyXwK4K/619-Bu6ns-D1-L-AC-SL1500.jpg',
    rating: 5,
    description: 'Máy cưa xoay TS20, cắt gỗ và kim loại, bền bỉ, hiệu suất cao',
    specs: [
      { label: 'Điện áp', value: '20V' },
      { label: 'Mô-men xoắn', value: '45Nm' },
      { label: 'Pin', value: '2.0Ah Lithium' },
    ],
    price: '769.000đ',
  },
  {
    id: '21',
    name: 'Pin Lithium 18V',
    category: 'may',
    image: 'https://i.ibb.co/Mxb8sMvq/1.jpg',
    image2: 'https://i.ibb.co/dx5cV7Z/2.jpg',
    image3: 'https://i.ibb.co/1YJjn4PB/718-Dsg9-QTKL-AC-SL1500.jpg',
    rating: 5,
    description: 'Pin Lithium 18V, dung lượng cao, sạc nhanh',
    specs: [
      { label: 'Điện áp', value: '18V' },
      { label: 'Dung lượng', value: '6.0Ah' },
      { label: 'Loại pin', value: 'Lithium ion' },
    ],
    price: '899.000đ',
  },
  {
    id: '13',
    name: 'Hộp đựng đồ nghề cỡ lớn',
    category: 'hop-dung-cu',
    image: 'https://i.ibb.co/nsFZyn4v/ho-p-u-ng-copy.jpg',
    image2: 'https://i.ibb.co/nsFZyn4v/ho-p-u-ng-copy.jpg',
    image3: 'https://i.ibb.co/nsFZyn4v/ho-p-u-ng-copy.jpg',
    rating: 4,
    description: 'Hộp đựng đồ nghề nhựa cao cấp 19 inch, có khóa kim loại',
    specs: [
      { label: 'Kích thước', value: '19 inch' },
      { label: 'Vật liệu', value: 'Nhựa PP' },
      { label: 'Khóa', value: 'Kim loại' },
    ],
    price: '280.000đ',
  },

  {
    id: '15',
    name: 'Bộ dụng cụ gia đình 20 món',
    category: 'hop-dung-cu',
    image: 'https://i.ibb.co/7x16XYNT/set-du-ng-cu.png',
    image2: 'https://i.ibb.co/7x16XYNT/set-du-ng-cu.png',
    image3: 'https://i.ibb.co/7x16XYNT/set-du-ng-cu.png',
    rating: 5,
    description: 'Bộ dụng cụ đa năng 20 món trong hộp nhựa cao cấp',
    specs: [
      { label: 'Số món', value: '20 chi tiết' },
      { label: 'Hộp đựng', value: 'Nhựa cao cấp' },
      { label: 'Bảo hành', value: '12 tháng' },
    ],
    price: '390.000đ',
  },
];

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'BỘ ĐẦU',
    slug: 'dau-vit',
    description: 'Đầu vít, đầu khoan, đầu tuýp',
    image: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '2',
    name: 'BỘ CẦM',
    slug: 'kim-cam',
    description: 'Kìm, thước, dao, cờ lê',
    image: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '3',
    name: 'BỘ MÁY',
    slug: 'may',
    description: 'Máy khoan, máy cắt, máy mài',
    image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '4',
    name: 'BỘ DỤNG CỤ',
    slug: 'hop-dung-cu',
    description: 'Hộp, set dụng cụ, tủ đồ nghề',
    image: 'https://images.pexels.com/photos/2326290/pexels-photo-2326290.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];
export const cate: Category[] = [
  {
    id: '1',
    name: 'BỘ MÁY',
    slug: 'may',
    description: 'Máy khoan, máy cắt, máy mài',
    image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];