import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

function ImgSlider({ images, description }) {
  const [slideNum, setSlideNum] = useState(0);

  function handleNextImg() {
    setSlideNum((prev) => {
      if (prev === images.length - 1) return 0;
      return prev + 1;
    });
  }

  function handlePreviousImg() {
    setSlideNum((prev) => {
      if (prev === 0) return images.length - 1;
      return prev - 1;
    });
  }

  return (
    <div className="h-80 w-[500px]">
      <div className="h-full overflow-hidden">
        <div
          className="m-auto flex h-full w-full shrink-0 grow-0 transition-all duration-500"
          style={{ translate: `${-100 * slideNum}%` }}
        >
          {images.map((image) => (
            <img
              className="min-w-[500px] object-contain"
              src={image}
              alt={description}
              key={image}
            />
          ))}
        </div>
      </div>

      <div className="my-3 flex justify-between rounded-sm bg-black/10 p-3">
        <button
          onClick={handlePreviousImg}
          className="my-auto flex h-8 w-8 items-center rounded-full bg-gray-50 px-2 shadow-md transition-all hover:bg-gray-100"
        >
          <Icon
            icon="iconamoon:arrow-left-2-duotone"
            width="22"
            height="22"
            className="text-gray-950"
          />
        </button>
        <button
          onClick={handleNextImg}
          className="my-auto flex h-8 w-8 items-center rounded-full bg-gray-50 px-2 shadow-md transition-all hover:bg-gray-100"
        >
          <Icon
            icon="iconamoon:arrow-right-2-duotone"
            width="22"
            height="22"
            className="text-gray-950"
          />
        </button>
      </div>
    </div>
  );
}

export default ImgSlider;
