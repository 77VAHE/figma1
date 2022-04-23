import { Component } from "react";



class Lorem extends Component{
    constructor(){
        super()
    }
    render(){
       
        return(
        <div style={{width:'100%',height:'350px' ,  justifyContent: 'center',alignItems: 'center',background:'#4B321D',borderRadius:'15px'}}>
           <h1 style={{fontSize:'75px',color:'white',marginLeft:'50px'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</h1> 
           <p style={{fontSize:'30px',color:'white',marginLeft:'50px'}}>Full Name, CEO at Client</p>
           </div>
        )
    }
}
export default Lorem