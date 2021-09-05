import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import './timeline.css'

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles =makeStyles((theme)=>({
 timeline:{
     padding:"0 !important",
     justifyContent: "left !important"

 },
 timelineText:{
     paddingTop: "7px",

 },
 timelineHeader:{
     minHeight: "80px !important",

 },
 timelineDotHeader:{
     color: "black",
     backgroundColor: "#325ea8",
    fontSize: "small",
    padding: "10px",
 },separator_padding:{
   paddingLeft: "18px",
 },
 timeline_dot:{
   marginLeft: "18px",
 }
}))
const CustomTimeline = ({title, children, icon, user}) => {
    const classes = useStyles()
    return (
<Timeline className={classes.timeline} >
<TimelineItem className={classes.timelineHeader}>
<TimelineSeparator >
          <TimelineDot variant={'outlined'} className={'timelineDotHeader'} >
              {icon}
              
              </TimelineDot>
          <TimelineConnector/>
        </TimelineSeparator >
        <TimelineContent>
            <Typography  className={classes.timelineText}>
               {title}
            </Typography>
            </TimelineContent>
      </TimelineItem>

        {children}

      {/* <TimelineItem className={'timeline_content'}>
        <CustomTimelineSeparator/>
        <TimelineContent>            
            <Typography>
               {'title'} 
            </Typography>
            </TimelineContent>
      </TimelineItem>

      <TimelineItem className={'timeline_content'}>
        <CustomTimelineSeparator/>
        <TimelineContent>            
            <Typography>
               {'title'} 
            </Typography>
            </TimelineContent>
      </TimelineItem>
      <TimelineItem >
        <CustomTimelineSeparator/>
        <TimelineContent className={'timeline_content'}>            
            <Typography>
               {'title'} 
            </Typography>
            </TimelineContent>
      </TimelineItem>*/}
    </Timeline> 
    )
}

export const CustomTimelineSeparator =()=>(
  
  <TimelineSeparator className="separator_padding">
    <TimelineDot className="timeline_dot"/>
    <TimelineConnector />
  </TimelineSeparator>


)

export default CustomTimeline
