//import portrait from "../assets/portrait_8bit_x2.png"
import AboutContent from "./AboutContent"
import Skills from "./Skills"
import Experience from "./Experience"

function ContentContainer({currentPage, width}) {

const  renderContent = () => {
        switch(currentPage){
            case "about":
                return  <AboutContent width={width}/>
            case "skills":
                return  <Skills />
            case "experience":
                return <Experience />
            case "projects":
                break
            case "videos":
                break
            case "contact":
                break
        }
    }
    return(
        <div class={`ContentContainer ${currentPage}`}>
          {renderContent()}
        </div>
    )
}

export default ContentContainer