import "./App.css";
import LandingPage from "./contaner/LandingPage/landing";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: 0,
        backgroundColor: "#f6f9fc",
    },
}));

function App() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <LandingPage />
        </div>
    );
}

export default App;
