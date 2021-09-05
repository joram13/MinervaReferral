import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { Grid, Typography, Card, CardContent } from '@material-ui/core/';

import { companies_rows } from './data'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function HomePage() {
    const classes = useStyles();
    const history = useHistory();


    return (
        <Grid container spacing={3}>
            {companies_rows.map((row) =>
                <Grid item xs={12} sm={6} md={3} key={row.uuid}>
                    <Card onClick={() => history.push(`/companies/${row.uuid}`)}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                {row.uuid}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {row.name}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                {row.alumni} Alumni
                               </Typography>
                            <Typography variant="body2" component="p">
                                {row.reviews} Reviews
                            <br />
                                {row.jobs + (row.jobs > 1 ? ' Jobs' : ' Job')}
                            </Typography>
                        </CardContent>
                    </Card >
                </Grid>
            )
            }
        </Grid >);
}
