
const validateRegisterName = ( fullname = '', email = '', password = '', confirmpassword = '')=>{
    //validating inputs for the register functionality
    console.log("Name", fullname)
    let errorsName = {}

    if(!fullname.trim()){
        errorsName = "Full name required"
    }else{
        errorsName = "Valid"
    }
    
    return errorsName
    
}
export default validateRegisterName



