import '../style/Container.scss';
import { useState } from 'react';

//Image assets
import cloud_left from "../assets/cloud_left.png"
import cloud_right from "../assets/cloud_right.png"
import pixel_stars_1 from "../assets/pixel_stars_1.png"
import pixel_stars_2 from "../assets/pixel_stars_2.png"
import pixel_stars_3 from "../assets/pixel_stars_3.png"
import pixel_stars_1_mobile from "../assets/pixel_stars_1_mobile.png"
import pixel_stars_2_mobile from "../assets/pixel_stars_2_mobile.png"
import pixel_stars_3_mobile from "../assets/pixel_stars_3_mobile.png"
//Components
import MainContainer from "./MainContainer"

import Menu from "./Menu"

import useWindowDimensions from "../hooks/useWindowDimensions"



function App() {
  const {height, width} = useWindowDimensions();
  const [currentPage, setCurrentPage] = useState("about")
   
  const handleMenu = (page) => setCurrentPage(page)

  console.log(currentPage)
  return (
    <div  className="App">
      <Menu handleMenu={handleMenu}  width={width}  />
      <MainContainer width={width} currentPage={currentPage}/>
      <img alt="stars_layer_1" id="stars_layer_1" src={ width > 700 ? pixel_stars_1 : pixel_stars_1_mobile}/>
      <img alt="stars_layer_2" id="stars_layer_2" src={width > 700 ? pixel_stars_2 :pixel_stars_2_mobile}/>
      <img alt="stars_layer_3" id="stars_layer_3" src={width > 700 ? pixel_stars_3 :pixel_stars_3_mobile}/>
     <div class="clouds">
      <img alt="cloud_left" id="cloud_left" src={cloud_left}/>
      <img alt="cloud_right" id="cloud_right"src={cloud_right}/>
     </div>
    </div>
  );
}

export default App;
