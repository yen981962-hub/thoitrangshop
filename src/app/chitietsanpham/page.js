<div className={styles.detailContainer}>
  {/* NÚT QUAY LẠI DANH SÁCH */}
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