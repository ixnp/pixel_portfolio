import { useState } from "react"
import imageLecturerSmall from "../assets/lecturer.png"
import imageLecturer from "../assets/lecturer2.png"
import imageInstructorSmall from "../assets/instructor.png"
import imageInstructor from "../assets/instructor2.png"
import imageTaSmall from "../assets/Ta.png"
import imageTa from "../assets/Ta2.png"
import imageQaSmall from "../assets/qa.png"
import imageQa from "../assets/qa2.png"


const jobs = {
  lecturer: {
    title:"Software Engineering Lecturer",
    dates:"April 2021 - April 2023",
    description:"Enable +1500 students to create computer programs by delivering software development lectures nationwide. Create curriculum for JavaScript, React, Ruby, Ruby on Rails, Python, and Flask. Amend and improve the effectiveness of multiple company-wide education programs. Design video curriculum; used by students daily in live and flex programs. Optimize lecture preparation and delivery, including lecture repositories and technical documentation, by building tools and resources.",
    bulletPoints:["Developed and enhanced the technical skills of over 1500 students by creating technical curriculum and content.", "Provided instructors with preparation materials by producing template repos and lecture curriculum.", "Assisted successful completion of projects by instituting in-house wiki for instructors.", "Delivered lectures to students from different states, with classroom sizes ranging from 50 to 100.", "Documented workshop templates, starter, and solution code to enable instructors to deliver productive workshops."]
  },
  instructor: {
    title:"Software Engineering Lead Instructor",
    dates:"April 2019 - April 2021",
    description:"Trained students by conducting object-oriented and functional programming paradigms lessons. Taught multiple programming languages and frameworks by delivering numerous live coding demos. Held workshops to educate prospective students and industry software engineers. Discussed cohort management and curriculum planning through daily stand-ups. Pivoted live program from in-person to remote during quarantine.",
    bulletPoints:["Enabled students to create maintainable and clean software by educating functional programming paradigms.", "Enhanced students' knowledge regarding software lifecycle and programming by directing free workshops for hundreds of prospective students.", "Ensured efficient and reliable coding by creating data structure and algorithm curriculum.", "Educated in various software and programming languages, such as JavaScript, React, Ruby, and Ruby on Rails."]
  },
  teachingAssistant: {
    title:"Software Engineering Lead Teaching Assistant",
    dates:"Sep 2018 - March 2019 ",
    description:"Spearheaded overall planning and execution of student projects, from defining product scope and technical planning to implementation approach and refinement. Ensured career and technical development of pupils through mentorship and leadership.",
    bulletPoints:["Assured the accuracy of student's projects by reviewing code and providing proficient feedback.", "Improved students' understanding and concepts regarding various programming best practices, including functional design, DRYness, and readability."]
  },
  blueprint: {
    title:"Quality Analyst Assistant and Technical Support",
    dates:"Nov 2015 - Sep 2018",
    description:"Identified gaps and opportunities through close coordination with stakeholders and technical support department.Determined product bugs through collaboration with software development teams. Guided various troubleshooting techniques by leading training sessions.",
    bulletPoints:["Drove team's efficiency and growth by crafting and implementing effective action plans.", "Handled escalated tickets by resolving complex problems."]
  },
}

function Experience(){
  const [job, setJob] = useState('lecturer')

  
    return (
        <div class="experience">
          <div class="jobTitles">
            <img class={job=='lecturer'?'selected':null} onClick={() => setJob('lecturer')} src={job=='lecturer'?imageLecturer:imageLecturerSmall}/>
            
            <img class={job=='instructor'?'selected':null} onClick={() => setJob('instructor')} src={job=='instructor'?imageInstructor:imageInstructorSmall}/>
            <img  class={job=='teachingAssistant'?'selected':null} onClick={() => setJob('teachingAssistant')} src={job=='teachingAssistant'?imageTa:imageTaSmall}/>
            <img class={job=='blueprint'?'selected':null}  onClick={() => setJob('blueprint')} src={job=='blueprint'?imageQa:imageQaSmall}/>
          </div>
          <div class="jobDescription">
            <h2>{jobs[job].title}</h2>
            <h4>{jobs[job].dates}</h4>
            <p>{jobs[job].description}</p>
            <ul>
              {jobs[job].bulletPoints.map(bullet => <li>{bullet}</li>)}
            </ul>
          </div>
        </div>
    )
}
export default Experience