import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.popular}>
          <h1>Popüler Güzergahlar</h1>
          <div className={styles.roads}>
            <Link href="">İstanbul &#10230; Ankara</Link>
            <Link href="">Ankara &#10230; İzmir</Link>
            <Link href="">Denizli &#10230; Bursa</Link>
          </div>
        </div>
        <div className={styles.routes}>
          <h1>Linkler</h1>
          <div className={styles.links}>
            <Link href="/">Ana Sayfa</Link>
            <Link href="/">Giriş Yap</Link>
            <Link href="/">İlanlar</Link>
          </div>
        </div>
        <div className={styles.about}>
            <h1>Bizle Tanışın</h1>
            <div className={styles.meet}>
                <span>Ekibimizle Tanışmak için 
                    <Link href="/about">Tıklayın</Link>
                </span>
            </div>
        </div>
        <div className={styles.socials}>
          <h1>Bize Ulaşın</h1>
          <div className={styles.icons}>
            <Link href="">
              <Image
                alt="instagram"
                src="/instagram.png"
                width={24}
                height={24}
              />
            </Link>
            <Link href="">
              <Image
                alt="whatsapp"
                src="/whatsapp.png"
                width={24}
                height={24}
              />
            </Link>
            <Link href="">
              <Image alt="mail" src="/mail.png" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.company}>
        <span>Yol Arkadaşım, 2024 ©</span>
        <span>Her hakkı saklıdır.</span>
      </div>
    </div>
  );
};

export default Footer;
