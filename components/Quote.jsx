"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { ImQuotesLeft } from "react-icons/im";

const quote = [
  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    name: "John Doe",
  },
  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    name: "John Doe",
  },
  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    name: "John Doe",
  },
];

const Quote = () => {
  return (
    <Swiper
      // modules={[Autoplay]}
      loop={false}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="w-full max-w-[310px] md:max-w-[520px] bg-secondary rounded-lg"
    >
      {quote.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex px-8 py-6 gap-8">
              <ImQuotesLeft className="hidden xl:flex text-8xl text-tertiary" />
              <div className="flex flex-col gap-2">
                <p>{person.message}</p>
                <p className="self-end text-accent font-semibold">
                  {person.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Quote;
