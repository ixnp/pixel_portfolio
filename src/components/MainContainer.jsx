import { useState } from 'react';
import useWindowDimensions from "../hooks/useWindowDimensions"

import Menu from "./Menu"
import ContentContainer from "./ContentContainer"

function MainContainer(){
    const [currentPage, setCurrentPage] = useState("About")
    const {height, width} = useWindowDimensions();
   
    const handleMenu = (page) => setCurrentPage(page)
    return (
        <div class="main">
            <ContentContainer currentPage={currentPage} width={width}/>
            <Menu handleMenu={handleMenu} width={width}/>
        </div>
    )
}
export default MainContainer