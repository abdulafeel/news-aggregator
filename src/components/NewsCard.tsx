import React from "react";

interface NewsCardProps {
  article: {
    title: string;
    description: string;
    url: string;
    source: string;
    author: string;
  };
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg card-hover overflow-hidden p-6">
      <h3 className="text-2xl font-bold text-gray-900">{article.title}</h3>
      <p className="text-gray-600 mt-3">{article.description}</p>
      <div className="flex items-center justify-between mt-5">
        <p className="text-sm text-gray-500">By {article.author || "Unknown"}</p>
        <p className="text-xs text-gray-500 bg-blue-100 px-3 py-1 rounded-md">{article.source}</p>
      </div>
      <div className="mt-6">
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-block"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
