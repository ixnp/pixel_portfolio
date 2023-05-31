import portrait from "../assets/portrait_8bit_x2.png"
import portraitMobile from "../assets/portrait_8bit.png"

import imageMail from "../assets/bit-mailx2.png"
import imageLinkedInx2 from "../assets/bit-linkedInx2.png"
import imageGitx2 from "../assets/bit-gitx2.png"
import imageResume2 from "../assets/bit-resumex2.png"
import resume from "../assets/Ixius_Procopios_Resume.pdf"
function AboutContent() {
    return(
        <>
          <img id="portrait" src={portrait}></img>
          <div class="about-content">
            <h2>Ix Procopios</h2>
            <h2>Software Engineer</h2>
            <ul>
          

              <li><a href="mailto:enprocopios@gmail.com"><img src={imageMail}/></a></li>
              <li><a href="https://www.linkedin.com/in/ix-procopios/"><img src={imageLinkedInx2}/></a></li>
              <li><a href="https://github.com/ixnp"><img src={imageGitx2}/></a></li>
              <li><a href={resume}><img src={imageResume2}/></a></li>
            </ul>
          </div>
        
        </>
    )
}

export default AboutContent;