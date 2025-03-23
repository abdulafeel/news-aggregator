import axios from "axios";

const API_KEYS = {
  newsAPI: process.env.REACT_APP_NEWS_API_KEY,
  guardianAPI: process.env.REACT_APP_GUARDIAN_API_KEY,
  nytAPI: process.env.REACT_APP_NYT_API_KEY,
};

// Generic function to avoid repetition
const fetchFromAPI = async (url: string, transformFunc: (data: any) => any[]) => {
  try {
    const response = await axios.get(url);
    return transformFunc(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// Fetch from NewsAPI with filters
const fetchNewsAPI = (query: string, fromDate?: string, category?: string, source?: string) => {
  let url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEYS.newsAPI}`;
  if (fromDate) url += `&from=${fromDate}`;
  if (category) url += `&category=${category}`;
  if (source) url += `&sources=${source}`;

  return fetchFromAPI(url, (data) =>
    data.articles.map((article: any) => ({
      title: article.title,
      description: article.description,
      url: article.url,
      urlToImage: article.urlToImage, // ✅ Get the image
      source: article.source.name,
      author: article.author || "Unknown",
    }))
  );
};


// Fetch from The Guardian API with filters
const fetchGuardianAPI = (query: string) =>
  fetchFromAPI(
    `https://content.guardianapis.com/search?q=${query}&api-key=${API_KEYS.guardianAPI}&show-fields=trailText`,
    (data) => data.response.results.map((article: any) => ({
      title: article.webTitle,
      description: article.fields.trailText || "No description",
      url: article.webUrl,
      source: "The Guardian",
      author: "Unknown",
    }))
  );

// Fetch from The New York Times API with filters
const fetchNYTimesAPI = (query: string) =>
  fetchFromAPI(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEYS.nytAPI}`,
    (data) => data.response.docs.map((article: any) => ({
      title: article.headline.main,
      description: article.abstract || "No description",
      url: article.web_url,
      source: "The New York Times",
      author: article.byline?.original || "Unknown",
    }))
  );

// Fetch combined news with filters
export const fetchAllNews = async (query: string = "latest", fromDate?: string, category?: string, source?: string) => {
  const [newsAPI, guardian, nyTimes] = await Promise.all([
    fetchNewsAPI(query, fromDate, category, source),
    fetchGuardianAPI(query),
    fetchNYTimesAPI(query),
  ]);

  return [...newsAPI, ...guardian, ...nyTimes];
};
