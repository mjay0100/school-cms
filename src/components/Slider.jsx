import React from "react";
import image41 from "../assets/images/Rectangle 41.png";
import "../assets/styles/slider.css";

const images = [
  { img: image41, id: 1 },
  { img: image41, id: 2 },
  { img: image41, id: 3 },
];
console.log(images);
const delay = 2500;

function Slider() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {images.map((image) => (
          // const{img,id} = image
          <img className="slide" key={image.id} src={image.img} />
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}></div>
        ))}
      </div>
    </div>
  );
}
export default Slider;
