import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Grid, Button, Typography, CardMedia, Paper } from '@material-ui/core'
import UserCard from '../Components/Users/UserCard'
import users from '../Components/Users/userData'
import companies from '../Components/CompanyScreen/companyData'
import PublicIcon from '@material-ui/icons/Public';
import GridItem from '../Components/user/contactMUI/GridItem';

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`,
    borderRadius: "10",
    padding: "10px",
    height: "60vh",
    width: "100vw",
    backgroundPosition: "center",
    backgroundrepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",

    alignItems: "center",
    marginTop: "2px",
    marginBottom: "10px",


    color: "#fff",
    fontSize: "4rem",
    textAlign: "left",


  },
  details: {
    width: "50vw",

  },

  usersContainer: {
    paddingTop: "20px",

  },
  people: {
    textAlign: "left",
    color: "#fff",
  },

  companyLogo: {
    width: "15rem",
    height: "14.5rem",
    borderRadius: "50%",
    zIndex: "100",
    marginLeft: "50px",
    marginBottom: "20px",
    backgroundColor: "#fff",
  },
  grid: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  companyInfo: {

    borderRadius: "10%",
    width: "200px",
    height: "200px",
    zIndex: "100",
    display: "flex",
    padding: "20px",
    marginRight: "200px",
    marginLeft: "50px",

  }, companyInfo1: {

    color: "black",
    borderRadius: "5%",
    display: "flex",
    textAlign: "center",
    zIndex: "5"
  },
  subHeading: {
    color: "black",
    fontWeight: '4rem',
    fontSize: "4rem",
    marginLeft: "20px",
  }, companyInfoContainer: {
    display: "flex",
    alignItems: "center",
  }, container: {

    padding: "10px",
  }, companyDescription: {
    padding: "20px"
  }
}))


//Company screen showing all the users who are affiliated with the company by replicating the user card 
const CompanyScreen = () => {
  const classes = useStyles()
  //const [users, setUsers] = useState([])

  // useEffect(()=>{
  //   fetch('/api/users').then(response => {
  //   if(response.ok){
  //     return response.json()
  //   }
  //  }).then(users => console.log(users))
  //   setUsers(users)
  // }, [users])

  return (
    <>

      <Box className={classes.people}>
        <Box className={classes.hero}>
          <Box className={classes.companyInfoContainer}>
            <CardMedia className={classes.companyLogo} image={companies[0].image} title={companies[0].name} />

            <Box className={classes.companyInfo}>
              <Box >
                <h3>
                  {companies[0].name}
                </h3>

                <h5>
                  {companies[0].field} &nbsp; <PublicIcon fontSize="large" />
                </h5>

              </Box>
            </Box>


            <Button variant='contained' style={{ marginRight: "50px", }}  >
              <Typography variant="h6" className={classes.companyInfo1}>
                x Alumni
      </Typography>
            </Button>

            <Button variant="contained" style={{ marginRight: "50px", }} >
              <Typography variant="h6" className={classes.companyInfo1}>
                x Alumni
        </Typography>
            </Button>
            <Button variant="contained" style={{ marginRight: "50px", }} >
              <Typography variant="h6" className={classes.companyInfo1}>
                x Alumni
        </Typography>
            </Button>

            <Button variant="contained" >
              <Typography variant="h6" className={classes.companyInfo1}>
                x Roles
        </Typography>
            </Button>
          </Box>

        </Box>



        <Box >
          <Grid container style={{ marginBottom: "20px", marginLeft: "50px", marginRight: "50px", marginTop: "30px" }}>
            <GridItem md={12} lg={6}>
              <Paper className={classes.companyDescription}>
                <Typography variant="h6">
                  Company Description
          </Typography>
                <br />
                <Typography style={{ color: "gray" }}>
                  {companies[0].description}
                </Typography>
              </Paper>
            </GridItem>
            <GridItem md={12} lg={6}>
              <Paper className={classes.companyDescription}>
                <Typography variant="h6">
                  FAQs
        </Typography>
                <iframe
                  src="https://docs.google.com/document/d/e/2PACX-1vTD8BhwjHcYacvixwcwjnnHytRweN9FQUApWYXOkLGA8PPake3CmOHouYH634qo0WR5EhltCKpGYq5u/pub?embedded=true" width="100%" height="90px">

                </iframe>

              </Paper>
            </GridItem>
          </Grid>
        </Box>



      </Box>



      <Container >
        <Box boxShadow={3} className={classes.container}>
          <Typography variant='h6' className={classes.subHeading}>Associated People</Typography>
          <br />
          <Grid container spacing={2}>

            {users.map(user =>

              <Grid item xs={12} sm={6} md={4} lg={3} className={classes.grid}>
                <UserCard user={user} />
              </Grid>


            )}

          </Grid>
        </Box>

      </Container>

    </>

  )
}

export default CompanyScreen
