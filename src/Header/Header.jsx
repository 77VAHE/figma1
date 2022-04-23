import { Component } from "react";
import Img from './Img'
import Menu from './Menu'


class Header extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <header>
                <div className="container" style={{display:'flex',justifyContent:'space-between'}}>
                    <Img/>
                    <Menu/>
                    
                </div> 
            </header>

        )
    }
}
export default Header