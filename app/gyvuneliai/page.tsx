import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Gyvuneliai() {
  const images = [
    { src: "/assets/Kite.png", alt: "Čia Kitė ir aš ją labai myliu ❤" },
    { src: "/assets/Lokis.png", alt: "O čia neklaužada Lokis 😡😡😡😡 bet aš jį vistiek MYLIU ❤❤❤❤❤" },
    { src: "/assets/Zuze.png", alt: "Zuze, ji pati mylimiausia" },
    { src: "/assets/Maze.png", alt: "Mažė, nes ji tiesiog maža ir labai greita" },
  ];

  return (
    <div className="p-4 relative max-w-xs mx-auto"> {/* Container for Carousel and Buttons */}
      <Carousel className="w-full relative"> {/* Keep everything inside Carousel */}
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className=" no-select relative group"> {/* Card hover group */}
                  <CardContent className="flex aspect-square items-center justify-center p-6 transition-all duration-300 transform group-hover:scale-105">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={200}
                      height={200}
                      className="rounded-md"
                    />
                  </CardContent>

                  {/* Hidden text that appears on hover */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm text-center text-black bg-white p-1 rounded transition-all duration-300">
                    {image.alt} {/* Text appears on hover */}
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel Controls - positioned within Carousel */}
        <CarouselPrevious className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300" />
        <CarouselNext className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300" />
      </Carousel>
    </div>
  );
}
