import { Component } from "react";
import Img11 from './Img11'
import H111 from './H111'


class Nkar3 extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <header>
                <div  style={{display:'flex',justifyContent:'space-between',marginBottom:'50px'}}>
                    
                    <H111/>
                    <Img11/>
                </div> 
            </header>

        )
    }
}
export default Nkar3