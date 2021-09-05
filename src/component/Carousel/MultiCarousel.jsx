import React, { useEffect, useRef, useState } from "react";
import MainCard from "../Cards/main-card";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import "./carousel.css";

const Carousel = ({ data }) => {
    const [width, setWidth] = useState(0);
    const [slidesPerPage, setSlidesPerPage] = useState(0);
    const [currentPosition, setCurrentPosition] = useState(0);
    const [currentMargin, setCurrentMargin] = useState(0);
    const [slidesCount, setSlidesCount] = useState(0);
    const [necessaryMargin, setNecessaryMargin] = useState(0);

    const myRef = useRef(null);

    useEffect(() => {
        window.addEventListener("resize", checkWidth);
        setParams();
    }, []);
    function checkWidth() {
        const containerWidth = myRef.current.clientWidth;
        setWidth(containerWidth);

        setParams(containerWidth);
    }
    const setParams = (w) => {
        let perPageSlide = 0;
        if (w < 551) {
            perPageSlide = 1;
        } else {
            if (w < 901) {
                perPageSlide = 2;
            } else {
                if (w < 1101) {
                    perPageSlide = 3;
                } else {
                    perPageSlide = 4;
                }
            }
        }
        setSlidesPerPage(perPageSlide);
        setSlidesCount(data.length - perPageSlide);
        if (currentPosition > slidesCount) {
            setCurrentPosition((prevState) => prevState - slidesPerPage);
        }
        setCurrentMargin(-currentPosition * (100 / perPageSlide));
        setNecessaryMargin(-currentPosition * (100 / perPageSlide));
    };

    function slideLeft() {
        if (currentPosition != slidesCount) {
            setNecessaryMargin(currentMargin - 100 / slidesPerPage);

            setCurrentMargin((prevState) => prevState - 100 / slidesPerPage);
            setCurrentPosition((prevState) => prevState + 1);
        }
    }

    function slideRight() {
        if (currentPosition != 0) {
            setNecessaryMargin(currentMargin + 100 / slidesPerPage);

            setCurrentMargin((prevState) => prevState + 100 / slidesPerPage);
            setCurrentPosition((prevState) => prevState - 1);
        }
    }
    console.log(currentPosition);
    return (
        <div id='container' ref={myRef}>
            <div id='slider-container'>
                <button
                    onClick={slideRight}
                    className='btn rounded-full text-white cursor-pointer'
                    style={{
                        backgroundColor:
                            currentPosition == 0 ? "gray" : "rgb(15, 52, 96)",
                        cursor:
                            currentPosition == 0 ? "not-allowed" : "pointer",
                    }}
                    disabled={currentPosition == 0}
                >
                    <AiOutlineArrowLeft />
                </button>
                <div id='slider' style={{ marginLeft: necessaryMargin + "%" }}>
                    {data.map((item, index) => (
                        <div key={`${index}`} className='slide'>
                            <MainCard item={item} />
                        </div>
                    ))}
                </div>
                <button
                    onClick={slideLeft}
                    className='btn rounded-full text-white cursor-pointer'
                    style={{
                        backgroundColor:
                            currentPosition == data.length - slidesPerPage
                                ? "gray"
                                : "rgb(15, 52, 96)",
                        cursor:
                            currentPosition == data.length - slidesPerPage
                                ? "not-allowed"
                                : "pointer",
                    }}
                    disabled={currentPosition == data.length - slidesPerPage}
                >
                    <AiOutlineArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
