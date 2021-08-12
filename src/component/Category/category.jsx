import {
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Menu,
    Collapse,
    Paper,
    Box,
    Link,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import CategoryIcon from "@material-ui/icons/Category";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import DevicesIcon from "@material-ui/icons/Devices";
import HomeIcon from "@material-ui/icons/Home";
import ToysIcon from "@material-ui/icons/Toys";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import MovieIcon from "@material-ui/icons/Movie";
import KitchenIcon from "@material-ui/icons/Kitchen";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import NatureIcon from "@material-ui/icons/Nature";

const useStyles = makeStyles((theme) => ({
    container: {
        maxWidth: 1300,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
    },
    categoryButton: {
        textTransform: "none",
        backgroundColor: "#f6f9fc",
        height: 40,
        marginLeft: 20,
        width: 300,
        position: "relative",
    },
    mainCategoryPanel: {
        left: 20,
        right: "auto",
        padding: "0.5rem 0px",
        zIndex: 98,
        position: "absolute",
        transform: "scaleY(0)",
        boxShadow: "rgb(43 52 69 / 10%) 0px 4px 16px",
        transition: "all 250ms ease-in-out 0s",
        borderRadius: "4px",
        backgroundColor: "rgb(255, 255, 255)",
        transformOrigin: "center top",
    },
    menuItem: {
        width: 300,
        fontSize: "15 !important",
        "&:hover": {
            color: "red",
            backgroundColor: "rgba(255,0,0, .1)",
            "& > div": {
                display: "block",
            },
        },
    },
    subMenuItem: {
        width: 200,
        fontSize: "15 !important",
        color: "black !important",
        "&:hover": {
            color: "red !important",
            backgroundColor: "rgba(255,0,0, .1)",
        },
    },
    arrowStyle: {
        right: 20,
        position: "absolute",
        height: 14,
    },
    testStyle: {
        marginLeft: 20,
    },
    subOptionPanel: {
        top: 0,
        width: 600,

        position: "absolute",
        left: "100%",
        right: "auto",

        display: "none",
    },
    subOptionSmallPanel: {
        top: 0,
        //width: 200,
        position: "absolute",
        left: "100%",
        right: "auto",
        display: "none",
    },
    subOptionPanel__inner: {
        boxShadow: "rgb(43 52 69 / 10%) 0px 4px 16px",
        padding: 10,
        borderRadius: 10,
    },
    subOptionSmallPanel__inner: {
        boxShadow: "rgb(43 52 69 / 10%) 0px 4px 16px",
        //padding: 10,
        //borderRadius: 10,
    },
    subOptionPanel_title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    option: {
        textDecoration: "none !important",
        cursor: "pointer",
        color: "black",
        padding: 6,
        "&:hover": {
            color: "red",
        },
    },
    mainContainer: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
    },
    subContainer: {
        width: 180,
        padding: 16,
    },
}));

