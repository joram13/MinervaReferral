const validateRegisterEmail = (email)=>{
    //Validation for email content
    console.log("Registering email", email)
    let errorsEmail = {}
    var emailRequirements = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(!email.trim()){
        errorsEmail = "Email required"
    } else if(!emailRequirements.test(email)) {
        errorsEmail = "Enter a valid email address"
    }else{
        errorsEmail="Valid"
    }
return errorsEmail
}

export default validateRegisterEmail





