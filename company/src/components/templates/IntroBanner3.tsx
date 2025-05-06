import React, { useRef, useEffect, useState } from "react";

const IntroBanner3: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className={`w-full h-[120vh] pt-20 flex justify-center items-center transition-colors duration-700 ${
        isInView ? "bg-black" : "bg-slate-600"
      }`}
    >
      <video
        width="100%"
        height="100%"
        controls
        className="w-full h-auto max-h-[90vh] object-contain px-4 sm:px-8 md:px-0"
      >
        <source src="/video/videoIntro.mp4" type="video/mp4" />
        브라우저가 video 태그를 지원하지 않습니다.
      </video>
    </section>
  );
};

export default IntroBanner3;
