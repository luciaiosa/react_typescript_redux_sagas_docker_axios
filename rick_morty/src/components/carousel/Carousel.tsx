import React, { FunctionComponent, useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CarouselIndicator from "./CarouselIndicator";
import CarouselSlide from "./CarouselSlide";
import "./Carousel.css";
import { clearTimeout } from "timers";
import { Slider } from "@material-ui/core";

export interface Slide {
    image: {
        source: string;
        alt: string;
    };
    linkUrl: string;
    title: string;
    subtitle: string;
}

interface CarouselProps {
    slides: Slide[];
    timer: number;
}

const Carousel: FunctionComponent<CarouselProps> = (
    props: CarouselProps
): JSX.Element => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const goToSlide = (index: number) => {
        setCurrentSlideIndex(index);
    };

    const goToPrevSlide = () => {
        let index = currentSlideIndex;
        let slides = props.slides;
        let slidesLength = slides.length;

        if (index < 1) {
            index = slidesLength;
        }
        --index;

        setCurrentSlideIndex(index);
    };

    const goToNextSlide = () => {
        let index = currentSlideIndex;
        let slides = props.slides;
        let slidesLength = slides.length - 1;

        if (index === slidesLength) {
            index = -1;
        }
        ++index;

        setCurrentSlideIndex(index);
    };

    // useEffect(() => {
    //     const nextSlide = (currentSlideIndex + 1) % props.slides.length;
    //     let id = setTimeout(() => goToSlide(nextSlide), props.timer);
    //     return () => clearTimeout(id);
    // }, [currentSlideIndex]);

    const renderSlides = (): JSX.Element[] => {
        return props.slides.map((slide: Slide, index: number) => {
            return (
                <div key={slide.title}>
                    <CarouselSlide
                        slide={slide}
                        index={index}
                        activeIndex={currentSlideIndex}
                    />
                </div>
            );
        });
    };

    const renderIndicators = (): JSX.Element[] => {
        return props.slides.map((slide: Slide, index: number) => {
            return (
                <div key={index}>
                    <CarouselIndicator
                        index={index}
                        activeIndex={currentSlideIndex}
                        onIndicatorSelected={(value: number) =>
                            goToSlide(value)
                        }
                    />
                </div>
            );
        });
    };

    return (
        <div className="carousel">
            <FaArrowLeft
                onClick={goToPrevSlide}
                size={25}
                title="Go to previous slide"
                className="carousel__arrow carousel__arrow--left"
            />
            <ul className="carousel__slides">{renderSlides()}</ul>
            <FaArrowRight
                onClick={goToNextSlide}
                size={25}
                title="Go to next slide"
                className="carousel__arrow carousel__arrow--right"
            />
            <ul className="carousel__indicators">{renderIndicators()}</ul>
        </div>
    );
};

export default Carousel;
