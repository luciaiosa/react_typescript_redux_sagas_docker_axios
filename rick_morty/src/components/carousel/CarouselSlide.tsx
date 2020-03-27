import React, { FunctionComponent } from "react";
import { GridListTileBar, CardActionArea } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Slide } from "./Carousel";

interface CarouselSlideProps {
    index: number;
    activeIndex: number;
    slide: Slide;
}

const CarouselSlide: FunctionComponent<CarouselSlideProps> = (
    props: CarouselSlideProps
): JSX.Element => {
    return (
        <li
            key={props.index}
            className={
                props.index === props.activeIndex
                    ? "carousel__slide carousel__slide--active"
                    : "carousel__slide"
            }
        >
            <CardActionArea>
                <img
                    src={props.slide.image.source}
                    alt={props.slide.image.alt}
                    width={800}
                    height={500}
                />
                <Link to={props.slide.linkUrl} className="header">
                    <GridListTileBar
                        title={props.slide.title}
                        subtitle={props.slide.subtitle}
                        style={{
                            height: 130,
                            fontWeight: 600
                        }}
                    />
                </Link>
            </CardActionArea>
        </li>
    );
};

export default CarouselSlide;
