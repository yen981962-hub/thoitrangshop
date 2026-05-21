import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.item3}>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerColumn}>
            <strong className={styles.footerTitle}>Về Flower Garden</strong>
            <p className={styles.footerText}>
              Cửa hàng cung cấp hoa tươi và phụ kiện quà tặng uy tín.
            </p>
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
  );
}
