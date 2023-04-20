import portrait from "../assets/portrait_8bit_x2.png"
import portraitMobile from "../assets/portrait_8bit.png"

import imageMail from "../assets/bit-mailx2.png"
import imageLinkedInx2 from "../assets/bit-linkedInx2.png"
import imageGitx2 from "../assets/bit-gitx2.png"


function AboutContent() {
    return(
        <>
          <img id="portrait" src={portrait}></img>
          <div>
            <h2>Ix Procopios</h2>
            <h2>Software Engineer</h2>
            <ul>
              <li><img src={imageMail}/></li>
              <li><img src={imageLinkedInx2}/></li>
              <li><img src={imageGitx2}/></li>
            </ul>
          </div>
        
        </>
    )
}

export default AboutContent;