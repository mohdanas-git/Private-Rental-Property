import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function CardContainer() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 pt-4 sm:flex-row sm:gap-2 sm:p-4 sm:flex-wrap max-w-[90vw] mx-auto">
       <div className="flex flex-col justify-between gap-2 sm:gap-1">
        <Carousel className="h-fit sm:w-sm">
          <CarouselContent>
            <CarouselItem><img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" alt="" className="object-contain rounded-xl max-h-100"/></CarouselItem>
            <CarouselItem><img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg" alt="" className="object-contain rounded-xl max-h-100"/></CarouselItem>
          </CarouselContent>
        </Carousel>
        <p className="text-xl font-medium">3BHK Villa In Jhansi</p>
        <p className="text-neutral-700">$400</p>
      </div>

       <div className="flex flex-col justify-between gap-2 mx-auto sm:gap-1">
        <Carousel className="sm:w-sm">
          <CarouselContent>
            <CarouselItem><img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" alt="" className="object-contain rounded-xl max-h-100"/></CarouselItem>
            <CarouselItem><img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg" alt="" className="object-contain rounded-xl  max-h-100"/></CarouselItem>
          </CarouselContent>
        </Carousel>
        <p className="text-xl font-medium">3BHK Villa In Jhansi</p>
        <p className="text-neutral-700">$400</p>
      </div>
      
       <div className="flex flex-col justify-between gap-2 w-fit mx-auto sm:gap-1">
        <Carousel className="sm:w-sm">
          <CarouselContent>
            <CarouselItem><img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" alt="" className="object-contain rounded-xl max-h-100"/></CarouselItem>
            <CarouselItem><img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg" alt="" className="object-contain rounded-xl max-h-100"/></CarouselItem>
          </CarouselContent>
        </Carousel>
        <p className="text-xl font-medium">3BHK Villa In Jhansi</p>
        <p className="text-neutral-700">$400</p>
      </div>
    </div>
  );
}
