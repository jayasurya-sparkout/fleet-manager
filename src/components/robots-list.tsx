'use client';

import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

type RobotsListProps = {
  layout?: "list" | "map";
};

export function RobotsList({ layout = "list" }: RobotsListProps) {
  const robots = Array.from({ length: 15 });

  return (
    <div className={layout === "map" ? "relative" : ""}>
      {layout === "map" && (
        <div className="absolute inset-0 -z-10">
          <Image
            src="/brand/map-placeholder.png"
            alt="Map"
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div
        className={`grid grid-cols-1 relative gap-6 ${
          layout === "map" ? "sm:grid-cols-2" : "sm:grid-cols-4"
        }`}
      >
        {robots.map((_, idx) => {
          const imagePath = `/robots/robot${idx + 1}.png`;

          return (
            <Card
              key={idx}
              className="border-0 p-4 rounded-lg shadow-md flex flex-row bg-[#191A1E]"
            >
              <div>
                <Image
                  src={imagePath}
                  alt={`Robot ${idx + 1}`}
                  width={55}
                  height={55}
                  className="rounded-md object-contain"
                />
              </div>
              <CardHeader className="w-full p-0">
                <CardTitle>Robot {idx + 1}</CardTitle>
                <CardDescription>Sequence ID: 0{idx + 1}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
