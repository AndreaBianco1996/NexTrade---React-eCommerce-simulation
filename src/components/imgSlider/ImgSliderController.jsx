import { Icon } from "@iconify/react/dist/iconify.js";

function ImgSliderController({
  onNextImg,
  onPrevImg,
  onDirectImg,
  images,
  slideNum,
}) {
  return (
    <div className="flex w-full justify-between p-4">
      <button
        onClick={onPrevImg}
        className="my-auto flex h-8 w-8 items-center rounded-full bg-gray-50 px-2 shadow-md transition-all hover:bg-gray-100"
      >
        <Icon
          icon="iconamoon:arrow-left-2-duotone"
          width="22"
          height="22"
          className="text-gray-950"
        />
      </button>

      <div className="flex">
        {images.map((image, i) => (
          <img
            onClick={() => onDirectImg(i)}
            key={image}
            src={image}
            alt={image}
            className="mx-1 h-14 w-14 cursor-pointer rounded-sm bg-gray-50 object-contain p-1 shadow-md transition-all hover:opacity-80"
            style={{
              outlineStyle: slideNum === i ? "solid" : null,
              outlineColor: slideNum === i ? "#7c3aed" : null,
              outlineWidth: slideNum === i ? "1px" : null,
            }}
          />
        ))}
      </div>

      <button
        onClick={onNextImg}
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
  );
}

export default ImgSliderController;
