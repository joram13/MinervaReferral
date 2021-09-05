import { render, screen } from '@testing-library/react';

import validateLogin from '../Components/Auth/validateEmailLogin';
import validatePasswordLogin from '../Components/Auth/validatePasswordLogin';




  //testing login validation methods
  describe("emaillogin", ()=>{
    test("Validated email in login form", ()=>{
      const text = 'example@email.com'
      expect(validateLogin(text)).toBe("Valid")
    })
    test("Validated email in login form .abc@def.com", ()=>{
      const text = 'example.email@email.com'
      expect(validateLogin(text)).toBe("Valid")
    })
    test('Empty email', ()=>{
      const text = ""
      expect(validateLogin(text)).toBe("Email required")
    })
  
    test('Invalid email no @', ()=>{
      const text = 'exampleemail.com'
      expect(validateLogin(text)).toBe("Enter a valid email address")
    })
    test('Invalid email too short', ()=>{
      const text = 'examp'
      expect(validateLogin(text)).toBe("Enter a valid email address")
    })
  
  })
  
  describe("passwordLogin", ()=>{

    test("Validated password in login form", ()=>{
      const text = ''
      expect(validatePasswordLogin(text)).toBe('Password is required')
    })
    test("Validated password in login form", ()=>{
      const text = '1'
      expect(validatePasswordLogin(text)).toBe('Password needs to be longer than 8 characters')
    })
  })
  
  //add cookies session deletion somehow
// add tests for useEffects and dependencies
//think about how to test whether form inputs are not code (security)
//minerva emails only
