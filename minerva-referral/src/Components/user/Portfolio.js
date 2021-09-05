import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import users from '../Users/userData';
import CustomTimeline from './Timeline'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import WorkIcon from '@material-ui/icons/Work';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';


const useStyles =makeStyles((theme)=>({
    portfolio_container:{
        padding: "30px",
        color: "gray",
        font: "smaller",
        lineHeight: "28px !important",
        whiteSpace: "pre-line !important"
    }
}))

const Portfolio = () => {
    const classes = useStyles()
    const user = users[0]
    return (
        <div >
            <Paper className={classes.portfolio_container}>           
                <Typography variant="h5" style={{marginLeft: "20px"}}>
                My Profile
            </Typography>
            <br/>
            <Grid container>
                <Grid item sm={12} md={6}>

                    <CustomTimeline title = "Personal Information" icon = {<AccountCircleIcon/>}>
                        <TimelineItem>
                            <TimelineSeparator>
                               <TimelineDot/>
                            <TimelineConnector/> 
                            </TimelineSeparator>
                            
                            <TimelineContent>
                                <Typography>Current Title: {user.currentTitle}</Typography>
                            </TimelineContent>
                            
                        </TimelineItem>


                        <TimelineItem>
                        <TimelineSeparator>
                               <TimelineDot/>
                            <TimelineConnector/> 
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography>Major: {user.major}</Typography>
                            </TimelineContent>
                            
                        </TimelineItem>


                        <TimelineItem>
                        <TimelineSeparator>
                               <TimelineDot/>
                            <TimelineConnector/> 
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography>Graduation Year: {user.grad_year}</Typography>
                            </TimelineContent>
                            
                        </TimelineItem>


                        <TimelineItem>
                        <TimelineSeparator>
                               <TimelineDot/>
                             
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography>Interests: {user.interests}</Typography>
                            </TimelineContent>
                            
                        </TimelineItem>
            
                    </CustomTimeline>
                    
                </Grid>
                </Grid>
                </Paper>



                <br/><br/>
                <Paper className={classes.portfolio_container}>
                    
                    <Typography variant = "h6">
                        Open To Work
                    </Typography>
                    <br/>
                    {user.candidate_portal}
                </Paper>


               <br/><br/>
                <Paper className={classes.portfolio_container}>
                <Grid container>
                <Grid item sm={12} md={12}>
                    <Typography variant="h6">
                        Experience
                    </Typography>
                    <CustomTimeline title = "Past placements" icon = {<WorkIcon/>}>
                    {user.user_past_experience.map(experience => (
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot/>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography>{experience.title} - {experience.company}</Typography>
                                
                                <Typography>{experience.date}</Typography>
                                <Typography>{experience.description}</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    ))}  
                    
                    </CustomTimeline>

                </Grid>
            </Grid> 
                </Paper>

            <br/><br/>
            <Paper className={classes.portfolio_container}>
          <Typography variant="h4">Bio</Typography>
            <br/>
            <Typography variant="h6">{user.bio}</Typography>
            </Paper>


         
        </div>
            
            
    )
}

export default Portfolio
