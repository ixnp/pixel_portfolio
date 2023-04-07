//import portrait from "../assets/portrait_8bit_x2.png"
import AboutContent from "./AboutContent"
import Skills from "./Skills"

function ContentContainer({currentPage}) {
console.log(currentPage)
const  renderContent = () => {
        switch(currentPage){
            case "About":
                return  <AboutContent/>
            case "Skills":
                return  <Skills/>
            case "Experience":
                break
            case "Projects":
                break
            case "Videos":
                break
            case "Contact":
                break
        }
    }
    return(
        <div class="ContentContainer">
          {renderContent()}
        </div>
    )
}

export default ContentContainer