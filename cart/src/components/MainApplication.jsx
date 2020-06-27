import React, { Component } from 'react';
import Routing from './Routing'
import Navbar from './Navigation'

class MainApplication extends Component {
    constructor(props) {
        super(props);
        this.state ={
            cartArray :[],
            isAuth : false,
            users : [{
                name :"admin",
                password : "admin" 
            },
            {
                name :"abhinav",
                password : "abhinav"  
            }
        ]
        }
        
    }
 //Authentication

    isAuthentication =()=>{
        if(this.state.isAuth){
            return true
        }else{
            return false
        }
    }
    //user verification

    userVerification = ({name, password})=>{
        let {users} = this.state
        // console.log(users)
        var flag = false
        for(var i=0;i<users.length;i++){
            if(users[i].name == name && users[i].password == password){
                flag =true
                console.log("successful login")
                this.setState({
                    isAuth:true
                })
            }
        }
        if(flag == false){
            console.log("Enter correct credentials")
            alert("please enter correct credentials")
        }
    }
   
    addToCart = (payload)=>{
        if(!this.isAuthentication()){
            alert("you must have login first")
            return
        }
        console.log(payload)
        let cart = [...this.state.cartArray]
        let id = payload.id

        // same item will pushed what should happens
        let item = {
            ...payload,
            qty:1
        }


        let duplicate = false
        for(let i = 0;i<cart.length;i++){
            if(cart[i].id === id){
                duplicate = true
                cart[i].qty++
            }
        }
        if(duplicate){
            this.setState({
                cartArray:cart
            })
        }else{
            this.setState({
                cartArray:[...cart,item]
            })
        }
        console.log(cart)
    }

    getTheCartArray = ()=>{
        return this.state.cartArray
    }
    
    render() {
        let methods = {
            addToCart:this.addToCart,
            getTheCartArray:this.getTheCartArray,
            isAuthentication:this.isAuthentication,
            userVerification : this.userVerification
        }
        return (
            <div>
                <Navbar/>
                <Routing app = {methods} />
            </div>
        );
    }
}

export default MainApplication;