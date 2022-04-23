import { Component } from "react";
import Img1 from './Img1'
import H11 from './H11'


class Nkar extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <header>
                <div  style={{display:'flex',justifyContent:'space-between'}}>
                    <Img1/>
                    <H11/>
                    
                </div> 
            </header>

        )
    }
}
export default Nkar