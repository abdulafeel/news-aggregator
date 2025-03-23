import axios from "axios";

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const GUARDIAN_API_KEY = process.env.REACT_APP_GUARDIAN_API_KEY;
const NYT_API_KEY = process.env.REACT_APP_NYT_API_KEY;

// Fetch from NewsAPI
const fetchNewsAPI = async (query: string) => {
  const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${NEWS_API_KEY}`;
  const response = await axios.get(url);
  return response.data.articles.map((article: any) => ({
    title: article.title,
    description: article.description,
    url: article.url,
    source: article.source.name,
    author: article.author || "Unknown",
  }));
};

// Fetch from The Guardian API
const fetchGuardianAPI = async (query: string) => {
  const url = `https://content.guardianapis.com/search?q=${query}&api-key=${GUARDIAN_API_KEY}&show-fields=trailText`;
  const response = await axios.get(url);
  return response.data.response.results.map((article: any) => ({
    title: article.webTitle,
    description: article.fields.trailText || "No description",
    url: article.webUrl,
    source: "The Guardian",
    author: "Unknown",
  }));
};

// Fetch from The New York Times API
const fetchNYTimesAPI = async (query: string) => {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${NYT_API_KEY}`;
  const response = await axios.get(url);
  return response.data.response.docs.map((article: any) => ({
    title: article.headline.main,
    description: article.abstract || "No description",
    url: article.web_url,
    source: "The New York Times",
    author: article.byline?.original || "Unknown",
  }));
};

// Fetch combined news from all sources
export const fetchAllNews = async (query: string = "latest") => {
  const [newsAPI, guardian, nyTimes] = await Promise.all([
    fetchNewsAPI(query),
    fetchGuardianAPI(query),
    fetchNYTimesAPI(query),
  ]);

  return [...newsAPI, ...guardian, ...nyTimes];
};
