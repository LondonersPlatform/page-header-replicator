import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Bed, 
  Plane, 
  Car, 
  MapPin, 
  Calendar,
  Users,
  Search,
  ArrowUpDown,
  Mountain
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TravelSearchForm = () => {
  return (
    <Card className="w-full max-w-6xl mx-auto bg-background/95 backdrop-blur-sm border shadow-lg">
      <CardContent className="p-6">
        {/* Service Tabs */}
        <Tabs defaultValue="flight" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="hotels" className="flex items-center gap-2">
              <Bed className="h-4 w-4" />
              <span className="hidden sm:inline">Hotels</span>
            </TabsTrigger>
            <TabsTrigger value="flight" className="flex items-center gap-2">
              <Plane className="h-4 w-4" />
              <span className="hidden sm:inline">Flight</span>
            </TabsTrigger>
            <TabsTrigger value="rental" className="flex items-center gap-2">
              <Car className="h-4 w-4" />
              <span className="hidden sm:inline">Rental</span>
            </TabsTrigger>
            <TabsTrigger value="experiences" className="flex items-center gap-2">
              <Mountain className="h-4 w-4" />
              <span className="hidden sm:inline">Experiences</span>
            </TabsTrigger>
            <TabsTrigger value="transfer" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="hidden sm:inline">Transfer</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="flight" className="space-y-4">
            {/* Trip Type Selection */}
            <RadioGroup defaultValue="round-trip" className="flex gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="round-trip" id="round-trip" />
                <Label htmlFor="round-trip" className="flex items-center gap-2">
                  <ArrowUpDown className="h-4 w-4" />
                  Round Trip
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="one-way" id="one-way" />
                <Label htmlFor="one-way">One Way</Label>
              </div>
            </RadioGroup>

            {/* Search Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Where From */}
              <div className="space-y-2">
                <Label htmlFor="from" className="text-sm font-medium">Where From</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="from"
                    placeholder="Search for an airport"
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Where To */}
              <div className="space-y-2">
                <Label htmlFor="to" className="text-sm font-medium">Where To</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="to"
                    placeholder="Search for an airport"
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Check In */}
              <div className="space-y-2">
                <Label htmlFor="checkin" className="text-sm font-medium">Check in</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="checkin"
                    placeholder="Add date"
                    className="pl-10"
                    type="date"
                  />
                </div>
              </div>

              {/* Check Out */}
              <div className="space-y-2">
                <Label htmlFor="checkout" className="text-sm font-medium">Check out</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="checkout"
                    placeholder="Add date"
                    className="pl-10"
                    type="date"
                  />
                </div>
              </div>

              {/* Travelers & Class */}
              <div className="space-y-2">
                <Label htmlFor="travelers" className="text-sm font-medium">Travelers & Class</Label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="travelers"
                    placeholder="Add Travelers"
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="flex justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-orange hover:bg-orange/90 text-orange-foreground px-8 py-3 rounded-full"
              >
                <Search className="h-5 w-5 mr-2" />
                Search Flights
              </Button>
            </div>
          </TabsContent>

          {/* Other tab contents would be similar */}
          <TabsContent value="hotels" className="text-center py-8">
            <p className="text-muted-foreground">Hotel search form coming soon...</p>
          </TabsContent>
          
          <TabsContent value="rental" className="text-center py-8">
            <p className="text-muted-foreground">Car rental search form coming soon...</p>
          </TabsContent>
          
          <TabsContent value="experiences" className="text-center py-8">
            <p className="text-muted-foreground">Experience search form coming soon...</p>
          </TabsContent>
          
          <TabsContent value="transfer" className="text-center py-8">
            <p className="text-muted-foreground">Transfer search form coming soon...</p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TravelSearchForm;
