import React from 'react'
import {Link} from 'react-router-dom'


class Navigation extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style= {{padding:10,marginTop:20,marginLeft:50}} >
                <Link to ="/" style= {{padding:10}}>Home |</Link>
                <Link to ="/products" style= {{padding:10}} >products |</Link>
                <Link to ="/login" style= {{padding:10}}>login |</Link>
                <Link to ="/cart" style= {{padding:10}}>cart |</Link>
            </div>
        )
    }
}

export default Navigation