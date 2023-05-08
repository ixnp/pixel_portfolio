import { useState } from 'react';
import iconWgu from "../assets/bit-wgu.png"
import iconItil from "../assets/bit-itil.png"
import iconComptiaA from "../assets/bit-comptia.png"
import iconComptiaProject from "../assets/bit-comptia-project.png"
import iconCodeFellows from "../assets/bit-code-fellows.png"

const eduObjects = [{school:"Western Governors University", cert:"Bachelor of Science in Software Development",date:"2023" }, {school:"Code Fellows", cert:"Certificate for Software Development",date:"2018"}, {school:"CompTIA", cert:"CompTIA A+",date:"2022"},  {school:"CompTIA", cert:"CompTIA Project+",date:"2022"},   {school:"Axelos", cert:"ITIL® Foundation Certificate in IT Service Management",date:"2022"} ]


function Education(){
const [education, setEducation] = useState(0)


    return (
        <div class="education">
            <h2>Education</h2>
            <div class="education-icons"> 

                <div onMouseOver={() => setEducation(0)}><img src={iconWgu}/></div>
                <div onMouseOver={() => setEducation(1)}><img src={iconCodeFellows}/></div>
                <div onMouseOver={() => setEducation(2)}><img src={iconComptiaA}/></div>
                <div onMouseOver={() => setEducation(3)}><img src={iconComptiaProject}/></div>
                <div onMouseOver={() => setEducation(4)}><img src={iconItil}/></div>
            </div>
          <div class="education-content">
            <h2>{eduObjects[education].cert}</h2>
            <h3>{eduObjects[education].school}</h3>
            <h3>{eduObjects[education].date}</h3>
          </div>
        </div>
    )
}
export default Education