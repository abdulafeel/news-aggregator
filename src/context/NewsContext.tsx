import React, { createContext, useState, useEffect, ReactNode } from "react";
import { fetchAllNews } from "../services/api";

export interface Article {
  title: string;
  description: string;
  url: string;
  source: { name: string };
  author?: string;
}

interface Preferences {
  sources: string[];
  categories: string[];
  authors: string[];
}

interface NewsContextType {
  articles: Article[];
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
  preferences: Preferences;
  setPreferences: React.Dispatch<React.SetStateAction<Preferences>>;
}

export const NewsContext = createContext<NewsContextType | null>(null);

export const NewsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [preferences, setPreferences] = useState<Preferences>(() => {
    const storedPreferences = localStorage.getItem("newsPreferences");
    return storedPreferences ? JSON.parse(storedPreferences) : { sources: [], categories: [], authors: [] };
  });

  useEffect(() => {
    fetchAllNews().then(setArticles);
  }, []);

  useEffect(() => {
    localStorage.setItem("newsPreferences", JSON.stringify(preferences));
  }, [preferences]);

  return (
    <NewsContext.Provider value={{ articles, setArticles, preferences, setPreferences }}>
      {children}
    </NewsContext.Provider>
  );
};
