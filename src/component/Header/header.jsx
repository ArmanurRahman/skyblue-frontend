import { makeStyles } from "@material-ui/core/styles";
import {
    Grid,
    IconButton,
    InputAdornment,
    InputBase,
    Paper,
} from "@material-ui/core";
import Logo from "../UI/Logo/logo";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import CategoryMenu from "./categorySelectMenu";
import CategoriesPanel from "../Category/category";

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 20,
        width: "100%",
        backgroundColor: "white",
        maxWidth: 1300,
        marginLeft: "auto",
        marginRight: "auto",
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
        maxWidth: 700,
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <Grid container component={Paper} direction='column'>
            <Grid item className={classes.container}>
                <Grid
                    container
                    direction='row'
                    alignItems='center'
                    justifyContent='space-between'
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
            </Grid>
            <Grid item>
                <CategoriesPanel />
            </Grid>
        </Grid>
    );
};

export default Header;
