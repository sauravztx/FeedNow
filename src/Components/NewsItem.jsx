import React from "react";
import Logo from "../assets/news_logo.png";

const NewsItem = ({ title, description, src, url, publishedAt }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // You can customize the format as needed
  };

  return (
    <div className="max-w-sm bg-blue-100 rounded overflow-hidden shadow-lg inline-block mb-4">
      <img 
        src={src || Logo} 
        className="w-full h-48 object-cover hover:scale-110 transition duration-500 cursor-pointer" 
        alt={title || "news"} 
        onError={(e) => { e.target.src = Logo }}  // Fallback if image fails to load
      />
      <div className="p-4">
        <p className="text-gray-500 text-sm mb-1">Published on: {formatDate(publishedAt)}</p>
        <h5 className="text-xl font-bold mb-2">{title}</h5>
        <p className="text-gray-700 text-base mb-4">{description?description.slice(0, 100) : "No description available."}</p>
        <a href={url} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
