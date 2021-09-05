import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MultiCarousel from "../Carousel/MultiCarousel";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",

        flexDirection: "row",
        width: "90%",

        marginBottom: 20,
    },
}));

const MainCardHolder = ({ data }) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <MultiCarousel data={data} />
        </div>
    );
};

export default MainCardHolder;
