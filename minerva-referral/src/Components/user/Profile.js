import { Button, Paper, Typography } from '@material-ui/core'
import React from 'react'
import users from '../Users/userData'
import { makeStyles } from '@material-ui/core/styles';
import CustomTimeline from './Timeline'
import PersonIcon from '@material-ui/icons/Person';
import TimelineItem from '@material-ui/lab/TimelineItem';
import CustomTimelineSeparator from './Timeline'
import TimelineContent from '@material-ui/lab/TimelineContent';

import './timeline.css'

const useStyles =makeStyles((theme)=>({
    profile:{
        backgroundColor: "white",
        borderRadius: "5px",
        width: "100%",
        display: "inline-block",
        
    },
    profile_name:{
        lineHeight: "18px",
        padding: "20px",

    },
    name: {
        textTransform: "uppercase",
        fontSize: "17px",
        fontWeight: "bold",

    },
    work:{
        fontWeight: "13px",
        color: "#777",

    },
    profile_image:{
        marginTop: "-10px",
        
    },
    image:{
        width:"100%"
    },
    profile_info:{
        top:"0",
        left:"0",

    },btn_profile:{
        color: "#325ea8",
    },
    btn_profile_typography:{
 
        color: "black",
        borderRadius: "5%",
        display: "flex",
        textAlign: "center",
        zIndex: "10 !important"
      }
}))

const CustomTimelineItem=({title, text, link})=>(
    
    <TimelineItem >
        <CustomTimelineSeparator/>
        <TimelineContent className="timeline_content">

            {link ? (<Typography className="timelineItem_text">
                <span className='title'>{title}:<a href = {link} target="#">{text}</a></span>
            </Typography>) : ( <Typography className="timelineItem_text">            
                <span className="title">
                {title}: 
            </span>
            {text}
            </Typography>)}
        </TimelineContent>
  </TimelineItem>

)


const Profile = () => {
    const classes = useStyles()
    const user = users[0]
    return (
        <Paper className = {classes.profile}>
            
            <div className = {classes.profile_name}>
                <Typography variant="h4" className={classes.name}>
                    {user.name}
                </Typography>
                <Typography  className={classes.work}>
                    {user.current_work}
                </Typography>
            </div>
            <div className={classes.profile_image}>
                <img className={classes.image} src={user.image} alt=""/>
            </div>
            <div className={classes.profile_info}>
                <CustomTimeline user={user} icon={<PersonIcon/>}  >
                <CustomTimelineItem title ='Title' text={user.currentTitle}/>
                <CustomTimelineItem title ='Email' text={user.email}/>
                <CustomTimelineItem title ='Class' text={user.grad_year}/>
                <CustomTimelineItem title ='Major' text={user.major}/>
                <CustomTimelineItem title ='LinkedIn' text={'LinkedIn URL'} link={user.linkedIn}/>
                </CustomTimeline>
                <br/>
                <div style = {{width: "100%", display: "flex", justifyContent: "center", marginBottom: "10px"}}>                
                <Button variant='contained' color="primary" className="btn_profile">
                    <Typography variant="h6" className="btn_profile_typography"> 
                            Download CV
                    </Typography>
                </Button>
                </div>

            </div>
        </Paper>
    )
}

export default Profile
