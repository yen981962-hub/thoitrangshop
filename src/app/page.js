"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { flowerList } from "@/data/products";
import styles from "./page.module.css";

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

  // Đồng bộ giỏ hàng từ localStorage khi mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cartCount");
    if (savedCart) {
      setCartCount(parseInt(savedCart, 10));
    }
  }, []);

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <Header cartCount={cartCount} />

      {/* MAIN CONTENT */}
      <main className={styles.item2}>
        <div className={styles.mainContent}>
          <div className={styles.hero}>
            <h1>Sweet Collection</h1>
            <p>Trao gửi yêu thương qua từng cánh hoa nghệ thuật</p>
          </div>

          {/* HIỂN THỊ DANH SÁCH SẢN PHẨM CHÍNH */}
          <div className={styles.grid}>
            {flowerList.map((flower) => (
              <div key={flower.id} className={styles.product}>
                <Link href={`/chitietsanpham/${flower.slug}`} className={styles.productImage}>
                  <Image 
                    src={`/flower${flower.id}.jpg`} 
                    alt={flower.name} 
                    fill 
                    style={{ objectFit: "cover" }} 
                    unoptimized 
                  />
                </Link>
                <div className={styles.productName}>
                  <Link href={`/chitietsanpham/${flower.slug}`} className={styles.productLink}>
                    <h3>{flower.name}</h3>
                  </Link>
                </div>
                <div className={styles.productPrice}>
                  <span className={styles.price}>{flower.price}₫</span>
                  <span className={styles.oldPrice}>{flower.oldPrice}₫</span>
                </div>
                <div className={styles.productRemain}>
                  <span>🔥 Còn 30/30 suất</span>
                </div>
                <Link href={`/chitietsanpham/${flower.slug}`} className={styles.buyButton}>
                  Mua ngay
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}