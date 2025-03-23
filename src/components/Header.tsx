import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 shadow-lg flex items-center justify-center text-center w-full">
      <div className="max-w-4xl">
        <h1 className="text-5xl font-extrabold tracking-wide">📰 News Aggregator</h1>
        <p className="text-lg font-light mt-3">Stay updated with the latest headlines</p>
      </div>
    </header>
  );
};

export default Header;
