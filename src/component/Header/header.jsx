import { makeStyles } from "@material-ui/core/styles";
import { Grid, IconButton, InputAdornment, InputBase } from "@material-ui/core";
import Logo from "../UI/Logo/logo";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import CategoryMenu from "./categorySelectMenu";

const useStyles = makeStyles((theme) => ({
    container: {
        width: "100vw",
        backgroundColor: "white",
    },
    serachBox: {
        borderRadius: 25,
        width: "100%",
        height: 40,
        paddingLeft: 20,
        border: "1px solid gray",
        overflow: "hidden",
    },
    focusSearchBox: {
        border: "2px solid green",
    },
    searchContainer: {
        flexGrow: 1,
        maxWidth: 500,
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <Grid
            container
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            className={classes.container}
        >
            <Grid item>
                <Logo />
            </Grid>
            <Grid item className={classes.searchContainer}>
                <InputBase
                    className={classes.serachBox}
                    classes={{ focused: classes.focusSearchBox }}
                    placeholder='Search for'
                    startAdornment={
                        <InputAdornment position='start'>
                            <SearchIcon />
                        </InputAdornment>
                    }
                    endAdornment={
                        <InputAdornment position='end'>
                            <CategoryMenu />
                        </InputAdornment>
                    }
                />
            </Grid>
            <Grid item>
                <IconButton>
                    <AccountCircleIcon />
                </IconButton>
                <IconButton>
                    <ShoppingCartIcon />
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default Header;
