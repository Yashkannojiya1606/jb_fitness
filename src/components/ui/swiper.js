
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRef, useState, useEffect } from "react";
import { Button } from "../../components/ui/button";

const sliderContent = [
  {
    image: "/images/banner_1.webp",
    title: "Get Fit Today",
    subtitle: "Join the best gym in town",
    buttonText: "Join Now",
    label: "Fitness Goals",
  },
  {
    image: "/images/banner_2.webp",
    title: "Transform Your Body",
    subtitle: "Achieve your fitness goals",
    buttonText: "Join Now",
    label: "Transformation",
  },
  {
    image: "/images/banner_3.webp",
    title: "Healthy Lifestyle",
    subtitle: "Start your journey now",
    buttonText: "Join Now",
    label: "Lifestyle",
  },
  {
    image: "/images/banner_4.webp",
    title: "Push Your Limits",
    subtitle: "Train harder every day",
    buttonText: "Join Now",
    label: "Limit Breaker",
  },
];

export default function HeroSlider() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const delay = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sliderContent.length);
    }, delay);
    return () => clearInterval(interval);
  }, []);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    swiperRef.current.swiper.slideTo(index);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto rounded-xl overflow-hidden mt-16 
      shadow-[rgba(0,0,0,0.3)_0px_10px_20px] 
      dark:shadow-[rgba(255,255,255,0.15)_0px_10px_20px] 
      bg-white/80 dark:bg-white/5 border border-white/10 backdrop-blur-sm">

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        ref={swiperRef}
        className="h-[600px]"
      >
        {sliderContent.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center">
                <div className="max-w-xl ml-6 md:ml-10 text-white space-y-6 -mt-10">
                  <h2 className="text-[43px] font-extrabold leading-tight font-serif">
                    {item.title}
                  </h2>
                  <p className="text-[18px] font-medium font-sans max-w-[500px] leading-normal">
                    {item.subtitle}
                  </p>
                  <Button
                    size="lg"
                    className="bg-transparent text-white border border-white hover:bg-white hover:text-black font-semibold text-lg transition-colors duration-300"
                  >
                    {item.buttonText}
                  </Button>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Progress Bar + Label */}
      <div className="absolute bottom-8 left-0 w-full z-50 flex justify-between items-end px-4">
        {sliderContent.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1 mx-1">
            <div
              onClick={() => handleClick(index)}
              className={`
                relative w-[85%] h-[4px] bg-white/30 rounded overflow-hidden cursor-pointer
                ${index === 0 ? "ml-[6px]" : ""}
                ${index === sliderContent.length - 1 ? "mr-[6px]" : ""}
              `}
            >
              {activeIndex === index && (
                <div className="absolute left-0 top-0 h-full w-full bg-white transition-all duration-[5000ms]" />
              )}
            </div>
            <span className="mt-2 text-white text-xs md:text-sm font-light tracking-wide text-center leading-tight">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
