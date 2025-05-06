import Head from 'next/head';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Slideshow from '../components/slideshow';
import NewsSection from '../components/newsSection';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <Head>
        <link rel="icon" type="image/jpg" href="/image/favicon.ico" />
        <link rel="apple-touch-icon" href="/image/favicon.jpg" />
        <title>Hero&#39;s</title>
        <meta name="description" content="Hero&#39;sは、スポーツを楽しむための居心地の良いスポットです。大画面でのスポーツ観戦と多彩なフードメニューを提供します。" />
        <meta property="og:title" content="Hero&#39;s" />
        <meta property="og:description" content="Hero&#39;sは、スポーツを楽しむための居心地の良いスポットです。" />
        <meta property="og:image" content="/image/favicon.jpg" />
        <meta property="og:url" content="https://d2ynp8qdcw1ah8.cloudfront.net/" />
      </Head>

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
          <Image
                src="/image/hamburger.svg" 
                alt="Hamburger" 
                width={25} 
                height={25} 
              />
        </div>

        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><Link href="#concept">CONCEPT</Link></li>
          <li><Link href="#party">PARTY</Link></li>
          <li><Link href="#menu">MENU</Link></li>
          <li><Link href="#news">NEWS</Link></li>
          <li><Link href="#info">INFO</Link></li>
          <li>
            <Link href="https://www.instagram.com/heros_2024/" target="_blank" rel="noopener noreferrer">
              <Image 
                className="instagram-icon"
                src="/image/instagram.svg" 
                alt="Instagram" 
                width={25} 
                height={25} 
              />
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <Slideshow />

      {/* Produce Section */}
      <div className="produce-text">
        元千葉ロッテマリーンズ所属 <span className="break-on-mobile">小林宏之選手プロデュース</span>
      </div>

      {/* Concept Section */}
      <section className="section concept-section" id="concept">
        <h2 className="section-title">CONCEPT</h2>
        <p className="section-subtitle">「興奮」と「感動」を呼ぶスポーツバー</p>
        <div className="concept-content">
          <div className="concept-text">
            <p>3つの大型モニターで迫力のあるスポーツ観戦、アツい瞬間を共有できる喜び、そしてリラックスできる雰囲気を提供しています。</p>
            <p>野球だけではなく、あらゆるスポーツを全員で楽しめる最高のスポットへようこそ。</p>
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

      {/* Party Section */}
      <section className="section party-section" id="party">
        <h2 className="section-title">PARTY</h2>
        <p className="section-subtitle">特別な一日を、特別な場所で</p>
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
              Hero&#39;sでは、貸し切りのパーティーにも対応しています。<br />
              大切な仲間と共に過ごす歓喜の時間を、贅沢な空間で彩りませんか？
            </p>
            <p>誕生日パーティー、スポーツ観戦イベント、会社の集まりなど、どんなシーンでも最高のひとときを演出いたします。</p>
            <p>ご希望に合わせたプランをご提案いたしますので、ぜひお気軽にご相談ください。</p>
          </div>
        </div>
      </section>

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

      {/* News Section */}
      <NewsSection />

      {/* Info Section */}
      <section className="section info-section" id="info">
        <h2 className="section-title">INFO</h2>
        <div className="info-container">
          <div className="info-left">
            <div className="info-label-box">営業時間</div>
            <p>
              ランチ　 11:00 - 14:00<br />
              ディナー 17:00 - 23:00<br />
              ※日曜日定休日
            </p>

            <div className="info-label-box">電話番号</div>
            <p>03-3528-8266</p>

            <div className="info-label-box">メール</div>
            <p>heroscafeandsportsbar@gmail.com</p>

            <div className="info-label-box">住所</div>
            <p>東京都千代田区有楽町１-2-14 紫ビル1F</p>
          </div>

          <div className="info-right">
            <div className="info-label-box">アクセス</div>
            <div className="info-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d414871.785977052!2d139.1831746734375!3d35.672426099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bc5bdf90b7b%3A0x36f24528a2682797!2sHERO&#39;S!5e0!3m2!1sen!2sjp!4v1727628147933!5m2!1sen!2sjp"
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
