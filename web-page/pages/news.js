import Head from 'next/head';
import React, { useState } from 'react';
import Link from 'next/link';
import { newsData } from '../data/newsData';

const NewsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const newsPerPage = 20;
  
    // idが大きい順に並べ替え
    const sortedNews = [...newsData].sort((a, b) => b.id - a.id);
  
    // 現在のページのニュースを取得
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = sortedNews.slice(indexOfFirstNews, indexOfLastNews);
  
    // 総ページ数を計算
    const totalPages = Math.ceil(sortedNews.length / newsPerPage);
  
    // ページ変更ハンドラ
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="news-page-container">
      <Head>
        <link rel="icon" href="/image/favicon.ico" />
        <link rel="apple-touch-icon" href="/image/logo.jpg" />
        <title>News - Hero&#39;s</title>
        <meta name="description" content="Hero&#39;sの最新のお知らせやイベント情報を確認できます。" />
        <meta property="og:title" content="Hero&#39;s News" />
        <meta property="og:description" content="Hero&#39;sの最新のお知らせをチェックしましょう。" />
        <meta property="og:image" content="/image/logo.jpg" />
        <meta property="og:url" content="https://d2ynp8qdcw1ah8.cloudfront.net/news" />

        {/* 構造化データ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "News - Hero&#39;s",
            "description": "Hero&#39;sの最新のお知らせやイベント情報を集めたページです。",
            "url": "https://d2ynp8qdcw1ah8.cloudfront.net/news"
          })}
        </script>
      </Head>
      <h2 className="section-title">All NEWS</h2>
      <div className="news-list">
        {currentNews.map(item => (
          <div key={item.id} className="news-item">
            <p className="news-date">{item.date}</p>
            <Link href={`/news/${item.id}`} className="news-title">{item.title}</Link>
          </div>
        ))}
      </div>
      <div className="news-footer">
        <Link href="/#news" className="back-to-home">Back to Home</Link>
      </div>

      {/* ページネーション */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
