import React from 'react'
import {Modal, CardMedia, CardContent, CardActions, Typography, Card, CardActionArea, Button, Avatar, Box} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';


//Replicable modal that shows each user that is affiliated to a company
const useStyles =makeStyles((theme)=>({
    card:{
        maxWidth: "100%",

    },
    media:{
        height: "240px",
    },
    cardActions:{
        display:"flex",
        margin:"0 10px",
        justifyContent: "spaceBetween",

    },
    userpic:{
        display: "flex",
        justifyContent: "space"
    }
}))

const UserCard = ({user}) => {
    const classes = useStyles()
    
    return (
        <>
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia className={classes.media} image={user.cover} title={user.name}/>
                <CardContent>
                    <Typography gutterBottom variant="h4">
                        {user.name}
                    </Typography>
                    <Typography  color="textSecondary" component="p">
                        {user.bio}
                    </Typography>
                </CardContent>
                
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Box className={classes.userpic}>
                    <Avatar src={user.image}/>

             
                </Box>
                <Button size="small" color="primary" ml={2}>
                    Open Profile
                </Button>
            </CardActions>
        </Card>
        </>
    )
}

export default UserCard
