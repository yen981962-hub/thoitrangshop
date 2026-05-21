"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import confetti from "canvas-confetti";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null); 
  
  // State quản lý vị trí ảnh lớn đang được chọn (mặc định là ảnh số 0)
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const menuRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setIsMenuOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const flowerList = [
    { id: 1, name: "Tulip Hồng Phấn Ohara", price: "550.000", oldPrice: "700.000" },
    { id: 2, name: "Tulip Baby Pink", price: "620.000", oldPrice: "800.000" },
    { id: 3, name: "Tulip Tana Trắng", price: "350.000", oldPrice: "450.000" },
    { id: 4, name: "Tulip Lan Hồ Điệp VIP", price: "1.200.000", oldPrice: "1.500.000" },
    { id: 5, name: "Tulip Hướng Dương Nắng", price: "400.000", oldPrice: "500.000" },
    { id: 6, name: "Tulip Cẩm Tú Cầu Lam", price: "480.000", oldPrice: "600.000" },
    { id: 7, name: "Tulip Baby Trắng Muốt", price: "300.000", oldPrice: "400.000" },
    { id: 8, name: "Tulip Lily Đà Lạt Thơm", price: "520.000", oldPrice: "650.000" },
    { id: 9, name: "Tulip Mẫu Đơn Sang Trọng", price: "850.000", oldPrice: "1.100.000" },
    { id: 10, name: "Tulip Cát Tường May Mắn", price: "450.000", oldPrice: "550.000" },
    { id: 11, name: "Tulip Hồng Sa Mạc Khô", price: "580.000", oldPrice: "750.000" },
    { id: 12, name: "Tulip Thạch Thảo Tím", price: "250.000", oldPrice: "350.000" },
    { id: 13, name: "Tulip Hồng Ecuador Đỏ", price: "950.000", oldPrice: "1.200.000" },
    { id: 14, name: "Tulip Tím Mộng Mơ", price: "650.000", oldPrice: "850.000" },
    { id: 15, name: "Tulip Hướng Dương Mini", price: "320.000", oldPrice: "400.000" },
    { id: 16, name: "Tulip Hồng Trà Cổ Điển", price: "470.000", oldPrice: "600.000" },
    { id: 17, name: "Tulip Lan Vũ Nữ Vàng", price: "750.000", oldPrice: "900.000" },
    { id: 18, name: "Tulip Lãng Hoa Khai Trương", price: "1.100.000", oldPrice: "1.400.000" },
  ];

  // Danh sách các góc chụp/hiệu ứng của ảnh chi tiết (Thay cho SwiperSlide cũ)
  const getProductImages = (id) => [
    { src: `/flower${id}.jpg`, style: {} },
    { src: `/flower${id}.jpg`, style: { filter: "hue-rotate(40deg)" } },
    { src: `/flower${id}.jpg`, style: { filter: "brightness(0.93)" } },
    { src: `/flower${id}.jpg`, style: { filter: "contrast(1.05)" } }
  ];

  const handleShowDetail = (flower) => {
    setSelectedProduct(flower);
    setActiveImageIndex(0); // Reset về ảnh đầu tiên khi xem sản phẩm mới
    window.scrollTo({ top: 280, behavior: "smooth" }); 
    confetti({ 
      particleCount: 100, 
      spread: 70, 
      origin: { y: 0.4 },
      colors: ["#ffb6c1", "#ffffff", "#ffd700"] 
    });
  };

  const addToCart = () => {
    setCartCount(prev => prev + 1);
    alert(`💖 Tuyệt vời! ${selectedProduct.name} đã nằm trong giỏ hàng.`);
    setSelectedProduct(null);
  };

  // Hàm chuyển ảnh lớn bằng nút mũi tên điều hướng
  const handlePrevImage = (images) => {
    setActiveImageIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNextImage = (images) => {
    setActiveImageIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.navLink} onClick={() => setSelectedProduct(null)} style={{ cursor: "pointer" }}>Trang chủ</div>
          <div className={styles.navLink} ref={menuRef} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            Bộ sưu tập {isMenuOpen ? "▴" : "▾"}
            <ul className={`${styles.dropdown} ${isMenuOpen ? styles.show : ""}`}>
              <li>Hoa Tình Yêu</li><li>Hoa Sinh Nhật</li><li>Hoa Khai Trương</li>
            </ul>
          </div>
          <div className={styles.navLink}>Liên hệ</div>
        </nav>
        <div className={styles.logo} onClick={() => setSelectedProduct(null)} style={{ cursor: "pointer" }}>FLOWER<span>GARDEN</span></div>
        <div className={styles.cartBtn}>🛒<span className={styles.badge}>{cartCount}</span></div>
      </header>

      {/* MAIN CONTENT */}
      <main className={styles.item2}>
        <div className={styles.mainContent}>
          <div className={styles.hero}>
            <h1>Sweet Collection</h1>
            <p>Trao gửi yêu thương qua từng cánh hoa nghệ thuật</p>
          </div>

          {/* CHUYỂN ĐỔI GIAO DIỆN CHÚNG TA DÙNG COMPONENT THUẦN KHÔNG SỢ LỖI THƯ VIỆN */}
          {selectedProduct ? (
            <div className={styles.detailContainer}>
              <button className={styles.backButton} onClick={() => setSelectedProduct(null)}>
                ← Quay lại danh sách sản phẩm
              </button>
              
              <div className={styles.detailLayout}>
                
                {/* BÊN TRÁI: HỆ THỐNG HIỂN THỊ ẢNH LỚN VÀ THUMBNAIL TỰ CHẾ MƯỢT MÀ */}
                <div className={styles.detailLeftColumn}>
                  
                  {/* 1. Khung hiển thị ảnh lớn tích hợp nút bấm điều hướng */}
                  <div className={styles.customBigSlider}>
                    <button 
                      className={`${styles.sliderArrow} ${styles.arrowLeft}`} 
                      onClick={() => handlePrevImage(getProductImages(selectedProduct.id))}
                    >
                      ‹
                    </button>
                    
                    <div className={styles.bigImageWrapper}>
                      <Image 
                        src={getProductImages(selectedProduct.id)[activeImageIndex].src} 
                        alt={selectedProduct.name} 
                        fill 
                        style={{ 
                          objectFit: "cover", 
                          ...getProductImages(selectedProduct.id)[activeImageIndex].style 
                        }} 
                        unoptimized 
                      />
                    </div>

                    <button 
                      className={`${styles.sliderArrow} ${styles.arrowRight}`} 
                      onClick={() => handleNextImage(getProductImages(selectedProduct.id))}
                    >
                      ›
                    </button>
                  </div>

                  {/* 2. Hàng ảnh nhỏ (Thumbnails) tương tác ngay phía dưới */}
                  <div className={styles.customThumbGrid}>
                    {getProductImages(selectedProduct.id).map((img, idx) => (
                      <div 
                        key={idx} 
                        className={`${styles.pureThumbItem} ${activeImageIndex === idx ? styles.pureThumbActive : ""}`}
                        onClick={() => setActiveImageIndex(idx)}
                      >
                        <div className={styles.thumbImageWrapper}>
                          <Image 
                            src={img.src} 
                            alt={`thumbnail-${idx}`} 
                            fill 
                            style={{ objectFit: "cover", ...img.style }} 
                            unoptimized 
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

                {/* BÊN PHẢI: THÔNG TIN CHI TIẾT SẢN PHẨM SẮP XẾP GỌN GÀNG */}
                <div className={styles.detailInfoColumn}>
                  <h2>{selectedProduct.name}</h2>
                  <div className={styles.detailPriceRow}>
                    <span className={styles.detailPrice}>{selectedProduct.price}₫</span>
                    <span className={styles.detailOldPrice}>{selectedProduct.oldPrice}₫</span>
                  </div>
                  <div className={styles.detailRemain}>
                    <span>🔥 Tình trạng: Còn 30/30 suất tươi trong ngày</span>
                  </div>
                  <hr className={styles.divider} />
                  <div className={styles.description}>
                    <p><strong>Ý nghĩa:</strong> Biểu tượng của sự tinh tế và tình yêu thuần khiết.</p>
                    <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                      <li style={{ marginBottom: "8px" }}>✅ Hoa tươi thiết kế nhập khẩu chất lượng cao trong ngày.</li>
                      <li style={{ marginBottom: "8px" }}>✅ Tặng kèm thiệp viết tay và phụ kiện thiết kế riêng.</li>
                      <li style={{ marginBottom: "8px" }}>✅ Giao hàng nhanh hỏa tốc 60 phút tận nơi nội thành.</li>
                      <li style={{ marginBottom: "8px" }}>✅ Cam kết hoa giống hình, chụp ảnh trước khi giao khách duyệt.</li>
                    </ul>
                  </div>
                  <button className={styles.detailConfirmButton} onClick={addToCart}>
                    XÁC NHẬN MUA HÀNG
                  </button>
                </div>

              </div>
            </div>
          ) : (
            /* HIỂN THỊ DANH SÁCH SẢN PHẨM CHÍNH BAN ĐẦU */
            <div className={styles.grid}>
              {flowerList.map((flower) => (
                <div key={flower.id} className={styles.product}>
                  <div className={styles.productImage}>
                    <Image src={`/flower${flower.id}.jpg`} alt={flower.name} fill style={{ objectFit: "cover" }} unoptimized />
                  </div>
                  <div className={styles.productName}>
                    <h3>{flower.name}</h3>
                  </div>
                  <div className={styles.productPrice}>
                    <span className={styles.price}>{flower.price}₫</span>
                    <span className={styles.oldPrice}>{flower.oldPrice}₫</span>
                  </div>
                  <div className={styles.productRemain}>
                    <span>🔥 Còn 30/30 suất</span>
                  </div>
                  <div className={styles.buyButton} onClick={() => handleShowDetail(flower)}>
                    Mua ngay
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* FOOTER */}
      <div className={styles.item3}>
        <footer className={styles.footer}>
          <div className={styles.footerContainer}>
            <div className={styles.footerColumn}>
              <strong className={styles.footerTitle}>Về Flower Garden</strong>
              <p className={styles.footerText}>Cửa hàng cung cấp hoa tươi và phụ kiện quà tặng uy tín.</p>
              <ul className={styles.contactInfo}>
                <li>📍 123 Đường Hoa Hồng, Quận 1, TP.HCM</li>
                <li>📞 0123 456 789</li>
                <li>✉️ lienhe@flowergarden.vn</li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <strong className={styles.footerTitle}>Liên Kết Nhanh</strong>
              <ul className={styles.footerLinks}>
                <li>Chính sách giao hàng</li>
                <li>Chính sách bảo hành</li>
                <li>Hướng dẫn chăm sóc hoa</li>
                <li>Câu hỏi thường gặp</li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <strong className={styles.footerTitle}>Bản Đồ</strong>
              <div className={styles.mapBox}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.447734346453!2d106.69916297583822!3d10.773147159183925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f46890f6707%3A0x6a1005f037626998!2zMTIzIMSQxrDhu51uZyBMw6ogTOG7o2ksIELhurNuIE5naMOpLCBRdeG6rW4gMSwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1710000000000!5m2!1svi!2s"
                  width="100%"
                  height="150"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
          <div className={styles.copyright}>
            © 2026 Flower Garden. All Rights Reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}