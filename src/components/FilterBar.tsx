import React, { useState, useContext } from "react";
import { NewsContext } from "../context/NewsContext";
import { fetchAllNews } from "../services/api";

const FilterBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("");
  const newsContext = useContext(NewsContext);

  if (!newsContext) return null;
  const { setArticles } = newsContext;

  const handleSearch = async () => {
    if (!query) {
      alert("Please enter a search term!");
      return;
    }
  
    const results = await fetchAllNews(query);
    setArticles(results);
  };
  
  

  return (
    <div className="p-4 flex flex-wrap gap-4">
      <input
        type="text"
        placeholder="Search by keyword..."
        className="border p-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <input
        type="date"
        className="border p-2"
        value={fromDate}
        onChange={(e) => setFromDate(e.target.value)}
      />

      <select
        className="border p-2"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="business">Business</option>
        <option value="entertainment">Entertainment</option>
        <option value="health">Health</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
      </select>

      <input
        type="text"
        placeholder="Filter by source (e.g., BBC, CNN)"
        className="border p-2"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />

      <button className="bg-blue-500 text-white p-2" onClick={handleSearch}>
        Apply Filters
      </button>
    </div>
  );
};

export default FilterBar;
