"use client";

import { useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const content = [
  {
    review:
      "Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.",
    name: "John Matthews",
  },
  {
    review:
      "I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepstiq.",
    name: "Eunice Oliver",
  },
  {
    review: "It’s a really good product and helps me sleep better at night!",
    name: "Laura Davies",
  },
  {
    review:
      "Helps me relax and remember to breathe. Stress level definitely goes down",
    name: "Jane Bocks",
  },
];

const ReviewBox = ({ review, name }: { review: string; name: string }) => {
  return (
    <div className="bg-cream min-h-[170px] p-8 flex flex-col gap-2 w-[280px] text-light relative">
      <p className="italic text-sm">{review}</p>
      <div className="flex flex-col mt-4 gap-2 absolute bottom-5">
        <p className="text-sm font-extrabold">{name}</p>
        <Image src="/stars.png" width={80} height={80} alt="stars" />
      </div>
    </div>
  );
};

export default function ReviewCarousel() {
  const autoplayRef = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
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
            <ReviewBox review={item.review} name={item.name} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
