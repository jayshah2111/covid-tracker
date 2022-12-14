import React from "react";
import { Card, CardContent, Typography, Grid } from '@mui/material';
import CountUp from "react-countup";
import cx from "classnames";
import styles from './cards.module.css';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed){
        return 'Fetching data...';
    }
    return(
        <div className={styles.container} > 
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} md={6} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="text.secondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={confirmed.value}
                                duration={1.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color="text.secondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} md={6} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="text.secondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={deaths.value}
                                duration={1.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color="text.secondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;