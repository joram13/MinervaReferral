import { render, screen } from '@testing-library/react';
import validateRegisterName from '../Components/Auth/validateRegisterName'
import  validateRegisterEmail from '../Components/Auth/validateRegisterEmail'
import validateRegisterPassword from '../Components/Auth/validateRegisterPassword'


//testing registering authentication methods
describe("Register", ()=>{
    test("Validated name", ()=>{
        const text = 'Ex'
        expect(validateRegisterName(text)).toBe("Valid")
      })  

    test("Validated if email in register form", ()=>{
      const text = ''
      expect(validateRegisterEmail(text)).toBe("Email required")
    })
    test("Validated email in register form", ()=>{
        const text = 'example@emaill.com'
        expect(validateRegisterEmail(text)).toBe("Valid")
      })

    test("Validated password in register form", ()=>{
        const text = 'example@email.com'
        expect(validateRegisterPassword(text)).toBe("Confirming password is required")
      })

})