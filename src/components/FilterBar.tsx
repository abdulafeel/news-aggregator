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
    <div className="bg-white p-6 rounded-md shadow-sm flex flex-wrap gap-4 items-center justify-between mt-6">
      <input type="text" name="query" placeholder="🔍 Search articles..." className="input-field w-64" value={filters.query} onChange={handleInputChange} />
      <input type="date" name="fromDate" className="input-field w-44" value={filters.fromDate} onChange={handleInputChange} />
      <select name="category" className="input-field w-44" value={filters.category} onChange={handleInputChange}>
        <option value="">All Categories</option>
        <option value="business">Business</option>
        <option value="sports">Sports</option>
        <option value="health">Health</option>
      </select>
      <input type="text" name="source" placeholder="📡 Source (e.g., BBC)" className="input-field w-44" value={filters.source} onChange={handleInputChange} />
      <button className="btn">Search</button>
    </div>
  );
};

export default FilterBar;
