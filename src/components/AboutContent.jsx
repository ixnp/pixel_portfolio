import portrait from "../assets/portrait_8bit_x2.png"
import portraitMobile from "../assets/portrait_8bit.png"
function AboutContent({width}) {
    return(
        <>
          <img src={portrait}></img>
          <div>
            <h2>Ix Procopios</h2>
            <h2>Software Engineer</h2>
          </div>
        </>
    )
}

export default AboutContent;