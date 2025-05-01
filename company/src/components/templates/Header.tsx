import React, { useEffect, useState } from "react";
import HamburgBar from "../organisms/HamburgBar";

const Header: React.FC = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full flex flex-row items-center justify-between p-4 z-50 transition-all duration-300 ${
        showHeader
          ? "translate-y-0 bg-transparent"
          : "-translate-y-full bg-transparent"
      }`}
    >
      <div className="flex items-center">
        <img
          src="/images/mediaLogo.png"
          alt="Media Road Logo"
          className="h-14"
        />
      </div>

      <div className="flex items-center">
        <HamburgBar />
      </div>
    </header>
  );
};

export default Header;
