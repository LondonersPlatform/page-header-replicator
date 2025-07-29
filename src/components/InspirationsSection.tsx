import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import inspirationCultural from "@/assets/inspiration-cultural.jpg";
import inspirationTechnology from "@/assets/inspiration-technology.jpg";
import inspirationHealth from "@/assets/inspiration-health.jpg";
import inspirationFinance from "@/assets/inspiration-finance.jpg";

const inspirationData = [
  {
    id: 1,
    category: "Cultural",
    image: inspirationCultural,
    title: "Ultimate Travel Planning Guide: 10 Tips for a Seamless Journey",
    date: "24 jun 2025",
    readTime: "6 mins",
    author: {
      name: "Jimmy Dave",
      avatar: "/placeholder.svg"
    }
  },
  {
    id: 2,
    category: "Technology",
    image: inspirationTechnology,
    title: "The Future of AI: Innovations Shaping Tomorrow",
    date: "15 sep 2025",
    readTime: "8 mins",
    author: {
      name: "Sara Kim",
      avatar: "/placeholder.svg"
    }
  },
  {
    id: 3,
    category: "Health",
    image: inspirationHealth,
    title: "5 Superfoods You Should Include in Your Diet",
    date: "30 aug 2025",
    readTime: "5 mins",
    author: {
      name: "Mark Turner",
      avatar: "/placeholder.svg"
    }
  },
  {
    id: 4,
    category: "Finance",
    image: inspirationFinance,
    title: "Investing 101: Building Your Wealth in 2025",
    date: "10 oct 2025",
    readTime: "7 mins",
    author: {
      name: "Linda Gray",
      avatar: "/placeholder.svg"
    }
  }
];

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case "cultural":
      return "bg-amber-100 text-amber-800 hover:bg-amber-200";
    case "technology":
      return "bg-blue-100 text-blue-800 hover:bg-blue-200";
    case "health":
      return "bg-green-100 text-green-800 hover:bg-green-200";
    case "finance":
      return "bg-orange-100 text-orange-800 hover:bg-orange-200";
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-200";
  }
};

const InspirationsSection = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2">
            Get inspiration for your next trip
          </h2>
          <p className="text-lg text-muted-foreground">
            Favorite destinations based on customer reviews
          </p>
        </div>
      </div>

      <Carousel className="w-full">
        <div className="flex justify-end mb-4 gap-2">
          <CarouselPrevious className="static translate-y-0 h-10 w-10" />
          <CarouselNext className="static translate-y-0 h-10 w-10" />
        </div>
        
        <CarouselContent className="-ml-2 md:-ml-4">
          {inspirationData.map((item) => (
            <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Category Badge */}
                  <Badge 
                    className={`absolute top-4 left-4 ${getCategoryColor(item.category)} border-0`}
                  >
                    {item.category}
                  </Badge>
                  
                  {/* Heart Icon */}
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-4 right-4 h-8 w-8 bg-white/80 hover:bg-white/90 backdrop-blur-sm"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={item.author.avatar} />
                        <AvatarFallback>{item.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{item.author.name}</span>
                    </div>
                    
                    <Button variant="outline" size="sm" className="text-xs">
                      Keep Reading
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default InspirationsSection;