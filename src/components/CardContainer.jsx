import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function CardContainer() {
  return (
    <div className="flex flex-col gap-8 pt-4 max-w-[90vw] sm:flex-row sm:p-4 sm:flex-wrap sm:w-fit mx-auto sm:px-0 sm:gap-4 md:mx-auto md:w-full lg:justify-between">
       <div className="flex flex-col justify-between gap-2 mx-auto sm:gap-1 sm:mx-0 max-w-fit sm:w-[43.7vw] sm:max-w-84 md:w-55 md:flex-1 lg:flex-0 lg:min-w-[29vw]">
        <Carousel>
          <CarouselContent>
            <CarouselItem><img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" alt="" className="object-contain rounded-xl"/></CarouselItem>
            <CarouselItem><img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg" alt="" className="object-contain rounded-xl"/></CarouselItem>
          </CarouselContent>
        </Carousel>
        <p className="text-xl font-medium">3BHK Villa In Jhansi</p>
        <p className="text-neutral-700">$400</p>
      </div>

      <div className="flex flex-col justify-between gap-2 mx-auto sm:gap-1 sm:mx-0 max-w-fit sm:w-[43.7vw] sm:max-w-84 md:w-55 md:flex-1 lg:flex-0 lg:min-w-[29vw]">
        <Carousel>
          <CarouselContent>
            <CarouselItem><img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" alt="" className="object-contain rounded-xl"/></CarouselItem>
            <CarouselItem><img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg" alt="" className="object-contain rounded-xl"/></CarouselItem>
          </CarouselContent>
        </Carousel>
        <p className="text-xl font-medium">3BHK Villa In Jhansi</p>
        <p className="text-neutral-700">$400</p>
      </div>
      
      <div className="flex flex-col justify-between gap-2 mx-auto sm:gap-1 sm:mx-0 max-w-fit sm:w-[43.7vw] sm:max-w-84 md:w-55 md:flex-1 lg:flex-0 lg:min-w-[29vw] max-w-[30vw]">
        <Carousel>
          <CarouselContent>
            <CarouselItem><img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" alt="" className="object-contain rounded-xl"/></CarouselItem>
            <CarouselItem><img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg" alt="" className="object-contain rounded-xl"/></CarouselItem>
          </CarouselContent>
        </Carousel>
        <p className="text-xl font-medium">3BHK Villa In Jhansi</p>
        <p className="text-neutral-700">$400</p>
      </div>
    </div>
  );
}
