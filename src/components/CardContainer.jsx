import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CardContainer() {
  return (
    <div className="flex flex-col gap-8 pt-4">
      <div className="flex flex-col justify-between mx-auto">
        <Carousel>
          <CarouselContent>
            <CarouselItem><img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" alt="" className="rounded-xl"/></CarouselItem>
            <CarouselItem><img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg" alt="" className="rounded-xl"/></CarouselItem>
          </CarouselContent>
        </Carousel>
        <p className="text-xl font-medium">3BHK Villa In Jhansi</p>
        <p className="text-neutral-700">$400</p>
      </div>


       <div className="flex flex-col justify-between w-fit mx-auto">
        <Carousel className="w-xs">
          <CarouselContent>
            <CarouselItem><img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" alt="" className="object-contain rounded-xl"/></CarouselItem>
            <CarouselItem><img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg" alt="" className="object-contain rounded-xl"/></CarouselItem>
          </CarouselContent>
        </Carousel>
        <p className="text-xl font-medium">3BHK Villa In Jhansi</p>
        <p className="text-neutral-700">$400</p>
      </div>

       <div className="flex flex-col justify-between w-fit mx-auto">
        <Carousel className="w-xs">
          <CarouselContent>
            <CarouselItem><img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" alt="" className="object-contain rounded-xl"/></CarouselItem>
            <CarouselItem><img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg" alt="" className="object-contain rounded-xl"/></CarouselItem>
          </CarouselContent>
        </Carousel>
        <p className="text-xl font-medium">3BHK Villa In Jhansi</p>
        <p className="text-neutral-700 font-normal">$400</p>
      </div>
    </div>
  );
}
