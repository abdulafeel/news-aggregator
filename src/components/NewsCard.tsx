import React from "react";

export interface NewsCardProps {
  article: {
    title?: string;
    description?: string;
    url?: string;
    source?: string; // ✅ Ensure source is a string
    author?: string;
  };
}


const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900">{article.title}</h3>
        <p className="text-gray-700 mt-2">{article.description}</p>
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-gray-600">{article.source}</p> {/* ✅ source is always a string now */}
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-medium hover:underline"
          >
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
};



export default NewsCard;
