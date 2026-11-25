import React from "react";
import { cn } from "../../lib/tw-merge-config";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface Props {
  imageUrl: IGatsbyImageData;
  imageAlt: string;
  name: string;
  isAvailable?: boolean;
}

export default function FeaturedCard({
  imageUrl,
  imageAlt,
  name,
  isAvailable = false,
}: Props) {
  return (
    <figure>
      <GatsbyImage
        image={imageUrl}
        alt={imageAlt}
        className="aspect-7/5"
        imgClassName="object-cover object-top"
      />
      <figcaption className="flex flex-col gap-y-2 mt-3 items-start">
        <h3 className="text-small font-m-plus font-bold uppercase">{name}</h3>
        <span
          className={cn(
            "text-tiny px-2 py-1 font-bold",
            { "bg-accent/55": isAvailable },
            { "bg-gray-300": !isAvailable },
          )}>
          {isAvailable ? "AVAILABLE" : "SOLD OUT"}
        </span>
      </figcaption>
    </figure>
  );
}
