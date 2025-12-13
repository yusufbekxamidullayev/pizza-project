import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HomeCards from "../../companents/home/HomeCards";

const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

function MyCarousel({ images }) {
    return (
        <Carousel
            responsive={responsive}
            swipeable
            draggable
            showDots
            infinite
            autoPlay={false}
            keyBoardControl
        >
            {images.map((src, i) => (
                <HomeCards key={i} src={src} />
            ))}
        </Carousel>
    );
}

export default MyCarousel;
