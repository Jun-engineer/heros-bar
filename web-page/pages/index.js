import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Slideshow from '../components/slideshow';
import NewsSection from '../components/newsSection';

const Separator = () => (
  <div className="separator">
    <span className="separator-bar"></span>
    <span className="separator-bar"></span>
  </div>
);

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <Link href="/">
            <Image 
              src="/image/logo.jpg" 
              alt="Restaurant Logo" 
              width={100} 
              height={50} 
            />
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>

        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><Link href="#concept">CONCEPT</Link></li>
          <li><Link href="#party">PARTY</Link></li>
          <li><Link href="#menu">MENU</Link></li>
          <li><Link href="#news">NEWS</Link></li>
          <li><Link href="#info">INFO</Link></li>
          <li>
            <Link href="https://www.instagram.com/heros_2024/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="lg" className="instagram-icon" />
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <Slideshow />

      {/* Insert separator between sections */}
      <Separator />

      {/* Concept Section */}
      <section className="section concept-section" id="concept">
        <h2 className="section-title">CONCEPT</h2>
        <p className="section-subtitle">スポーツを楽しめるバー</p>
        <div className="concept-content">
          <div className="concept-text">
            <p>
              居心地が良い空間で、スポーツを楽しむ場所を提供。<br/>
              お酒をもちろん、充実したフードメニューもご用意しております。
            </p>
            <p>なんとかなんとか、なんとかなんとか。</p>
            <p>なんとかなんとか、なんとかなんとか。</p>
            <p>なんとかなんとか、なんとかなんとか。</p>
          </div>
          <Image 
            src="/image/concept.jpg" 
            alt="Concept Image" 
            width={600} 
            height={300} 
            className="concept-image"
          />
        </div>
      </section>

      {/* Insert separator between sections */}
      <Separator />

      {/* Party Section */}
      <section className="section party-section" id="party">
        <h2 className="section-title">PARTY</h2>
        <p className="section-subtitle">貸し切りでのパーティーも</p>
        <div className="party-content">
          <Image 
            src="/image/party.jpg" 
            alt="Party Image" 
            width={600} 
            height={300} 
            className="party-image"
          />
          <div className="party-text">
            <p>
              当店は貸し切りのも対応可能です。<br />
              お気軽にお問い合わせください。
            </p>
            <p>なんとかなんとか、なんとかなんとか。</p>
            <p>なんとかなんとか、なんとかなんとか。</p>
            <p>なんとかなんとか、なんとかなんとか。</p>
          </div>
        </div>
      </section>

      {/* Insert separator between sections */}
      <Separator />

      {/* Menu Section */}
      <section className="section menu-section" id="menu">
        <h2 className="section-title">MENU</h2>
        <p className="section-subtitle">たっぷり楽しめる豊富なメニュー</p>

        <div className="menu-container">
          <div className="menu-item">
            <Image
              src="/image/food-menu.jpg"
              alt="Food Menu"
              width={210}
              height={140}
              className="menu-image"
            />
            <Link href="/pdf/food-grand-menu.pdf" target="_blank" className="menu-label">グランドメニュー（PDF）</Link>
          </div>

          <div className="menu-item">
            <Image
              src="/image/drink-menu.jpg"
              alt="Drink Menu"
              width={210}
              height={140}
              className="menu-image"
            />
            <Link href="/pdf/drink-grand-menu.pdf" target="_blank" className="menu-label">ドリンクメニュー（PDF）</Link>
            <Link href="/pdf/whisky-menu.pdf" target="_blank" className="menu-label">ウイスキー（PDF）</Link>
          </div>
        </div>
      </section>

      {/* Insert separator between sections */}
      <Separator />

      {/* News Section */}
      <NewsSection />

      {/* Insert separator between sections */}
      <Separator />

      {/* Info Section */}
      <section className="section info-section" id="info">
        <h2 className="section-title">INFO</h2>
        <div className="info-container">
          <div className="info-left">
            <div className="info-label-box">営業時間</div>
            <p>
              ランチ 11:00 - 14:00<br />
              ディナー 17:00 - 23:00
            </p>

            <div className="info-label-box">電話番号</div>
            <p>03-3528-8266</p>

            <div className="info-label-box">メール</div>
            <p>heroscafeandsportsbar@gmail.com</p>

            <div className="info-label-box">住所</div>
            <p>東京都千代田区有楽町１-2-14</p>
          </div>

          <div className="info-right">
            <div className="info-label-box">アクセス</div>
            <div className="info-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7038780073246!2d139.7594530154818!3d35.675937680195716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bf6225f79d5%3A0xb7c7b56e37367b88!2z5pel5pys44CB44CSMTAwLTAwNTIg5p2x5Lqs6YO95riv5Yy65p2x5Lqs5Y-w77yS5LiB55uu77yS77yS4oiS77yS77yR!5e0!3m2!1sja!2sjp!4v1696230755939!5m2!1sja!2sjp"
                width="100%"
                height="300"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>


      {/* Footer Section */}
      <footer className="footer">
        <p className="footer-text">Copyright @ 2024 MEIKO INDUSTRY CO.,LTD All Rights Reserved.</p>
      </footer>
    </div>
  );
}
