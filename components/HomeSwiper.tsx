"use client";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide, SwiperSlideProps } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import { FunctionComponent } from "react";
import Link from "next/link";
import { urlForImage } from "@/app/sanity/client";

register();

export default function HomeSwiper({ slider }: { slider: any[] }) {
  return (
    <div className=" h-full relative w-full overflow-hidden my-4">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          type: "bullets",
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        scrollbar={{ draggable: true }}
        speed={1000}
        className="h-full"
      >
        {slider?.map((slide: any) => {
          return (
            <SwiperSlide className="h-full w-full bg-secondary">
              <div className="flex h-full">
                <div className="w-2/5 flex flex-col justify-center p-6">
                  <p className="font-semibold mb-2 uppercase lg:text-xl text-xs text-primary">
                    {slide.subtitle}
                  </p>
                  <h1 className=" capitalize lg:text-4xl text-3xl font-bold mb-3">
                    {slide.title}
                  </h1>
                  <p className="text-gray-600 text-xs font-semibold capitalize">
                    {" "}
                    prix:
                    <span className="ml-2 font-bold text-primary lg:text-xl text-sm">
                      {slide.price}Dh
                    </span>
                  </p>
                  <Link
                    href={slide.link}
                    className="underline font-bold text-sm mt-6"
                  >
                    Shop Now
                  </Link>
                </div>
                <div className="w-3/5 flex justify-center items-center p-4">
                  <img
                    src={urlForImage(slide.image)}
                    alt="Descriptive Alt Text"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="swiper-pagination"></div>
    </div>
  );
}
