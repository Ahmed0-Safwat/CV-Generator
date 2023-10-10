import "./styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ArrowBack from "@mui/icons-material/ChevronLeft";
import ArrowNext from "@mui/icons-material/ChevronRight";
import { Stack, Typography } from "@mui/material";
import { useWindowSize } from "../../../hooks/useWindowSize";

export interface CarouselImage {
  id: number;
  source: string;
  title: string;
  subtitle: string;
}
interface ImagesCarouselProps {
  carouselImages: CarouselImage[];
}

const POINTS_COUNT = 4;
const POINT_WIDTH = 25;
const DEFAULT_SLIDE_WIDTH = 480;
const TABLET_SLIDE_WIDTH = 400;
const MOBILE_SLIDE_WIDTH = 280;

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <ArrowNext
      sx={{
        color: "#232932",
        display: "block",
        position: "absolute",
        right: "50%",
        bottom: "40px",
        transform: `translateX(calc(100% + ${
          (POINTS_COUNT / 2 + 0.5) * POINT_WIDTH
        }px + ${POINT_WIDTH * 2}px))`,
        zIndex: "1",
        ":hover": { opacity: "0.7" },
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;

  return (
    <ArrowBack
      sx={{
        color: "#232932",
        opacity: 1,
        display: "block",
        position: "absolute",
        left: "50%",
        bottom: "40px",
        transform: `translateX(calc(-100% - ${
          (POINTS_COUNT / 2 + 0.5) * POINT_WIDTH
        }px - ${POINT_WIDTH * 2}px)) `,
        zIndex: "1",
        ":hover": { opacity: "0.7" },
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
};

const ImagesCarousel = ({ carouselImages }: ImagesCarouselProps) => {
  const { width: windowWidth, isTabletView, isMobileView } = useWindowSize();
  const [slideWidth, setSlideWidth] = useState(DEFAULT_SLIDE_WIDTH);

  useEffect(() => {
    if (isMobileView) {
      setSlideWidth(MOBILE_SLIDE_WIDTH);
    }
    if (isTabletView) {
      setSlideWidth(TABLET_SLIDE_WIDTH);
    }
  }, [isMobileView, isTabletView]);

  const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    arrows: true,
    infinite: true,
    pauseOnFocus: true,
    easing: "ease",
    slidesToShow: Math.floor(windowWidth / slideWidth),
    centerMode: true,
  };
  return (
    <div className="carousel">
      <Slider {...settings}>
        {carouselImages.map((slideData) => {
          const { source: imageSource, title, subtitle } = slideData;
          return (
            <div className="slide-content">
              <Stack className="slide-image" sx={{ maxWidth: slideWidth }}>
                <img
                  src={imageSource}
                  width={slideWidth}
                  height={320}
                  alt={title}
                />
              </Stack>
              {/* <div className="slide-text">
                <Typography sx={{ color: '#FFFFFF' }} variant="h4" className="title" mb={1}>
                  {title}
                </Typography>
                <Typography color="text.secondary" className="subtitle" sx={{ fontWeight: 500, color: 'rgba(255, 255, 255, 0.68)' }}>
                  {subtitle}
                </Typography>
              </div> */}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ImagesCarousel;
