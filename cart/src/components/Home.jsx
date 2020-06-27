import React from 'react'
import data from './Data.json'

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(data)
        return(
            <div>
                {

                    data.map(item=>{
                        return(
                            <div key={item.id}>
                                <div>
                                    <img src={item.img}/>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                    <button>Add to cart</button>
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