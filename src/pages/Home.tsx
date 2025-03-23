import React, { useContext } from "react";
import { NewsContext } from "../context/NewsContext";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import NewsCard from "../components/NewsCard";

const Home: React.FC = () => {
  const newsContext = useContext(NewsContext);
  if (!newsContext) return null;

  const { articles } = newsContext;

  return (
    <div className="container">
      <Header />
      <FilterBar />
      <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6 text-center">🌟 Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => <NewsCard key={index} article={article} />)}
      </div>
    </div>
  );
};

export default Home;
