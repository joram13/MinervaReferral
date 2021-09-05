import React from 'react'
import { Container, Grid } from '@material-ui/core'
import {Profile, Header, Portfolio,UserForm, MessageForm} from '../Components'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const UserPage = () => {
    return (
        <Container style = {{marginTop: "50px"}}>
            <Grid container spacing={7}>
                <Grid item lg = {3} md={4} sm={4} xs={12} >
                    <Profile/>
                </Grid>
                <Grid item xs >
                    
                    <Router>
                        <Header/>
                        <Switch>
                           <Route path = "/">
                            <Portfolio/>
                        </Route>
                        <Route path = "/updateprofile">
                          <UserForm/> 
                        </Route>  
                        <Route path = "/message">
                          <MessageForm/> 
                        </Route>  
                        </Switch>
                       
                    </Router>
                    
                    
                </Grid>
            </Grid>
        </Container>
    )
}

export default UserPage
