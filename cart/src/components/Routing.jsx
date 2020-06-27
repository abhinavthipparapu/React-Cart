import React from 'react'
import {Route,Link,Switch} from 'react-router-dom'
import Navigation from './Navigation'

import Home from './Home'

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

        return(
            <div>
                <Navigation />
                <Switch>
                    <Route path = "/" exact component={Home} />
                    <Route path = "/products"  component={Products} />
                    <Route path = "/about"  component={About} />
                    <Route path = "/contact" component={Contact} />
                </Switch>
                
            </div>
        
        )
       
        
    }
}

export default Routing