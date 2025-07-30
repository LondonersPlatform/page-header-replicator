import React from "react";

type Destination = {
  name: string;
  image: string;
  tours: number;
  category: string; // Add category like "Cultural"
};

const destinations: Destination[] = [
  { name: "Venice", image: "https://source.unsplash.com/400x300/?venice", tours: 150, category: "Cultural" },
  { name: "Amsterdam", image: "https://source.unsplash.com/400x300/?amsterdam", tours: 90, category: "Technology" },
  { name: "Budapest", image: "https://source.unsplash.com/400x300/?budapest", tours: 130, category: "Health" },
  { name: "Portugal", image: "https://source.unsplash.com/400x300/?portugal", tours: 80, category: "Finance" },
];

const TopDestinations: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-900">Top Destinations</h2>
      <p className="text-gray-500 mt-2 mb-10">
        Favorite destinations of professional tourists
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 min-h-[30vh] lg:grid-cols-3 xl:grid-cols-4 gap-6">
     
      </div>
    </section>
  );
};

export default TopDestinations;
