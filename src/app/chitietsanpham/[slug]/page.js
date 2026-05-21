"use client";

import { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import confetti from "canvas-confetti";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { flowerList, getProductImages } from "@/data/products";
import styles from "./detail.module.css";

export default function ProductDetailPage({ params }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const [cartCount, setCartCount] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Đồng bộ giỏ hàng từ localStorage
  useEffect(() => {
    setMounted(true);
    const savedCart = localStorage.getItem("cartCount");
    if (savedCart) {
      setCartCount(parseInt(savedCart, 10));
    }
  }, []);

  // Tìm kiếm sản phẩm theo slug hoặc theo id
  const product = flowerList.find(
    (item) => item.slug === slug || String(item.id) === String(slug)
  );

  // Hiệu ứng pháo hoa giấy khi trang chi tiết sản phẩm hiển thị thành công
  useEffect(() => {
    if (product && mounted) {
      confetti({ 
        particleCount: 100, 
        spread: 70, 
        origin: { y: 0.4 },
        colors: ["#ffb6c1", "#ffffff", "#ffd700"] 
      });
    }
  }, [product, mounted]);

  if (!product) {
    return (
      <div className={styles.container}>
        <Header cartCount={cartCount} />
        <main className={styles.item2}>
          <div className={styles.mainContent}>
            <div className={styles.errorContainer}>
              <h2>Sản phẩm không tồn tại!</h2>
              <p>Rất tiếc, chúng tôi không tìm thấy sản phẩm bạn yêu cầu.</p>
              <Link href="/" className={styles.backButton}>
                ← Quay lại trang chủ
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const images = getProductImages(product.id);

  const addToCart = () => {
    const newCount = cartCount + 1;
    setCartCount(newCount);
    localStorage.setItem("cartCount", String(newCount));
    alert(`💖 Tuyệt vời! ${product.name} đã nằm trong giỏ hàng.`);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.container}>
      <Header cartCount={cartCount} />
      
      <main className={styles.item2}>
        <div className={styles.mainContent}>
          <div className={styles.detailContainer}>
            <Link href="/" className={styles.backButton}>
              ← Quay lại danh sách sản phẩm
            </Link>
            
            <div className={styles.detailLayout}>
              {/* BÊN TRÁI: HỆ THỐNG HIỂN THỊ ẢNH LỚN VÀ THUMBNAIL TỰ CHẾ MƯỢT MÀ */}
              <div className={styles.detailLeftColumn}>
                
                {/* 1. Khung hiển thị ảnh lớn tích hợp nút bấm điều hướng */}
                <div className={styles.customBigSlider}>
                  <button 
                    className={`${styles.sliderArrow} ${styles.arrowLeft}`} 
                    onClick={handlePrevImage}
                  >
                    ‹
                  </button>
                  
                  <div className={styles.bigImageWrapper}>
                    <Image 
                      src={images[activeImageIndex].src} 
                      alt={product.name} 
                      fill 
                      style={{ 
                        objectFit: "cover", 
                        ...images[activeImageIndex].style 
                      }} 
                      unoptimized 
                    />
                  </div>

                  <button 
                    className={`${styles.sliderArrow} ${styles.arrowRight}`} 
                    onClick={handleNextImage}
                  >
                    ›
                  </button>
                </div>

                {/* 2. Hàng ảnh nhỏ (Thumbnails) tương tác ngay phía dưới */}
                <div className={styles.customThumbGrid}>
                  {images.map((img, idx) => (
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
                <h2>{product.name}</h2>
                <div className={styles.detailPriceRow}>
                  <span className={styles.detailPrice}>{product.price}₫</span>
                  <span className={styles.detailOldPrice}>{product.oldPrice}₫</span>
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
        </div>
      </main>

      <Footer />
    </div>
  );
}
