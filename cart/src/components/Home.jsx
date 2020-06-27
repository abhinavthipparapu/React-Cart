import React from 'react'
import data from './Data.json'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }

    

    handleClick = (id)=>{
        let item = data.find(item=>item.id===id)
        console.log(item)
        const { app } = this.props
        app.addToCart(item)
    }

    render(){
        console.log(this.props)
        return(
            <div style= {{padding:10,marginTop:20,marginLeft:50,}}>
                {

                    data.map(item=>{
                        return(
                            <div key={item.id} style={{border:"1px solid black",width:200,margin:10}}>
                                <div>
                                    <img src={item.img}/>
                                    <p>Name:{item.name}</p>
                                    <p>Price:{item.price}</p>
                                    <button onClick={()=>{this.handleClick(item.id)}}>Add to cart</button>
                                </div>
                            </div>
                        )
                        
                    })
                }
            </div>
        )
    }
}

export default Home