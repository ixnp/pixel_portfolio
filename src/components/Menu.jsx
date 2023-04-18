import {useState} from 'react'
function Menu({handleMenu, width}) {
    const [menuClicked, setMenuClicked] = useState(false)
    const [menuClass, setMenuClass] = useState('menu')
  
    const handleClick = () => {
            setMenuClicked((prevMenuClicked)=> !prevMenuClicked)
            setMenuClass((prevMenuClick)=> prevMenuClick === 'menu'?'widget':'menu')
    }

    if(width > 1283 && menuClicked==true){
        console.log('hi')
        setMenuClicked(false)
        setMenuClass('menu')
    }
 

    return(
         width > 1283 || menuClicked ?
        <ul class={menuClass} onClick={handleClick}>
           
            <li onClick={() => handleMenu("About")}>About</li>
            <li onClick={() => handleMenu("Skills")}>Skills</li>
            <li onClick={() => handleMenu("Experience")}>Experience</li>
            <li onClick={() => handleMenu("Projects")}>Projects</li>
            <li onClick={() => handleMenu("Video")}>Videos</li>
            <li onClick={() => handleMenu("Contact")}>Contact</li>
            </ul>:
        <ul class="menu mobile">
            <li onClick={handleClick}>Menu</li>
        </ul>
    )
}

export default Menu