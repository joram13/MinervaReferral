import { render, screen } from '@testing-library/react';
import App from '../App'
import LoginForm from '../Components/Auth/LoginForm'
import RegisterForm from '../Components/Auth/RegisterForm'
import Login from '../Components/Auth/Login'


//testing rendering of components that are ready
describe("App rendering", ()=>{
    test("App rendering", ()=>{
        const component = render(<App/>)
    })
    test("LoginForm rendering", ()=>{
        const component = render(<LoginForm/>)
    })
    test("RegisterForm rendering", ()=>{
        const component = render(<RegisterForm/>)
    })
    test("Auth rendering", ()=>{
        const component = render(<Login/>)
    })
})   