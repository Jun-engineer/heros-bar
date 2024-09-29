import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Slideshow from '../components/slideshow';
import NewsSection from '../components/newsSection';

const Separator = () => (
  <div className="separator">
    <span className="separator-bar"></span>
    <span className="separator-bar"></span>
  </div>
);

export default function Home() {
  return (
    <div className="container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <Link href="/">
            <Image 
              src="/logo.jpg" 
              alt="Restaurant Logo" 
              width={100} 
              height={50} 
            />
          </Link>
        </div>
        <ul className="navbar-links">
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
            src="/concept.jpg" 
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
            src="/party.jpg" 
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
              src="/food-menu.jpg"  /* Replace with your actual food image path */
              alt="Food Menu"
              width={210}
              height={140}
              className="menu-image"
            />
            <Link href="/drink-menu.pdf" target="_blank" className="menu-label">フードメニュー</Link>
          </div>

          <div className="menu-item">
            <Image
              src="/drink-menu.jpg"  /* Replace with your actual drink image path */
              alt="Drink Menu"
              width={210}
              height={140}
              className="menu-image"
            />
            <Link href="/drink-menu.pdf" target="_blank" className="menu-label">ドリンクメニュー</Link>
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
            <p><strong>営業時間</strong><br />
              ランチ 11:00 - 14:00<br />
              ディナー 17:00 - 23:00
            </p>

            <p><strong>電話番号</strong><br />
              03-3528-8266
            </p>

            <p><strong>メール</strong><br />
              heroscafeandsportsbar@gmail.com
            </p>

            <p><strong>住所</strong><br />
              東京都千代田区有楽町１-2-14
            </p>
          </div>

          <div className="info-right">
            <p className="info-access">アクセス</p>
            <div className="info-map">
              {/* Placeholder for the map or other content */}
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
