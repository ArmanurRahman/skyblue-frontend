import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Box, IconButton, Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Rating } from "@material-ui/lab";
import AddBoxIcon from "@material-ui/icons/AddBox";

const useStyles = makeStyles((theme) => ({
    image__container: {
        width: "100%",
        height: "16rem",
        position: "relative",
    },
    image__container_action: {
        position: "absolute",
        display: "none",
        right: 0,
    },
    container: {
        backgroundColor: "white",
        width: "16rem",
        height: "22rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        "&:hover": {
            "& #image__container_action": {
                display: "block",
            },
        },
    },
    description_container: {
        width: "90%",
        display: "flex",
        flexDirection: "column",
        padding: 16,
        justifyContent: "flex-start",
    },
    image: {
        width: "80%",
        margin: "auto",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
}));

const MainCard = ({ item }) => {
    const classes = useStyles();
    return (
        <Box component={Paper} elevation={2} className={classes.container}>
            <Box component='div' className={classes.image__container}>
                <Box
                    id='image__container_action'
                    className={classes.image__container_action}
                >
                    <IconButton color={item.isWished ? "secondary" : "inherit"}>
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton>
                        <VisibilityIcon />
                    </IconButton>
                </Box>
                <Box className={classes.image}>
                    <Box>
                        <img
                            src={`${process.env.PUBLIC_URL + item.url}`}
                            height='auto'
                            width='100%'
                        />
                    </Box>
                </Box>
            </Box>
            <Box className={classes.description_container}>
                <Typography>{item.productName}</Typography>
                <Rating
                    name='product-rating'
                    value={item.rating}
                    onClick={() => {}}
                />
                <Box
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography>${item.price}</Typography>
                    <IconButton color='secondary'>
                        <AddBoxIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default MainCard;
