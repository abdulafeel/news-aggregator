import React, { useContext } from "react";
import { Article, NewsContext } from "../context/NewsContext";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import NewsCard from "../components/NewsCard";

const Home: React.FC = () => {
  const newsContext = useContext(NewsContext);

  // Ensure newsContext is not null before using articles
  if (!newsContext) return null;

  const { articles } = newsContext;

  return (
    <div>
      <Header />
      <FilterBar />
      <div className="grid grid-cols-3 gap-4 p-4">
        {articles.map((article: Article, index: number) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Home;
