export const flowerList = [
  { id: 1, name: "Tulip Hồng Phấn Ohara", price: "550.000", oldPrice: "700.000", slug: "tulip-hong-phan-ohara" },
  { id: 2, name: "Tulip Baby Pink", price: "620.000", oldPrice: "800.000", slug: "tulip-baby-pink" },
  { id: 3, name: "Tulip Tana Trắng", price: "350.000", oldPrice: "450.000", slug: "tulip-tana-trang" },
  { id: 4, name: "Tulip Lan Hồ Điệp VIP", price: "1.200.000", oldPrice: "1.500.000", slug: "tulip-lan-ho-diep-vip" },
  { id: 5, name: "Tulip Hướng Dương Nắng", price: "400.000", oldPrice: "500.000", slug: "tulip-huong-duong-nang" },
  { id: 6, name: "Tulip Cẩm Tú Cầu Lam", price: "480.000", oldPrice: "600.000", slug: "tulip-cam-tu-cau-lam" },
  { id: 7, name: "Tulip Baby Trắng Muốt", price: "300.000", oldPrice: "400.000", slug: "tulip-baby-trang-muot" },
  { id: 8, name: "Tulip Lily Đà Lạt Thơm", price: "520.000", oldPrice: "650.000", slug: "tulip-lily-da-lat-thom" },
  { id: 9, name: "Tulip Mẫu Đơn Sang Trọng", price: "850.000", oldPrice: "1.100.000", slug: "tulip-mau-don-sang-trong" },
  { id: 10, name: "Tulip Cát Tường May Mắn", price: "450.000", oldPrice: "550.000", slug: "tulip-cat-tuong-may-man" },
  { id: 11, name: "Tulip Hồng Sa Mạc Khô", price: "580.000", oldPrice: "750.000", slug: "tulip-hong-sa-mac-kho" },
  { id: 12, name: "Tulip Thạch Thảo Tím", price: "250.000", oldPrice: "350.000", slug: "tulip-thach-thao-tim" },
  { id: 13, name: "Tulip Hồng Ecuador Đỏ", price: "950.000", oldPrice: "1.200.000", slug: "tulip-hong-ecuador-do" },
  { id: 14, name: "Tulip Tím Mộng Mơ", price: "650.000", oldPrice: "850.000", slug: "tulip-tim-mong-mo" },
  { id: 15, name: "Tulip Hướng Dương Mini", price: "320.000", oldPrice: "400.000", slug: "tulip-huong-duong-mini" },
  { id: 16, name: "Tulip Hồng Trà Cổ Điển", price: "470.000", oldPrice: "600.000", slug: "tulip-hong-tra-co-dien" },
  { id: 17, name: "Tulip Lan Vũ Nữ Vàng", price: "750.000", oldPrice: "900.000", slug: "tulip-lan-vu-nu-vang" },
  { id: 18, name: "Tulip Lãng Hoa Khai Trương", price: "1.100.000", oldPrice: "1.400.000", slug: "tulip-lang-hoa-khai-truong" },
];

export const getProductImages = (id) => [
  { src: `/flower${id}.jpg`, style: {} },
  { src: `/flower${id}.jpg`, style: { filter: "hue-rotate(40deg)" } },
  { src: `/flower${id}.jpg`, style: { filter: "brightness(0.93)" } },
  { src: `/flower${id}.jpg`, style: { filter: "contrast(1.05)" } }
];
