import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { PropertyData as data } from "./data";

export default function CardContainer({category, trending}) {
   let filteredData = data;
   if(category){
    filteredData = data.filter(item => item.category.toLowerCase() === category.toLowerCase());
   } else if(trending){
    filteredData = data.filter(item => item.trending === true);
   }
  return (
    <div className="flex flex-col gap-8 pt-4 max-w-[90vw] sm:flex-row sm:p-4 sm:flex-wrap sm:w-fit mx-auto sm:px-0 sm:gap-4 md:mx-auto md:w-full lg:gap-5">
       {filteredData.map((item)=>(
        (item.category == category || item.category)?
        <div className="flex flex-col gap-2 mx-auto sm:gap-1 sm:mx-0 max-w-fit sm:w-[43.7vw] sm:max-w-84 md:min-w-[28vw] md:flex-1 lg:flex-0 lg:min-w-[28vw] lg:mx-0">
        <Carousel>
          <CarouselContent>
            <CarouselItem><img src={`${item.img1_url}`} alt="" className="object-cover rounded-xl aspect-video"/></CarouselItem>
            <CarouselItem><img src={`${item.img2_url}`} alt="" className="object-cover rounded-xl aspect-video"/></CarouselItem>
            <CarouselItem><img src={`${item.img3_url}`} alt="" className="object-cover rounded-xl aspect-video"/></CarouselItem>
          </CarouselContent>
        </Carousel>
        <div className="flex justify-between px-2">
          <p className="text-xl font-medium">{item.title}</p>
        <p className="text-neutral-700">${item.rent}</p>
        </div>
        <p className="text-neutral-700 px-2">{item.location}</p>
      </div>: <div></div>
       ))}
    </div>
  );
}
