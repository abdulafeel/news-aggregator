import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white text-center p-6 shadow-md">
      <h1 className="text-3xl font-bold">📰 News Aggregator</h1>
      <p className="text-lg">Stay updated with the latest news</p>
    </header>
  );
};

export default Header;
