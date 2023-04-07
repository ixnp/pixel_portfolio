function Menu({handleMenu}) {
    return(
        <ul class="menu">
            <li onClick={() => handleMenu("About")}>About</li>
            <li onClick={() => handleMenu("Skills")}>Skills</li>
            <li onClick={() => handleMenu("Experience")}>Experience</li>
            <li onClick={() => handleMenu("Projects")}>Projects</li>
            <li onClick={() => handleMenu("Video")}>Videos</li>
            <li onClick={() => handleMenu("Contact")}>Contact</li>
        </ul>
    )
}

export default Menu