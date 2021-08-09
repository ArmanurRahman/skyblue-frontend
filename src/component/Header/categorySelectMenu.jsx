import { Button, Menu, MenuItem } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
    button: {
        textTransform: "none",
        backgroundColor: "#f6f9fc",
        height: 40,
    },
}));

const menu = [
    { name: "All Category", value: "All Category" },
    { name: "Electronic", value: "Electronic" },
    { name: "Cloths", value: "Cloths" },
];

const CategoryMenu = () => {
    const classes = useStyles();

    const [selectedCategory, setSelectedCategory] = useState("All Category");
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelect = (value) => {
        setSelectedCategory(value);
        handleClose();
    };

    return (
        <React.Fragment>
            <Button
                onClick={handleClick}
                className={classes.button}
                endIcon={<ExpandMoreIcon />}
            >
                {selectedCategory}
            </Button>
            <Menu
                id='category-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
            >
                {menu.map((item) => (
                    <MenuItem
                        key={item.name}
                        onClick={() => handleSelect(item.value)}
                    >
                        {item.value}
                    </MenuItem>
                ))}
            </Menu>
        </React.Fragment>
    );
};

export default CategoryMenu;
