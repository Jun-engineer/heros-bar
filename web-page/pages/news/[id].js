import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { newsData } from '../../data/newsData';

const NewsDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the news item by its ID
  const newsItem = newsData.find(item => item.id === parseInt(id));

  // If the news item is not found, return a fallback
  if (!newsItem) {
    return <p>News not found</p>;
  }

  // Format the content to display line breaks
  const formatContent = (text) => {
    return text.split('\n').map((line, index) => <span key={index}>{line}<br /></span>);
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/image/favicon.ico" />
        <link rel="apple-touch-icon" href="/image/favicon.jpg" />
        <title>{newsItem.title} - Hero&#39;s</title>
        <meta name="description" content={newsItem.contents} />
        <meta property="og:title" content={newsItem.title} />
        <meta property="og:description" content={newsItem.contents} />
        <meta property="og:image" content="/image/favicon.jpg" />
        <meta property="og:url" content={`https://d2ynp8qdcw1ah8.cloudfront.net/news/${newsItem.id}`} />
      </Head>
      <div className="news-detail-container">
        <h1>{newsItem.title}</h1>
        <p className="news-date">{newsItem.date}</p>
        <p>{formatContent(newsItem.content)}</p>

        <Link href="/news" className="back-link">Back to All News</Link>
        <Link href="/#news" className="back-link">Back to Home</Link>
      </div>
    </>
  );
};

export default NewsDetail;
