import {Component} from "react"
import img from "./11.png"
import styles from './Header.module.css'
class Img extends Component{
constructor(props){
    super()
}
render(){
return(
    <>
    <img src={img} alt='1' style={{marginLeft:'50px'}} className={styles.nkar}/>
    
    </>
)
}
}

export default Img