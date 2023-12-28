import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <aside>
        <p>Copyright © {currentYear} - Created by Fardin Hasan Neloy</p>
      </aside>
    </footer>
  );
};

export default Footer;
