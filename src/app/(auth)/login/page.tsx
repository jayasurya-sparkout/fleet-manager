"use client";

import { LoginForm } from "@/components/login-form";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  const slides = [
    "/images/sign-in.svg",
    "/images/sign-in.svg",
    "/images/sign-in.svg",
    "/images/sign-in.svg",
  ];

  return (
    <div className="grid min-h-screen items-center justify-between max-w-[1440px] w-full mx-auto lg:grid-cols-2">
      <div className="flex relative flex-col items-center justify-end">
        <div className=" hidden w-[628px] h-[700px] lg:flex justify-end overflow-hidden">
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full h-full flex justify-end">
                <img
                  src={slide || "/placeholder.svg"}
                  alt={`Slide ${index + 1}`}
                  className="h-full object-cover transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="transform hidden  absolute -bottom-6 left-3/5 -translate-x-1/2 md:flex space-x-2 items-center">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-full transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer ${
                index === currentSlide
                  ? "bg-primary w-[14px] h-[14px] shadow-lg"
                  : "bg-[#424346] w-[10px] h-[10px] hover:bg-[#525256]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full mx-auto flex flex-col items-center gap-[50px] max-w-[524px]">
            <Image
              alt="Neural Pilot"
              width={161}
              height={70}
              src={"/brand/logo.svg"}
            />
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
