import React from "react";
import urlBuilder from "@sanity/image-url";

function SanityImage({ source, width, height }) {
  if (source) {
    const image = urlBuilder({
      projectId: "gcghkey5",
      dataset: "production",
    }).image(source);

    if (width) {
      image.width(width);
    }
    if (height) {
      image.height(height);
    }

    return (
      <img
        src={image.url()}
        className="w-full h-full object-cover"
        alt={"image"}
      />
    );
  }
}

export default SanityImage;
