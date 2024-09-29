import Link from 'next/link';
import { useRouter } from 'next/router';
import { newsData } from '../../data/newsData'; // Import the same news data

const NewsDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the news item by its ID
  const newsItem = newsData.find(item => item.id === parseInt(id));

  // If the news item is not found, return a fallback
  if (!newsItem) {
    return <p>News not found</p>;
  }

  return (
    <div className="news-detail-container">
      <h1>{newsItem.title}</h1>
      <p className="news-date">{newsItem.date}</p>
      <p>{newsItem.content}</p>

      <Link href="/news" className="back-link">Back to All News</Link>
      <Link href="/#news" className="back-link">Back to Home</Link>
    </div>
  );
};

export default NewsDetail;
