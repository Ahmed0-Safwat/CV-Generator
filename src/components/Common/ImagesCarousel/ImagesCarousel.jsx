import "./styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ArrowBack from "@mui/icons-material/ChevronLeft";
import ArrowNext from "@mui/icons-material/ChevronRight";
import { Stack } from "@mui/material";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { useStore } from "../../../hooks/useStore";
import SignModal from "../../SignModal/SignModal";

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

const ImagesCarousel = ({ carouselImages, shouldClick }) => {
  const { isTabletView, isMobileView, width } = useWindowSize();
  const [slideWidth, setSlideWidth] = useState(DEFAULT_SLIDE_WIDTH);

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (isMobileView) {
      setSlideWidth(MOBILE_SLIDE_WIDTH);
    }
    if (isTabletView) {
      setSlideWidth(TABLET_SLIDE_WIDTH);
    }
  }, [isMobileView, isTabletView]);

  const getSlidesToShow = () => {
    if (width < 900) {
      return 1;
    }
    if (width <= 1366) {
      return 2;
    }
    return 3;
  };

  const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    arrows: true,
    infinite: true,
    pauseOnFocus: true,
    easing: "ease",
    slidesToShow: getSlidesToShow(),
    centerMode: true,
  };

  const handleClick = (slideData) => {
    if (shouldClick) {
      const sessionStorageUser = JSON.parse(sessionStorage.getItem("user"));

      if (!sessionStorageUser) {
        return setModalOpen(true);
      }

      useStore.setState({
        globalState: {
          ...useStore.getState().globalState,
          shouldShowStepper: true,
          selectedCV: slideData,
        },
      });
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {carouselImages.map((slideData) => {
          const { source: imageSource, title } = slideData;
          return (
            <div
              key={title}
              className="slide-content"
              onClick={() => handleClick(slideData)}
            >
              <Stack
                className="slide-image"
                sx={{
                  maxWidth: slideWidth,
                  cursor: shouldClick ? "pointer" : "default",
                }}
              >
                <img
                  src={imageSource}
                  width={slideWidth}
                  height={550}
                  alt={title}
                />
              </Stack>
            </div>
          );
        })}
      </Slider>

      {modalOpen && <SignModal open={modalOpen} onClose={handleCloseModal} />}
    </div>
  );
};

export default ImagesCarousel;
