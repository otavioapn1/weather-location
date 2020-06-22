import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({

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

function CartaoClima(props) {
    const classes = useStyles();
    return (
        <>

            <Card>
                <CardContent>
                    <Typography align="center" variant="h5" component="h2">
                        {props.titulo}
                    </Typography>
                    <Typography align="center" variant="h2" className={classes.pos} color="textSecondary">
                        {props.informacao}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )

}

export default CartaoClima;