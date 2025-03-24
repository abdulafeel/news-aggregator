import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-12 shadow-md text-center">
      <h1 className="text-6xl font-extrabold uppercase tracking-wide">📰 News Aggregator</h1> {/* ✅ Set the big size manually */}
      <p className="text-lg font-light mt-3">Stay updated with the latest news worldwide</p>
    </header>
  );
};

export default Header;
