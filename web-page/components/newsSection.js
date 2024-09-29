import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { newsData } from '../data/newsData'; // Import the news data

const NewsSection = () => {
  const latestNews = [...newsData].sort((a, b) => b.id - a.id).slice(0, 10);

  return (
    <section className="section news-section" id="news">
      <h2 className="section-title">NEWS</h2>
      <div className="news-container">
        {latestNews.map(item => (
          <div key={item.id} className="news-item">
            <p className="news-date">{item.date}</p>
            <Link href={`/news/${item.id}`} className="news-title">{item.title}</Link>
          </div>
        ))}
      </div>
      <div className="news-footer">
        <Link href="/news" className="view-all-news">See All News</Link>
      </div>
    </section>
  );
};

export default NewsSection;
