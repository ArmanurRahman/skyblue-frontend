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

const useStyles = makeStyles((theme) => ({
    categoryButton: {
        textTransform: "none",
        backgroundColor: "#f6f9fc",
        height: 40,
        marginLeft: 20,
        width: 300,
    },
    mainCategoryPanel: {
        left: "20px",
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
        //width: 600,

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
    subOptionPanel_title: {
        fontSize: 20,
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
    },
    subContainer: {
        width: 100,
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
                        Man
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
                        Man
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
                        Man
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
            </div>

            <div className={classes.mainContainer}>
                <Box component='div' className={classes.subContainer}>
                    <Link
                        className={`${classes.subOptionPanel_title} ${classes.option}`}
                        component='div'
                    >
                        Man
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
                        Man
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
                        Man
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
            </div>
        </div>
    );

    return (
        <React.Fragment>
            <List component='nav' aria-label='main mailbox folders'>
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
            <div>
                <div>
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
                                    <AcUnitIcon fontSize='small' id='fasion' />{" "}
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
                                        className={
                                            classes.subOptionPanel__inner
                                        }
                                        style={{ marginLeft: "1rem" }}
                                    >
                                        {fasionOptionPanel}
                                    </div>
                                </Box>
                            </Box>

                            <Box>
                                <MenuItem
                                    className={classes.menuItem}
                                    id='electronic'
                                >
                                    <DevicesIcon fontSize='small' />{" "}
                                    <span className={classes.testStyle}>
                                        Electronic
                                    </span>
                                    <ArrowForwardIosIcon
                                        fontSize='small'
                                        className={classes.arrowStyle}
                                    />
                                </MenuItem>
                            </Box>
                        </Box>
                    </Box>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CategorySelect;
