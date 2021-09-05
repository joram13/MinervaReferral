import React, {useState} from 'react'
import {Button,  Typography} from '@material-ui/core'
import GridContainer from "./contactMUI/GridContainer.js";
import GridItem from "./contactMUI/GridItem.js";
import CustomInput from "./contactMUI/CustomInput.js";
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import styles from "./contactMUI/workStyle.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);   


const UserForm = ({match, history}) => {
    const classes = useStyles();

    const[fullname, setFullname] = useState('')
    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')
    const[grad_year, setGrad_year]=useState('')
    const[current_work, setCurrent_work]=useState('')
    const[resume, setResume]=useState('')
    const[resume_public, setResume_public]=useState(true)


    const uploadFileHandler = async (e)=> {
        //restricting the uploads to be posted as only one resume
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('resume', file)
        

        try{
            const config = {
                headers:{
                    'Content-Type': 'multipart/form-data'
                } 
            }

            const{data} =await fetch('/api/upload',{
            method: 'post',
            body: JSON.stringify(formData, config)},
            
            formData, config)

            setResume(data)
            
        }catch{
            console.log('error uploading file')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let userData = {
            'name': fullname,
            'email': email,
            'password': password,
            'grad_year': grad_year,
            'current_work': current_work,
            'resume': resume,
            'resume_public': resume_public
          }

          //Here we are supposed to update the current logged in user's details, however, we must grab this information from the 
          //session. This information currently does not exist, therefore, I have not added the PUT request to the route
          if(!match.params.id){
            history.push('/login')
          }else{
              console.log(match.params.id, userData)
          }
    }


    return (
        <div className={classes.section}>
            <GridContainer justify="center">
            <form style={{width: "100%", justifyContent: "center", marginLeft: "80px"}}>
            <GridItem xs={6} sm={6} lg={6}>
             
            <CustomInput formControlProps={{
                    fullWidth: true
                  }} 
                  labelText="full Name " type = "text" id = "fullname" name = 'fullname' value = {fullname} onChange = {e => setFullname(e.target.value)}/>


            </GridItem>    

            <GridItem xs={6} sm={6} lg={6}>
            <CustomInput formControlProps={{
                    fullWidth: true
                  }}  labelText="Your Email " type = 'text' id = "email" name = 'email' value = {email} onChange = {e => setEmail(e.target.value)}/>          
               
            </GridItem>

            <GridItem xs={6} sm={6} lg={6}>
            
            <CustomInput formControlProps={{
                    fullWidth: true
                  }}  labelText="Password" type = "password" id = "password" name = 'password' value = {password} onChange = {e => setPassword(e.target.value)}/>   
            </GridItem>

            <GridItem xs={6} sm={6} lg={6}>
        
            <CustomInput formControlProps={{
                    fullWidth: true
                  }}  labelText="Year of Graduation" type = "text" id = "grad_year" name = 'grad_year' 
            value = {grad_year} onChange = {e => setGrad_year(e.target.value)}/>    
            </GridItem>
    
            <GridItem xs={6} sm={6} lg={6}>
             
            <CustomInput formControlProps={{
                    fullWidth: true
                  }}  labelText="Current work" type = "text" id = "current_work" name = 'current_work' 
            value = {current_work} onChange = {e => setCurrent_work(e.target.value)}/>    
            </GridItem>

            <GridItem xs={6} sm={6} lg={6}>
           
            <CustomInput formControlProps={{
                    fullWidth: true
                  }}  labelText="Resume (PDF)" type = "text" id = "resume" name = 'resume' 
            value = {resume} custom onChange = {uploadFileHandler}/>     
            </GridItem>
        
            <GridItem xs={6} sm={6} lg={6}>
            
            <FormControlLabel value = {resume_public}
            control={
            <Radio formControlProps={{
                    fullWidth: true
                  }}   id = "resume_public" name = 'resume_public' 
             onChange = {e => setResume_public(e.target.value)}/>}  
            label="Make resume public?" />              
            </GridItem>


            <Button variant= "contained" color="primary" value = "Submit" type = 'submit' onClick={handleSubmit}>
                <Typography style={{color: "white"}}>
                  Submit  
                </Typography>
            </Button>
            </form>


        </GridContainer>
   
        </div>
 
    )
}

export default UserForm
