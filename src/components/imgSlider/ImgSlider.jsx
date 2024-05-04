import { useState } from "react";
import ImgSliderController from "./ImgSliderController";

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

  function handleDirectImgClick(value) {
    setSlideNum(value);
  }

  return (
    <div className="flex h-[500px] max-w-[700px] flex-col items-center overflow-hidden">
      <div className="flex overflow-hidden rounded-md bg-white">
        {images.map((image) => (
          <div
            key={image}
            className="m-auto flex h-full w-full shrink-0 grow-0 transition-all duration-500"
            style={{ translate: `${-100 * slideNum}%` }}
          >
            <img
              className="w-[700px] object-contain px-4 py-4"
              src={image}
              alt={description}
            />
          </div>
        ))}
      </div>

      <ImgSliderController
        onNextImg={handleNextImg}
        onPrevImg={handlePreviousImg}
        images={images}
        onDirectImg={handleDirectImgClick}
        slideNum={slideNum}
      />
    </div>
  );
}

export default ImgSlider;
