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
} from "@material-ui/core";
import React, { useState } from "react";
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
}));

const CategorySelect = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleClick = (event) => {
        setOpen((prevState) => !prevState);
    };

    const panel = () => {};
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
                    <Box>
                        <MenuItem className={classes.menuItem}>
                            <AcUnitIcon fontSize='small' />{" "}
                            <span className={classes.testStyle}>Fasion</span>
                            <ArrowForwardIosIcon
                                fontSize='small'
                                className={classes.arrowStyle}
                            />
                        </MenuItem>
                    </Box>
                    <Box>
                        <MenuItem className={classes.menuItem}>
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
        </React.Fragment>
    );
};

export default CategorySelect;
