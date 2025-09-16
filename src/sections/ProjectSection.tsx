// src/sections/ProjectSection.jsx
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";
import "./ProjectSection.css";
import VideoComponent from "../components/VideoComps/VideoComponent";
//
export default function ProjectSection() {
  const videos = [
    { id: 1, src: "https://videos12323.s3.ap-south-1.amazonaws.com/FashionApp.mp4", poster: "/images/FashionApp.PNG", title: "Fashion App" },
    { id: 2, src: "https://videos12323.s3.ap-south-1.amazonaws.com/UberApp.mp4", poster: "/images/UberApp.PNG", title: "Uber App" },
    { id: 3, src: "https://videos12323.s3.ap-south-1.amazonaws.com/DashBoard.mp4", poster: "/images/DashBoard.PNG", title: "Admin DashBoard" },
    { id: 4, src: "https://videos12323.s3.ap-south-1.amazonaws.com/DSA.mp4", poster: "/images/DSA.PNG", title: "DSA Project" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // Optional: Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!swiperRef.current) return;
      
      if (e.key === "ArrowLeft") {
        swiperRef.current.swiper.slidePrev();
      } else if (e.key === "ArrowRight") {
        swiperRef.current.swiper.slideNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="project-section">
      <div className="carousel-container">
        <Swiper
          ref={swiperRef}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          // Disable all automatic behaviors
          autoplay={false}
          allowTouchMove={true}
          simulateTouch={true}
          resistance={true}
          resistanceRatio={0.85}
          followFinger={true}
          // Prevent any automatic sliding
          freeMode={false}
          watchOverflow={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          }}
          modules={[EffectCoverflow]}
          onSwiper={(swiper) => {
            setActiveIndex(swiper.realIndex ?? swiper.activeIndex);
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex ?? swiper.activeIndex);
          }}
          className="mySwiper"
        >
          {videos.map((v, i) => (
            <SwiperSlide key={v.id} className="card video-slide">
              <VideoComponent
                src={v.src}
                myVideo={v}
                isActive={i === activeIndex}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        
   
        {/* Optional navigation buttons */}
        <div className="swiper-nav-buttons">
          <button 
            className="swiper-button-prev"
            onClick={() => swiperRef.current?.swiper.slidePrev()}
          >
            ‹
          </button>
          <button 
            className="swiper-button-next"
            onClick={() => swiperRef.current?.swiper.slideNext()}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}