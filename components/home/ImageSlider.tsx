"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import Image from "next/image";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import DarkPreview from "@/assets/slider/preview-dark.png";
import LightPreview from "@/assets/slider/preview-light.png";
import WidgetsImage from "@/assets/slider/widgets.png";

const ImageSlider2 = () => {
  const previewImages = [
    {
      id: 1,
      src: DarkPreview,
      alt: "افزونه ویجتیفای - ویجت‌های مالی و اخبار در نیو تب مرورگر",
      title: "ویجت‌های مالی و اخبار",
      description: "🎨 هرطور دوست داری شخصی‌سازی کن!",
    },
    {
      id: 2,
      src: LightPreview,
      alt: "افزونه نیو تب ویجتیفای - ویجت‌های کاربردی مدیریت وظایف",
      title: "ویجت‌های کاربردی",
      description: "✨ چیدمان ویجت‌ها رو به سلیقه خودت تنظیم کن",
    },
    {
      id: 3,
      src: WidgetsImage,
      alt: "مجموعه کامل ویجت‌های افزونه ویجتیفای - بهترین افزونه مرورگر",
      title: "مجموعه کامل ویجت‌ها",
      description: "🚀 همه ویجت‌ها رو یکجا ببین!",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev === previewImages.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 5000);
  }, [previewImages.length]);

  const nextSlide = () => {
    if (currentSlide === previewImages.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
    startAutoPlay();
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(previewImages.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
    startAutoPlay();
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    startAutoPlay();
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startAutoPlay]);

  return (
    <div className="animate-fade-in-delayed">
      <div className="relative mx-auto max-w-5xl">
        <div className="animate-slide-up-delayed aspect-video overflow-hidden rounded-3xl bg-linear-to-br from-blue-100 to-purple-100">
          <div className="relative mx-auto h-full w-full">
            {previewImages.map((image, index) => (
              <div
                key={image.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading="eager"
                  className="object-cover md:object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            type="button"
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-3 text-white transition-all hover:scale-110 hover:bg-black/70"
            aria-label="تصویر قبلی"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-3 text-white transition-all hover:scale-110 hover:bg-black/70"
            aria-label="تصویر بعدی"
          >
            <FaChevronRight size={20} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform gap-2">
            {previewImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "scale-125 bg-white"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`اسلاید ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Slide Info */}
        <div className="animate-fade-in-long-delayed absolute bottom-16 left-1/2 hidden -translate-x-1/2 transform rounded-full bg-black/70 px-6 py-3 text-white backdrop-blur-sm sm:block">
          <span className="text-sm font-medium">
            {previewImages[currentSlide].description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider2;
