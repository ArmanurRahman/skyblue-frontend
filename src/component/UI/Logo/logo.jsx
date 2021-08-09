import LogoImg from "../../../assets/img/skyblue_logo.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    contaner: {
        height: "100%",
    },
    img: {
        height: "100%",
    },
}));

const Logo = () => {
    const classes = useStyles();
    return (
        <div className={classes.contaner}>
            <img src={LogoImg} alt='Skyblue' className={classes.img} />
        </div>
    );
};

export default Logo;
