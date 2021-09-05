import React, { useState } from "react";

import { Paper, Button, Box, Typography } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    carousel_container: {
        width: "100%",
        height: 500,
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    img: {
        width: "50%",
        height: 300,
    },
    info_container: {
        width: "50%",
        padding: 20,
        marginLeft: "auto",
        marginRight: "auto",
    },
    description__title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    description__important: {
        fontSize: 40,
    },
    description__details: {
        fontSize: 16,
    },
}));
const Item = (props) => {
    const classes = useStyles();
    return (
        <Box className={classes.carousel_container}>
            <Box className={classes.info_container}>
                <Typography className={classes.description__title}>
                    {props.item.name}
                </Typography>
                <Typography className={classes.description__important}>
                    {props.item.description}
                </Typography>
                <Typography className={classes.description__details}>
                    This is for description
                </Typography>

                <Button
                    color='secondary'
                    style={{ marginTop: 20 }}
                    variant='contained'
                >
                    Check it out!
                </Button>
            </Box>
            <Box className={classes.img}>
                <img
                    height='100%'
                    width='100%'
                    className='d-block w-100'
                    src={`${process.env.PUBLIC_URL + props.item.url}`}
                    alt='First slide'
                />
            </Box>
        </Box>
    );
};

const CarouselHome = () => {
    const [carouselData, setCarouselData] = useState([
        {
            name: "Macbook Pro",
            description: "50% off before 2021-12-01",
            url: "/img/macbook_pro.png",
            productId: "",
        },
        {
            name: "Macbook Pro",
            description: "70% off at first buy",
            url: "/img/macbook_pro.png",
            productId: "",
        },
        {
            name: "Macbook Pro",
            description: "30% off before 2021-12-01",
            url: "/img/macbook_pro.png",
            productId: "",
        },
    ]);

    return (
        <div>
            <Carousel>
                {carouselData.map((item, i) => (
                    <Item key={i} item={item} />
                ))}
            </Carousel>
        </div>
    );
    /*
    return (
        <Slide>
            {carouselData.map((item) => (
                <div key={item.description}>
                    <img
                        className='d-block w-100'
                        src={`${process.env.PUBLIC_URL}/img/macbook_pro.jpeg`}
                        alt='First slide'
                    />

                    <h3>First slide label</h3>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </div>
            ))}
        </Slide>
    );*/
};

export default CarouselHome;
