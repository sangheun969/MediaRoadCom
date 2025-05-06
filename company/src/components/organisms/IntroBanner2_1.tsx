import React, { useRef, useEffect, useState } from "react";

const DiagonalReveal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const introTextRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
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

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (!isInView) return;

      if (
        !leftRef.current ||
        !rightRef.current ||
        !textRef.current ||
        !introTextRef.current
      )
        return;

      if (event.deltaY > 0 && !isOpen) {
        leftRef.current.style.transform = "translate(-100%, -100%)";
        rightRef.current.style.transform = "translate(100%, 100%)";
        textRef.current.style.opacity = "0";
        introTextRef.current.style.opacity = "1";
        introTextRef.current.style.transform = "translateY(0)";
        setIsOpen(true);
      } else if (event.deltaY < 0 && isOpen) {
        leftRef.current.style.transform = "translate(0, 0)";
        rightRef.current.style.transform = "translate(0, 0)";
        textRef.current.style.opacity = "1";
        introTextRef.current.style.opacity = "0";
        introTextRef.current.style.transform = "translateY(50px)";
        setIsOpen(false);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: true });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [isOpen, isInView]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[200vh] overflow-hidden bg-slate-600"
    >
      <div
        ref={leftRef}
        className="absolute top-0 left-0 w-1/2 h-full bg-black z-10 transition-transform duration-1000"
        style={{
          clipPath: "polygon(0 0, 100% 0, 10% 100%, 0% 100%)",
          transform: "translate(0, 0)",
        }}
      />
      <div
        ref={rightRef}
        className="absolute top-0 right-0 w-1/2 h-full bg-black z-10 transition-transform duration-1000"
        style={{
          clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100%)",
          transform: "translate(0, 0)",
        }}
      />
      <h1
        ref={textRef}
        className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-4xl font-bold tracking-widest transition-opacity duration-500"
      >
        convergence society
      </h1>
      <div
        ref={introTextRef}
        className="absolute bottom-[300px] p-12 -translate-x-1/2 w-11/12 md:w-2/3 text-white text-lg md:text-xl leading-relaxed opacity-0 translate-y-12 transition-all duration-700 z-20"
      >
        <p className="mb-4">
          21세기 현대사회를 융합의 사회 혹은 통섭의 사회라 말합니다.
        </p>
        <p className="mb-4">다양한 사회적 분야와 학문적 영역들을 추구합니다.</p>
        <p className="mb-4">
          상호 교류하면서 새로운 창의성이 발현되고 또다른 차원의 발전을 이루게
          됩니다.
        </p>
        <p>
          저희 미디어로드는 열린 마음으로 정책개발에서 교육 및 영상사업
          이르기까지 다양한 지식의 영역들을 수용하고 새로운 창의성을 구현하는
          정신을 기본으로 합니다.
        </p>
        <div className="mt-[50px]">
          <p className="mb-4">
            미디어로드는 전문가를 통한 최신기법의 조사/연구/분석활동으로 중앙
            정부나 지방정부, 기업이나 단체의 커뮤니케이션 활동에 적극 기여하고,
          </p>
          <p className="mb-4">
            영상문화 콘텐츠를 기획, 제작하여 고객의 니즈에 부응합니다.
          </p>
          <p className="mb-4">
            개방, 융합, 창의성 그리고 협력과 연대를 바탕으로 우리사회에 기여하는
            기업이 되기 위해 최선을 다하겠습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiagonalReveal;
