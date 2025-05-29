import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HamburgBar from "../organisms/HamburgBar";

const Header: React.FC = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowHeader(currentScrollY <= lastScrollY);
      setIsTop(currentScrollY === 0);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleNavClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full max-w-screen flex items-center justify-between p-4 z-50 transition-all duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } ${
        isTop ? "bg-black/40 text-white" : "bg-white text-black backdrop-blur"
      }`}
    >
      <div
        className="flex items-center cursor-pointer"
        onClick={handleLogoClick}
      >
        <img
          src="/images/mediaLogo.png"
          alt="Media Road Logo"
          className="h-14"
        />
      </div>
      <nav
        className={`hidden md:flex gap-6 transition-colors duration-300 font-sans font-bold text-xl ${
          isTop ? "text-white" : "text-black"
        }`}
      >
        <a
          href="/intro"
          onClick={(e) => handleNavClick("/intro", e)}
          className="relative before:content-[''] before:absolute before:top-[-10px] before:left-1/2 before:-translate-x-1/2 before:w-2 before:h-2 before:rounded-full before:bg-[#8B4513] before:opacity-0 hover:before:opacity-100 before:transition-opacity"
        >
          회사소개
        </a>
        <a
          href="/video"
          onClick={(e) => handleNavClick("/video", e)}
          className="relative before:content-[''] before:absolute before:top-[-10px] before:left-1/2 before:-translate-x-1/2 before:w-2 before:h-2 before:rounded-full before:bg-[#8B4513] before:opacity-0 hover:before:opacity-100 before:transition-opacity"
        >
          영상콘텐츠
        </a>
        <a
          href="/software"
          onClick={(e) => handleNavClick("/software", e)}
          className="relative before:content-[''] before:absolute before:top-[-10px] before:left-1/2 before:-translate-x-1/2 before:w-2 before:h-2 before:rounded-full before:bg-[#8B4513] before:opacity-0 hover:before:opacity-100 before:transition-opacity"
        >
          IT 소프트웨어 개발
        </a>
        <a
          href="/culture"
          onClick={(e) => handleNavClick("/culture", e)}
          className="relative  before:content-[''] before:absolute before:top-[-10px] before:left-1/2 before:-translate-x-1/2 before:w-2 before:h-2 before:rounded-full before:bg-[#8B4513] before:opacity-0 hover:before:opacity-100 before:transition-opacity"
        >
          문화콘텐츠
        </a>
        <a
          href="/roadpage"
          onClick={(e) => handleNavClick("/roadpage", e)}
          className="relative  before:content-[''] before:absolute before:top-[-10px] before:left-1/2 before:-translate-x-1/2 before:w-2 before:h-2 before:rounded-full before:bg-[#8B4513] before:opacity-0 hover:before:opacity-100 before:transition-opacity"
        >
          오시는 길
        </a>
      </nav>

      <div className="flex items-center md:hidden">
        <HamburgBar />
      </div>
    </header>
  );
};

export default Header;
