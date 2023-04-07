import { useState } from 'react';

import Menu from "./Menu"
import ContentContainer from "./ContentContainer"

function MainContainer(){
    const [currentPage, setCurrentPage] = useState("About")

    const handleMenu = (page) => setCurrentPage(page)
    return (
        <div class="main">
            <ContentContainer currentPage={currentPage}/>
            <Menu handleMenu={handleMenu}/>
        </div>
    )
}
export default MainContainer