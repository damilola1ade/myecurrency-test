"use client";

import { useRef } from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const content = [
  {
    review:
      "Works great! Just use it and then relax, I fall asleep with no problem every time I use it.",
    name: "Rachel Dill",
  },
  {
    review:
      "It really helps me fall right to sleep compared to melatonin pills.",
    name: "Javier Mendez",
  },
  {
    review:
      "I've tried a lot of things to sleep but none of those worked, so I tried Cloudy and wow! I sleep like a baby now.",
    name: "Naomi Nwazurike",
  },
  {
    review:
      "It really helps me fall right to sleep compared to melatonin pills.",
    name: "Nate Jacobs",
  },
];

const ProductBox = ({ review, name }: { review: string; name: string }) => {
  return (
    <div className="shadow-xl min-h-[350px] p-8 flex flex-col gap-2 w-[280px] text-light relative">
      <Image src="/pen.png" width={200} height={200} alt="pen" />
      <p className="mt-6 italic text-sm">{review}</p>
      <div className="flex flex-col mt-4 gap-2 absolute bottom-5">
        <p className="text-sm font-extrabold">{name}</p>
        <Image src="/stars.png" width={80} height={80} alt="stars" />
      </div>
    </div>
  );
};

export default function ProductReviews() {
  const autoplayRef = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <>
      <div className=" bg-light w-full p-[0.7px] opacity-20 rounded-md" />
      <div className="flex flex-col gap-12">
        <h1 className="font-extrabold text-2xl text-light">Product Reviews</h1>
        <Carousel
          plugins={[autoplayRef.current]}
          opts={{
            align: "center",
            loop: true,
          }}
          className="max-w-[360px] md:max-w-[720px] lg:max-w-[1080px]"
        >
          <CarouselContent>
            {content.map((item, idx) => (
              <CarouselItem key={idx} className="basis-1/1 lg:basis-1/3">
                <ProductBox review={item.review} name={item.name} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}
