import React from 'react';
import {Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
//import { white } from '@material-ui/core/colors';

import DescriptionIcon from '@material-ui/icons/Description';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: "#fff"[500],
  },
}));

export default function UserCard({user}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Link to='/user'><Avatar src = {user.image} alt = '' aria-label="avatar" className={classes.avatar}/></Link>
          
        }
        action={<Link to='/user'>
          <IconButton aria-label="settings">
              <MoreVertIcon />
          </IconButton>
          </Link>
        }
          
          title={user.name}    
        subheader={user.email}
      />
      <Link to = '/user'>
      <CardMedia
        className={classes.media}
        image={user.cover}
        title={user.name}
      />
      </Link>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {user.current_work}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
          <IconButton aria-label="share">
         <DescriptionIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
         <LinkedInIcon />
        </IconButton>


        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>


      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Class: {user.grad_year}
          </Typography>
          <Typography paragraph>
            Major: {user.major}
        </Typography>
        <Typography paragraph>
            Interests, skills & hobbies {user.interests}
        </Typography>
          <Typography paragraph>
            
            Bio synopsis: {user.bio}
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
