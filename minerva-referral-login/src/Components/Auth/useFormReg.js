import {useState} from 'react'
import validateRegister from './validateRegister'

const useFormReg = validate => {
    //will be used when flask app is created
    //setting the values in the form, and the function to update the state
    const [values, setValues] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmpassword: '',

    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    //Function defining the actions when an error is encountered
    const [errorsName, setErrorsName] = useState({})
    const [errorsEmail, setErrorsEmail] = useState({})
    const [errorsPassword, setErrorsPassword] = useState({})


    //This function implements the changes when teh values are changed in the form
    //The values are grabbed by their name property in the html input tag

    const handleChange = e => {
        //Destructuring the inputs into each name: value pair
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    
    const handleSubmit = e => {
    
        e.preventDefault()

        setErrorsName(validateRegister(values))
        setErrorsEmail(validateRegister(values))
        setErrorsPassword(validateRegister(values))
        setIsSubmitting(true)
    }

    return {handleChange, values, handleSubmit, errorsName, errorsEmail, errorsPassword}
}

export default useFormReg


