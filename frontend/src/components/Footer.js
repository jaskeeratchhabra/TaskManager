import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} MangeTasks.com. All rights reserved.</p>
        <p className="mb-4">Designed with ❤️ by Jaskeerat & Ketki</p>
      </div>
    </footer>
  );
};

export default Footer;
