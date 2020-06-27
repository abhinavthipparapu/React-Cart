import React from 'react'
import {Route,Link,Switch} from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import Login from './Login'

const Products = () =>{
    return(
        <div>
            products
        </div>
    )
}


const About = () =>{
    return(
        <div>
            about
        </div>
    )
}

const Contact = () =>{
    return(
        <div>
            contact
        </div>
    )
}




class Routing extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const { app } = this.props
        console.log(this.props)
        return(
            <div>
                <Switch>
                    <Route path = "/" exact render={(...props)=><Home {...props} app = {app}/>} />
                    <Route path = "/products"  component={Products} />
                    <Route path = "/login" render={(...props)=><Login {...props} app = {app}/>}  />
                    <Route path = "/cart" render={(...props)=><Cart {...props} app = {app}/>} />
                </Switch>
                
            </div>
        
        )
       
        
    }
}

export default Routing