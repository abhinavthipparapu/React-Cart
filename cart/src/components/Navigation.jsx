import React from 'react'
import {Link} from 'react-router-dom'


class Navigation extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div >
                <Link to ="/" >Home |</Link>
                <Link to ="/products" >products |</Link>
                <Link to ="/about" >about |</Link>
                <Link to ="/contact" >contact |</Link>
            </div>
        )
    }
}

export default Navigation