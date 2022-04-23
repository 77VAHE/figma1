import { Component } from "react";
import styles from './Header.module.css'


class Menu extends Component{
    constructor(){
        super()
    }
    render(){
        let arr =['Home','About','Blog','Contact']
        return(
            <ul>
                {arr.map((i,index)=>(
                    <li key ={index}>{i}</li>
                ))}
            </ul>
        )
    }
}
export default Menu