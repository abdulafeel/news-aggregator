import React, { useContext, useState } from "react";
import { NewsContext } from "../context/NewsContext";

const Preferences: React.FC = () => {
  const newsContext = useContext(NewsContext);
  if (!newsContext) return null;

  const { preferences, setPreferences } = newsContext;
  const [sources, setSources] = useState(preferences.sources.join(","));
  const [categories, setCategories] = useState(preferences.categories.join(","));
  const [authors, setAuthors] = useState(preferences.authors.join(","));

  const handleSave = () => {
    setPreferences({
      sources: sources.split(",").map((s) => s.trim()),
      categories: categories.split(",").map((c) => c.trim()),
      authors: authors.split(",").map((a) => a.trim()),
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Personalized News Feed</h2>
      <div className="mb-4">
        <label className="block font-bold">Preferred Sources (comma-separated)</label>
        <input
          type="text"
          className="border p-2 w-full"
          value={sources}
          onChange={(e) => setSources(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold">Preferred Categories</label>
        <input
          type="text"
          className="border p-2 w-full"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold">Preferred Authors</label>
        <input
          type="text"
          className="border p-2 w-full"
          value={authors}
          onChange={(e) => setAuthors(e.target.value)}
        />
      </div>
      <button className="bg-blue-500 text-white p-2" onClick={handleSave}>
        Save Preferences
      </button>
    </div>
  );
};

export default Preferences;
