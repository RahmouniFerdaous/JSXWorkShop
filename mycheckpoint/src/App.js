import './App.css';
import img from './imageInSrc.jpg';
import './style.css';


function App() {
  return (
    <div className="App">

<div style={{border:'solid 1px black',maxWidth:'100vw'}} >

    <h1 className="title red">Your name here</h1>

    <br/>

    <img src={img} alt="Gladiator" height="200"  width="250" />

    <br/>

<img src="/imageInPublic.jpg" alt="Kingdom Of Heaven" />

</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4"/>

</video>

    </div>
  );
}

export default App;
