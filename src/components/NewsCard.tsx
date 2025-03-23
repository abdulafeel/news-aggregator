import React from "react";

interface NewsCardProps {
  article: {
    title: string;
    description: string;
    url: string;
  };
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => (
  <div className="border p-4 m-2">
    <h2 className="text-xl font-bold">{article.title}</h2>
    <p>{article.description}</p>
    <a href={article.url} target="_blank" className="text-blue-500">
      Read More
    </a>
  </div>
);

export default NewsCard;
