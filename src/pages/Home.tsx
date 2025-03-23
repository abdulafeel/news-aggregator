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
    <div className="container flex flex-col items-center text-center">
      <Header />
      <FilterBar />
      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-6">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {articles.map((article, index) => <NewsCard key={index} article={article} />)}
      </div>
    </div>
  );
};

export default Home;
