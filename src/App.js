import './App.scss';
import cloud_left from "./assets/cloud_left.png"
import cloud_right from "./assets/cloud_right.png"

function App() {
  return (
    <div className="App">
     <div class="clouds">
      <img alt="cloud_left" id="cloud_left" src={cloud_left}/>
      <img alt="cloud_right" id="cloud_right"src={cloud_right}/>
     </div>
    </div>
  );
}

export default App;
