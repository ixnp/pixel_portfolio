

import ContentContainer from "./ContentContainer"

function MainContainer({width, currentPage}){
    console.log(currentPage)
    return (
        <div class="main">
            <ContentContainer currentPage={currentPage} width={width}/>
        
        </div>
    )
}
export default MainContainer