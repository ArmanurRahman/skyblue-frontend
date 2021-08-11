import { Grid } from "@material-ui/core";

import Header from "../../component/Header/header";

const LandingPage = () => {
    return (
        <Grid container direction='column'>
            <Grid item>
                <Header />
            </Grid>
        </Grid>
    );
};

export default LandingPage;
