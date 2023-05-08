import iconJS from "../assets/bit-js-icon.png"
import iconPython from "../assets/bit-python.png"
import iconC from "../assets/bit-c#-icon.png"
import iconRuby from "../assets/bit-ruby.png"
import iconSql from "../assets/bit-sql.png"
import iconReact from "../assets/bit-react.png"
import iconNode from "../assets/bit-node.png"
import iconRails from "../assets/bit-rails.png"
import iconFlask from "../assets/bit-flask.png"
import iconFunctional from "../assets/bit-functional.png"
import iconOpp from "../assets/bit-oop.png"
import iconHP from "../assets/bit-hp.png"
import iconMP from "../assets/bit-mp.png"


//TODO:Create a scroll indication 
//TODO: Add year indication

function Skills() {
    return(
        <div class="skills-content">
          <ul class="info">
            <h2>Ixius Procopios LV: 33</h2>
          </ul>
          <ul class="languages">
            <h2>Languages</h2>
            <li><img src={iconJS}/> JavaScript <div class="statBar"  style={{width:'90%', backgroundColor:'#e8e809'}}></div><p>5yr</p></li>
            <li><img src={iconPython}/> Python<div class="statBar" style={{width:'60%', backgroundColor:'#03a1fc'}}> </div><p>1yr</p></li>
            <li><img src={iconC}/> C# / .NET<div class="statBar"style={{width:'60%', backgroundColor:'#07e019'}}> </div><p>1yr</p></li>
            <li><img src={iconRuby}/> Ruby<div class="statBar" style={{width:'80%', backgroundColor:'#d90f28'}}> </div><p>4yr</p></li>
            <li><img src={iconSql}/>SQL<div class="statBar" style={{width:'90%', backgroundColor:'#e87109'}}> </div><p>5yr</p></li>
          </ul>
          <ul class="libraries">
            <h2>Libraries</h2>
            <li><img src={iconReact}/>React<div class="statBar"  style={{width:'90%', backgroundColor:'#03a1fc'}}> </div><p>5yr</p></li>
            <li><img src={iconNode}/>Node.js<div class="statBar" style={{width:'60%', backgroundColor:'#07e019'}}> </div><p>1yr</p></li>
            <li><img src={iconRails}/>Rails<div class="statBar"  style={{width:'80%', backgroundColor:'#d90f28'}}> </div><p>4yr</p></li>
            <li><img src={iconFlask}/>Flask<div class="statBar" style={{width:'60%', backgroundColor:'#cfd4d0'}}> </div><p>1yr</p></li>
          </ul>
          <ul class="paradigms">
            <h2>Paradigms</h2>
            <li><img src={iconOpp}/>Object-Oriented Programming<div class="statBar" style={{width:'90%', backgroundColor:'#03a1fc'}}></div><p>5yr</p> </li>
            <li><img src={iconFunctional}/>Functional Programming<div class="statBar" style={{width:'90%', backgroundColor:'#03a1fc'}}></div><p>5yr</p> </li>
          </ul>
        </div>
    )
}

export default Skills;

