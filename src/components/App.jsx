import '../style/Container.scss';
//Image assets
import cloud_left from "../assets/cloud_left.png"
import cloud_right from "../assets/cloud_right.png"
import pixel_stars_1 from "../assets/pixel_stars_1.png"
import pixel_stars_2 from "../assets/pixel_stars_2.png"
import pixel_stars_3 from "../assets/pixel_stars_3.png"
//Components
import MainContainer from "./MainContainer"


function App() {
  return (
    <div className="App">
      <MainContainer />
      <img alt="stars_layer_1" id="stars_layer_1" src={pixel_stars_1}/>
      <img alt="stars_layer_2" id="stars_layer_2" src={pixel_stars_2}/>
      <img alt="stars_layer_3" id="stars_layer_3" src={pixel_stars_3}/>
     <div class="clouds">
      <img alt="cloud_left" id="cloud_left" src={cloud_left}/>
      <img alt="cloud_right" id="cloud_right"src={cloud_right}/>
     </div>
    </div>
  );
}

export default App;
