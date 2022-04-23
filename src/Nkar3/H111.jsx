import { Component } from "react";



class H111 extends Component{
    constructor(){
        super()
    }
    render(){
       
        return(
        <div style={{placeContent: 'center',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
           <h1 style={{marginLeft:'50px'}}>I'm always on the go. Follow along!</h1> 
           <button style={{width:'15%' ,height:'40px'}}>@aloha</button>
           </div>
        )
    }
}
export default H111