import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header"
import Nkar2 from './12.png'
import Nkar1 from './Nkar/Nkar1'
import Nkar3 from './Nkar3/Nkar11';
import Lorem from './Lorem/Lorem';
import Footer from './Footer';
function App() {
  return (
    <div style={{margin:'auto',width:"97%"}}>
    <Header/>
    <h1 style={{fontSize:'80px', marginLeft:'50px'}}>Creating purpose-built brands & websites</h1>
<img src={Nkar2} alt='' style={{width:'100%' ,height:'700px'}}/>
<h1 style={{fontSize:'80px',marginLeft:'50px'}}>I help emerging brands get their footing in today's digital world.</h1>
<button style={{width:'15%' ,height:'40px', marginLeft:'55px',marginBottom:'50px'}}>See my work</button>
<Nkar1 />
<Nkar3/>
<Lorem/>
<h2 style={{fontSize:'80px',marginLeft:'50px' }}>Seem like a good fit?</h2>
<button style={{width:'15%' ,height:'40px', marginLeft:'55px',marginBottom:'50px'}}>Let's talk!</button>

<Footer/>
    </div>
  );
}

export default App;
