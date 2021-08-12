import { Box, Grid } from "@material-ui/core";

import Header from "../../component/Header/header";
import Carousel from "../../component/Carousel/carousel";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    carousel: {
        display: "flex",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "white",
        boxShadow: "rgb(43 52 69 / 10%) 0px 4px 16px",
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
        </Grid>
    );
};

export default LandingPage;