const CategorySelect = () => {
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleClick = (event) => {
        setOpen((prevState) => !prevState);
    };

    const fasionOptionPanel = (
        <div>
            <div className={classes.mainContainer}>
                <Box component='div' className={classes.subContainer}>
                    <Link
                        className={`${classes.subOptionPanel_title} ${classes.option}`}
                        component='div'
                    >
                        Man Cloths
                    </Link>
                    <Link component='div' className={classes.option}>
                        Shirt
                    </Link>
                    <Box component='div' className={classes.option}>
                        T-shart
                    </Box>
                    <Box component='div' className={classes.option}>
                        Pant
                    </Box>
                </Box>

                <Box component='div' className={classes.subContainer}>
                    <Link
                        className={`${classes.subOptionPanel_title} ${classes.option}`}
                        component='div'
                    >
                        Accessories
                    </Link>
                    <Link component='div' className={classes.option}>
                        Belt
                    </Link>
                    <Box component='div' className={classes.option}>
                        Hat
                    </Box>
                    <Box component='div' className={classes.option}>
                        Watches
                    </Box>
                    <Box component='div' className={classes.option}>
                        Sunglasses
                    </Box>
                </Box>

                <Box component='div' className={classes.subContainer}>
                    <Link
                        className={`${classes.subOptionPanel_title} ${classes.option}`}
                        component='div'
                    >
                        Shoes
                    </Link>
                    <Link component='div' className={classes.option}>
                        Sneakers
                    </Link>
                    <Box component='div' className={classes.option}>
                        Formal
                    </Box>
                    <Box component='div' className={classes.option}>
                        Casual
                    </Box>
                    <Box component='div' className={classes.option}>
                        Sport
                    </Box>
                </Box>
                <Box component='div' className={classes.subContainer}>
                    <Link
                        className={`${classes.subOptionPanel_title} ${classes.option}`}
                        component='div'
                    >
                        Bags
                    </Link>
                    <Link component='div' className={classes.option}>
                        Bagpack
                    </Link>
                    <Box component='div' className={classes.option}>
                        Walet
                    </Box>
                    <Box component='div' className={classes.option}>
                        Side Bags
                    </Box>
                </Box>
            </div>

            <div className={classes.mainContainer}>
                <Box component='div' className={classes.subContainer}>
                    <Link
                        className={`${classes.subOptionPanel_title} ${classes.option}`}
                        component='div'
                    >
                        Woman Cloths
                    </Link>
                    <Link component='div' className={classes.option}>
                        Shirt
                    </Link>
                    <Box component='div' className={classes.option}>
                        T-shart
                    </Box>
                    <Box component='div' className={classes.option}>
                        Pant
                    </Box>
                </Box>

                <Box component='div' className={classes.subContainer}>
                    <Link
                        className={`${classes.subOptionPanel_title} ${classes.option}`}
                        component='div'
                    >
                        Accessories
                    </Link>
                    <Link component='div' className={classes.option}>
                        Belt
                    </Link>
                    <Box component='div' className={classes.option}>
                        Hat
                    </Box>
                    <Box component='div' className={classes.option}>
                        Watches
                    </Box>
                    <Box component='div' className={classes.option}>
                        Sunglasses
                    </Box>
                </Box>

                <Box component='div' className={classes.subContainer}>
                    <Link
                        className={`${classes.subOptionPanel_title} ${classes.option}`}
                        component='div'
                    >
                        Shoes
                    </Link>
                    <Link component='div' className={classes.option}>
                        Sneakers
                    </Link>
                    <Box component='div' className={classes.option}>
                        Formal
                    </Box>
                    <Box component='div' className={classes.option}>
                        Casual
                    </Box>
                    <Box component='div' className={classes.option}>
                        Sport
                    </Box>
                </Box>
                <Box component='div' className={classes.subContainer}>
                    <Link
                        className={`${classes.subOptionPanel_title} ${classes.option}`}
                        component='div'
                    >
                        Bags
                    </Link>
                    <Link component='div' className={classes.option}>
                        Bagpack
                    </Link>
                    <Box component='div' className={classes.option}>
                        Walet
                    </Box>
                    <Box component='div' className={classes.option}>
                        Side Bags
                    </Box>
                </Box>
            </div>

            <div className={classes.mainContainer}>
                <Box component='div' className={classes.subContainer}>
                    <Link
                        className={`${classes.subOptionPanel_title} ${classes.option}`}
                        component='div'
                    >
                        Kid Cloths
                    </Link>
                    <Link component='div' className={classes.option}>
                        Shirt
                    </Link>
                    <Box component='div' className={classes.option}>
                        T-shart
                    </Box>
                    <Box component='div' className={classes.option}>
                        Pant
                    </Box>
                </Box>

                <Box component='div' className={classes.subContainer}>
                    <Link
                        className={`${classes.subOptionPanel_title} ${classes.option}`}
                        component='div'
                    >
                        Accessories
                    </Link>
                    <Link component='div' className={classes.option}>
                        Belt
                    </Link>
                    <Box component='div' className={classes.option}>
                        Hat
                    </Box>
                    <Box component='div' className={classes.option}>
                        Watches
                    </Box>
                    <Box component='div' className={classes.option}>
                        Sunglasses
                    </Box>
                </Box>

                <Box component='div' className={classes.subContainer}>
                    <Link
                        className={`${classes.subOptionPanel_title} ${classes.option}`}
                        component='div'
                    >
                        Shoes
                    </Link>
                    <Link component='div' className={classes.option}>
                        Sneakers
                    </Link>
                    <Box component='div' className={classes.option}>
                        Formal
                    </Box>
                    <Box component='div' className={classes.option}>
                        Casual
                    </Box>
                    <Box component='div' className={classes.option}>
                        Sport
                    </Box>
                </Box>
                <Box component='div' className={classes.subContainer}></Box>
            </div>
        </div>
    );

    const electronicOptionPanel = (
        <div>
            <div className={classes.mainContainer}>
                <Box component='div' className={classes.subContainer}>
                    <Link
                        className={`${classes.subOptionPanel_title} ${classes.option}`}
                        component='div'
                    >
                        Laptop
                    </Link>
                    <Link component='div' className={classes.option}>
                        Gaming
                    </Link>
                    <Link component='div' className={classes.option}>
                        Ultrabook
                    </Link>
                    <Link component='div' className={classes.option}>
                        chromebook
                    </Link>
                    <Link component='div' className={classes.option}>
                        Hybrid
                    </Link>
                </Box>

                <Box component='div' className={classes.subContainer}>
                    <Link
                        className={`${classes.subOptionPanel_title} ${classes.option}`}
                        component='div'
                    >
                        Console
                    </Link>
                    <Link component='div' className={classes.option}>
                        Xbox
                    </Link>
                    <Link component='div' className={classes.option}>
                        PS
                    </Link>
                    <Link component='div' className={classes.option}>
                        Nitendo
                    </Link>
                    <Link component='div' className={classes.option}>
                        Other
                    </Link>
                </Box>

                <Box component='div' className={classes.subContainer}>
                    <Link
                        className={`${classes.subOptionPanel_title} ${classes.option}`}
                        component='div'
                    >
                        Mobile
                    </Link>
                    <Link component='div' className={classes.option}>
                        Android
                    </Link>

                    <Link component='div' className={classes.option}>
                        IOS
                    </Link>
                    <Box component='div' className={classes.option}>
                        Other
                    </Box>
                </Box>
            </div>
        </div>
    );

    const entertainmentPanel = (
        <div>
            <Box component='div' className={classes.subMenuItem}>
                <MenuItem>
                    <MusicNoteIcon fontSize='small' />{" "}
                    <span className={classes.testStyle}>Music</span>
                </MenuItem>
            </Box>
            <Box component='div' className={classes.subMenuItem}>
                <MenuItem>
                    <MovieIcon fontSize='small' />{" "}
                    <span className={classes.testStyle}>Movie</span>
                </MenuItem>
            </Box>
        </div>
    );

    const homeGardenPanel = (
        <div>
            <Box component='div' className={classes.subMenuItem}>
                <MenuItem>
                    <KitchenIcon fontSize='small' />{" "}
                    <span className={classes.testStyle}>Kitchen</span>
                </MenuItem>
            </Box>
            <Box component='div' className={classes.subMenuItem}>
                <MenuItem>
                    <LocalDiningIcon fontSize='small' />{" "}
                    <span className={classes.testStyle}>Dining </span>
                </MenuItem>
            </Box>
            <Box component='div' className={classes.subMenuItem}>
                <MenuItem>
                    <EventSeatIcon fontSize='small' />{" "}
                    <span className={classes.testStyle}>Drawing </span>
                </MenuItem>
            </Box>
            <Box component='div' className={classes.subMenuItem}>
                <MenuItem>
                    <NatureIcon fontSize='small' />{" "}
                    <span className={classes.testStyle}>Garden </span>
                </MenuItem>
            </Box>
        </div>
    );

    return (
        <div className={classes.container}>
            <div style={{ position: "relative" }}>
                <List component='nav' aria-label='menu-list'>
                    <ListItem
                        button
                        className={classes.categoryButton}
                        onClick={handleClick}
                    >
                        <ListItemIcon>
                            <CategoryIcon />
                        </ListItemIcon>
                        <ListItemText primary='Categories' />
                        {open ? (
                            <ExpandMoreIcon fontSize='small' />
                        ) : (
                            <ArrowForwardIosIcon fontSize='small' />
                        )}
                    </ListItem>
                </List>

                <Box
                    className={classes.mainCategoryPanel}
                    component='div'
                    style={
                        open
                            ? { transform: "scaleY(1)" }
                            : { transform: "scaleY(0)" }
                    }
                >
                    <Box component='div'>
                        <Box component='div' className={classes.menuItem}>
                            <MenuItem>
                                <AcUnitIcon fontSize='small' />{" "}
                                <span className={classes.testStyle}>
                                    Fasion
                                </span>
                                <ArrowForwardIosIcon
                                    fontSize='small'
                                    className={classes.arrowStyle}
                                />
                            </MenuItem>
                            <Box
                                component='div'
                                className={classes.subOptionPanel}
                            >
                                <div
                                    className={classes.subOptionPanel__inner}
                                    style={{ marginLeft: "1rem" }}
                                >
                                    {fasionOptionPanel}
                                </div>
                            </Box>
                        </Box>

                        <Box component='div' className={classes.menuItem}>
                            <MenuItem>
                                <DevicesIcon fontSize='small' />{" "}
                                <span className={classes.testStyle}>
                                    Electronic
                                </span>
                                <ArrowForwardIosIcon
                                    fontSize='small'
                                    className={classes.arrowStyle}
                                />
                            </MenuItem>
                            <Box
                                component='div'
                                className={classes.subOptionPanel}
                            >
                                <div
                                    className={classes.subOptionPanel__inner}
                                    style={{ marginLeft: "1rem" }}
                                >
                                    {electronicOptionPanel}
                                </div>
                            </Box>
                        </Box>

                        <Box className={classes.menuItem}>
                            <MenuItem>
                                <MusicNoteIcon fontSize='small' />{" "}
                                <span className={classes.testStyle}>
                                    Entertainment
                                </span>
                                <ArrowForwardIosIcon
                                    fontSize='small'
                                    className={classes.arrowStyle}
                                />
                            </MenuItem>
                            <Box
                                component='div'
                                className={classes.subOptionSmallPanel}
                                style={{ top: 80 }}
                            >
                                <div
                                    className={
                                        classes.subOptionSmallPanel__inner
                                    }
                                    style={{
                                        marginLeft: "1rem",
                                    }}
                                >
                                    {entertainmentPanel}
                                </div>
                            </Box>
                        </Box>
                        {/** */}
                        <Box className={classes.menuItem}>
                            <MenuItem>
                                <HomeIcon fontSize='small' />{" "}
                                <span className={classes.testStyle}>
                                    Home & Garden
                                </span>
                                <ArrowForwardIosIcon
                                    fontSize='small'
                                    className={classes.arrowStyle}
                                />
                            </MenuItem>
                            <Box
                                component='div'
                                className={classes.subOptionSmallPanel}
                                style={{ top: 110 }}
                            >
                                <div
                                    className={
                                        classes.subOptionSmallPanel__inner
                                    }
                                    style={{
                                        marginLeft: "1rem",
                                    }}
                                >
                                    {homeGardenPanel}
                                </div>
                            </Box>
                        </Box>

                        <Box>
                            <MenuItem className={classes.menuItem} id='toy'>
                                <ToysIcon fontSize='small' />{" "}
                                <span className={classes.testStyle}>Toy</span>
                            </MenuItem>
                        </Box>

                        <Box>
                            <MenuItem className={classes.menuItem} id='game'>
                                <SportsEsportsIcon fontSize='small' />{" "}
                                <span className={classes.testStyle}>Game</span>
                            </MenuItem>
                        </Box>

                        <Box>
                            <MenuItem
                                className={classes.menuItem}
                                id='groceries'
                            >
                                <EmojiFoodBeverageIcon fontSize='small' />{" "}
                                <span className={classes.testStyle}>
                                    Groceries
                                </span>
                            </MenuItem>
                        </Box>
                    </Box>
                </Box>
            </div>
        </div>
    );
};

export default CategorySelect;
