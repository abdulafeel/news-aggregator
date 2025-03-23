import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-10 shadow-md text-center">
      <h1 className="text-4xl font-extrabold tracking-wide">📰 News Aggregator</h1> {/* ✅ Fix heading size */}
      <p className="text-md font-light mt-2">Stay updated with the latest news worldwide</p>
    </header>
  );
};

export default Header;
