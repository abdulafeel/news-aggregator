import React, { useState, useContext } from "react";
import { NewsContext } from "../context/NewsContext";
import { fetchAllNews } from "../services/api";

const FilterBar: React.FC = () => {
  const [filters, setFilters] = useState({
    query: "",
    fromDate: "",
    category: "",
    source: "",
  });

  const newsContext = useContext(NewsContext);
  if (!newsContext) return null;

  const { setArticles } = newsContext;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = async () => {
    if (!filters.query) {
      alert("Please enter a search term!");
      return;
    }
    const results = await fetchAllNews(filters.query, filters.fromDate, filters.category, filters.source);
    setArticles(results);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-wrap items-center justify-between gap-4">
      <input
        type="text"
        name="query"
        placeholder="Search articles..."
        className="w-full md:w-auto border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={filters.query}
        onChange={handleInputChange}
      />

      <input
        type="date"
        name="fromDate"
        className="w-full md:w-auto border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={filters.fromDate}
        onChange={handleInputChange}
      />

      <select
        name="category"
        className="w-full md:w-auto border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={filters.category}
        onChange={handleInputChange}
      >
        <option value="">All Categories</option>
        <option value="business">Business</option>
        <option value="sports">Sports</option>
        <option value="health">Health</option>
        <option value="science">Science</option>
        <option value="technology">Technology</option>
      </select>

      <input
        type="text"
        name="source"
        placeholder="Source (e.g., BBC)"
        className="w-full md:w-auto border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={filters.source}
        onChange={handleInputChange}
      />

      <button
        className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition-all"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default FilterBar;
