import React from "react";

interface SlideMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const SlideMenu: React.FC<SlideMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed top-12 right-0 h-full w-full shadow-lg transform transition-transform duration-500 ease-in-out text-black ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } z-[9999]`}
    >
      <nav className="h-[100vh] flex flex-col justify-center mt-12 space-y-6 gap-8 text:2xl md:text-4xl p-6 bg-white">
        <a href="/intro" onClick={toggleMenu} className="hover:text-blue-500 ">
          회사소개
        </a>
        <a href="/video" onClick={toggleMenu} className="hover:text-blue-500">
          영상콘텐츠
        </a>
        <a
          href="/software"
          onClick={toggleMenu}
          className="hover:text-blue-500"
        >
          IT 소프트웨어 개발
        </a>
        <a href="/culture" onClick={toggleMenu} className="hover:text-blue-500">
          문화콘텐츠
        </a>
        <a
          href="/roadpage"
          onClick={toggleMenu}
          className="hover:text-blue-500"
        >
          오시는 길
        </a>
      </nav>
    </div>
  );
};

export default SlideMenu;
