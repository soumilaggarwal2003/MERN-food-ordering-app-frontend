import { Restaurant } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Dot } from "lucide-react";
import React from "react";

type Props = {
  restaurant: Restaurant;
};

const RestaurantInfo = ({ restaurant }: Props) => {
  const cuisines = restaurant.cuisines;
  const renderCuisines = () => {
    const groups = [];
    for (let i = 0; i < cuisines.length; i += 10) {
      groups.push(cuisines.slice(i, i + 10));
    }

    return groups.map((group, index) => (
      <div className="flex" key={index}>
        {group.map((cuisine, subIndex) => (
          <React.Fragment key={subIndex}>
            <span>{cuisine}</span>
            {subIndex < group.length - 1 && <Dot />}
          </React.Fragment>
        ))}
      </div>
    ));
  };

  return (
    <Card className="border-sla">
      <CardHeader>
        <CardTitle className="text-3xl font-bold tracking-tight">
          {restaurant.restaurantName}
        </CardTitle>
        <CardDescription>
          {restaurant.city} , {restaurant.country}
        </CardDescription>
      </CardHeader>
      {/* <CardContent className="flex">
        {restaurant.cuisines.map((item, index) => (
          <span className="flex">
            <span>{item}</span>
            {index < restaurant.cuisines.length - 1 && <Dot />}
          </span>
        ))}
      </CardContent> */}
      <CardContent>{renderCuisines()}</CardContent>
    </Card>
  );
};

export default RestaurantInfo;
