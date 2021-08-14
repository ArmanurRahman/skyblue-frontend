import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MainCard from "../Cards/main-card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        //overflow: "hidden",
        justifyContent: "center",
        flexDirection: "row",
        width: "100%",
        transform: "translateX(0)",
        marginBottom: 20,
        //transition: "all 0.5s ease-in-out",
        //flexWrap: "none !important",
    },
    slider: {
        //width: "350px",
        //overflow: "hidden",
    },
}));

const MainCardHolder = ({ data }) => {
    const classes = useStyles();
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1300 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1300, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div className={classes.container}>
            <Carousel
                ssr
                partialVisbile
                deviceType={"desktop"}
                itemClass='image-item'
                responsive={responsive}
            >
                {data.map((item, index) => {
                    return <MainCard key={index} item={item} />;
                })}
            </Carousel>
        </div>
    );
};

export default MainCardHolder;
/*
<Carousel
                ssr
                partialVisbile
                deviceType={"desktop"}
                itemClass='image-item'
                responsive={responsive}
            >
                {data.map((item, index) => {
                    return <MainCard key={index} item={item} />;
                })}
            </Carousel>
<Box className={classes.container}>
            {data.map((item, index) => (
                <Box
                    className={classes.slider}
                    key={index}
                    
                >
                    <MainCard item={item} />
                </Box>
            ))}
        </Box>
*/
