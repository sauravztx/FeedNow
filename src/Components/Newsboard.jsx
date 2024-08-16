import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import logo from "../assets/news_logo.png"
const Newsboard = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${import.meta.env.VITE_API_KEY}`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                console.log(data);
                setArticles(data.articles || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) return <p className="text-center py-3">Loading...</p>;
    if (error) return <p className="text-center py-3 text-red-500">Error: {error}</p>;

    return (
        <div>
            <h2 className='text-center py-3 text-4xl my-3'>
                Bitcoin <span className='text-red-500 font-bold my-3 text-4xl'>News</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-6">
                {articles.map((news, index) => (
                    <NewsItem
                        key={index}
                        title={news.title}
                        description={news.description}
                        src={news.urlToImage || logo}
                        url={news.url}
                        publishedAt={news.publishedAt}
                    />
                ))}
            </div>
        </div>
    );
};

export default Newsboard;
