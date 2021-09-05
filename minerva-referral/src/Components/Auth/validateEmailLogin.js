export default function validateEmailLogin (emailLogin ) {
    //custom validation hook to be built upon to render error messages
    //when the received json is incorrect    

    let errorsEmail = {}
    console.log('errors email',errorsEmail)
    var emailmailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(!emailLogin){
        errorsEmail = "Email required"
    } else if(!emailLogin.match(emailmailformat)) {
        errorsEmail= "Enter a valid email address"
    }else if(emailLogin.length <=6){ 
        errorsEmail= "Enter a valid email address"
    }else{
        errorsEmail="Valid"
    }

   
    
    return errorsEmail
    
}
