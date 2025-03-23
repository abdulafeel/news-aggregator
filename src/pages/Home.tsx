import React, { useContext } from "react";
import { NewsContext } from "../context/NewsContext";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import NewsCard, { NewsCardProps } from "../components/NewsCard";

const Home: React.FC = () => {
  const newsContext = useContext(NewsContext);
  if (!newsContext) return null;

  const { articles } = newsContext;

  return (
    <div>
      <Header />
      <FilterBar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <NewsCard key={index} article={article} /> 
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg">No articles found. Try a different search.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
