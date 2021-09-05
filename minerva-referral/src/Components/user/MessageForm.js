import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// core components
import GridContainer from "./contactMUI/GridContainer.js";
import GridItem from "./contactMUI/GridItem.js";
import CustomInput from "./contactMUI/CustomInput.js";
import {Button } from '@material-ui/core'


import styles from "./contactMUI/workStyle.js";


const useStyles = makeStyles(styles);

export default function MessageForm() {
  const classes = useStyles();

  const [subject, handleSubject] = useState('')
  const [email, handleEmail]= useState('')
  const [message, handleMessage] = useState('')

//  const  handleSubject = (e)=>{
//     this.setState({Subject: e.target.value})
//   }
//  const handleEmail = (e)=>{
//     this.setState({email: e.target.value})
//   }
//  const handleMessage = (e)=>{
//     this.setState({message: e.target.value})
//   }

//  const formSubmit = (e)=>{
   
//     e.preventDefault()
//     let data = {
//       subject: subject,
//       email: email,
//       message: message
//     }
//     axios.post('/api/someroute',data).then(res=>{
      
//       handleSubject('')
//       handleEmail('')
//       handleMessage('')
//       console.log('submitted')
//     }).catch((error)=>{
//       console.log('Email not sent. Error:', error)
//     })
//   }


  return (
    <div className={classes.section}>
      <br/><br/>
      <GridContainer justify="center">
        <br/>
        <GridItem cs={12} sm={12} md={8} lg={8} style={{textAlign: 'center'}}>
          
          <form >
            <GridContainer>
              <GridItem xs={12} sm={12} md={6} lg={6}>
                <CustomInput
                  labelText="Subject"
                  id="subject"
                  formControlProps={{
                    fullWidth: true
                  }}
                  value = {subject}
                  onChange = {handleSubject}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6} lg={6}>
                <CustomInput
                  labelText="Your Email "
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  value = {email}
                  onChange = {handleEmail}
                />
              </GridItem>
              <GridItem>
                 <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
                value = {message}
                onChange = {handleMessage}
              />
              </GridItem>
             
              <GridItem xs={12} sm={12} md={4} lg={3}>
                <Button variant = 'contained' color="primary" type="submit"  >Send message</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
