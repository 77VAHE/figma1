import { Component } from "react";



class H11 extends Component{
    constructor(){
        super()
    }
    render(){
       
        return(
        <div style={{placeContent: 'center',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
           <h1 style={{marginLeft:'50px'}}>My services are perfect for companies that are just getting started</h1> 
           <button style={{width:'15%' ,height:'40px'}}>Learn more</button>
           </div>
        )
    }
}
export default H11