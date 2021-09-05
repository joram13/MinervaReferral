import React from 'react'
import Redirect from 'react-router-dom'


const ProtectedRoutes = ({component: Component, ...rest}) => {
    const [logged ] = useAuth()
    return (
        <Route
 
        {...rest}

        render = {()=> (
            logged? <Component/> : <Redirect to = '/login'/>
        )}
        />
            
        
    )
}

export default ProtectedRoutes
