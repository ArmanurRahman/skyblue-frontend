import { Box, Grid } from "@material-ui/core";

import Header from "../../component/Header/header";
import Carousel from "../../component/Carousel/carousel";

import { makeStyles } from "@material-ui/core/styles";
import MainCardHolder from "../../component/MainCartHolder/MainCardHolder";
import FireIcon from "../../assets/img/fire-icon.png";
import ViewAllButton from "../../component/UI/Button/GrayButton";
import CarosuelHeader from "../../component/UI/Paragraph/CarouselHeader";

const data = [
    {
        productName: "Macbook Pro",
        price: 1000,
        rating: 4,
        isWished: true,
        url: "/img/macbook_pro.png",
    },
    {
        productName: "Macbook Pro",
        price: 1000,
        rating: 4,
        isWished: true,
        url: "/img/macbook_pro.png",
    },
    {
        productName: "Macbook Pro",
        price: 1000,
        rating: 4,
        isWished: true,
        url: "/img/macbook_pro.png",
    },
    {
        productName: "Macbook Pro",
        price: 1000,
        rating: 4,
        isWished: true,
        url: "/img/macbook_pro.png",
    },
    {
        productName: "Macbook Pro",
        price: 1000,
        rating: 4,
        isWished: true,
        url: "/img/macbook_pro.png",
    },
    {
        productName: "Macbook Pro",
        price: 1000,
        rating: 4,
        isWished: true,
        url: "/img/macbook_pro.png",
    },
    {
        productName: "Macbook Pro",
        price: 1000,
        rating: 4,
        isWished: true,
        url: "/img/macbook_pro.png",
    },
    {
        productName: "Macbook Pro",
        price: 1000,
        rating: 4,
        isWished: true,
        url: "/img/macbook_pro.png",
    },
];

const useStyles = makeStyles((theme) => ({
    carousel: {
        display: "flex",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "white",
        boxShadow: "rgb(43 52 69 / 10%) 0px 4px 16px",
    },
    body: {
        maxWidth: 1300,
        margin: "auto",
        marginTop: "2rem",
    },
}));

const LandingPage = () => {
    const classes = useStyles();
    return (
        <Grid container direction='column'>
            <Grid item>
                <Header />
            </Grid>
            <Grid item>
                <Box className={classes.carousel}>
                    <Carousel />
                </Box>
            </Grid>
            <Grid item>
                <Grid container item className={classes.body}>
                    {/**hot deal options */}
                    <div className='w-full flex justify-between mb-2'>
                        <div className='flex items-center'>
                            <img src={FireIcon} />
                            <CarosuelHeader text='Hot Deal' />
                        </div>

                        <ViewAllButton />
                    </div>
                    <MainCardHolder data={data} />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default LandingPage;
