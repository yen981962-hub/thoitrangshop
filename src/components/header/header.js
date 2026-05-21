"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header({ cartCount = 0 }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>
          Trang chủ
        </Link>
        <div
          className={styles.navLink}
          ref={menuRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Bộ sưu tập {isMenuOpen ? "▴" : "▾"}
          <ul className={`${styles.dropdown} ${isMenuOpen ? styles.show : ""}`}>
            <li>Hoa Tình Yêu</li>
            <li>Hoa Sinh Nhật</li>
            <li>Hoa Khai Trương</li>
          </ul>
        </div>
        <div className={styles.navLink}>Liên hệ</div>
      </nav>
      <Link href="/" className={styles.logo}>
        FLOWER<span>GARDEN</span>
      </Link>
      <div className={styles.cartBtn}>
        🛒<span className={styles.badge}>{cartCount}</span>
      </div>
    </header>
  );
}
