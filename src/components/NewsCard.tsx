import React from "react";

interface NewsCardProps {
  article: {
    title: string;
    description: string;
    url: string;
    urlToImage?: string;
    source: string;
    author: string;
  };
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <div className="bg-white rounded-lg shadow-md card-hover overflow-hidden">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-40 object-cover rounded-t-lg" // ✅ Fixes image size
        />
      )}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">{article.title}</h3> {/* ✅ Fix heading size */}
        <p className="text-gray-700 mt-2 text-sm">{article.description}</p>
        <div className="flex items-center justify-between mt-4">
          <p className="text-xs text-gray-500">By {article.author || "Unknown"}</p>
          <p className="text-xs text-gray-500 bg-gray-200 px-3 py-1 rounded-md">{article.source}</p>
        </div>
        <div className="mt-4">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-white bg-blue-600 px-4 py-2 rounded-md font-medium text-center hover:bg-blue-700 transition-all"
          >
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
