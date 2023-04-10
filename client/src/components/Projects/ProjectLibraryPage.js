import React from "react"
import "./ProjectLibraryPage.module.css"
import JsonData from './ProjectLibraryData.json';

function StudentProjectLibraryPage() {

    const displayProjects = JsonData.map(
        (projectInfo) => {
            return (
                <div className="projectCardsContainer">
                    <div className="projectDisplayItems">
                        <img className="projectImage" src={projectInfo.Image} alt={projectInfo.Name}></img>
                        <h3 className="projectName"> {projectInfo.Name} </h3>
                        <h4 className="projectLevelAndType"> {projectInfo.Level}<span> | </span>{projectInfo.Type} </h4>
                    </div>
                </div>
            )
        });



    return (
        <div>

            {/* Title and description */}
            <div className="pageTitle">
                <h1>Projects</h1>
                <p>Welcome to the project library. You can use the filters on the right to help you search for the specific projects.</p>
            </div>

            {/* Side Bar - Subscription Checkbox  */}
            <div className="subscriptionCheckbox">
                <h5>SUBSCRIPTION</h5>
                <div>
                    <input type="checkbox" checked="checked"></input>
                    <span class="checkmark"></span>
                    <label class="container">Free</label>
                    <br></br>
                    <input type="checkbox"></input>
                    <span class="checkmark"></span>
                    <label class="container">Premium</label>
                    <br></br>
                </div>
            </div>


            {/* Side Bar - Activity Type Checkbox  */}
            <div className="activityTypeCheckbox">
                <h5>ACTIVITY TYPE</h5>
                <div>
                    <input type="checkbox" checked="checked"></input>
                    <span class="checkmark"></span>
                    <label class="container">Animation</label>
                    <br></br>
                    <input type="checkbox"></input>
                    <span class="checkmark"></span>
                    <label class="container">Game</label>
                    <br></br>
                    <input type="checkbox"></input>
                    <span class="checkmark"></span>
                    <label class="container">Chatbot</label>
                    <br></br>
                    <input type="checkbox"></input>
                    <span class="checkmark"></span>
                    <label class="container">Augmented Reality</label>
                    <br></br>
                </div>
            </div>


            {/* Side Bar - Year level Checkbox  */}
            <div className="yearLevelCheckbox">
                <h5>YEAT LEVEL</h5>
                <div>
                    <input type="checkbox" checked="checked"></input>
                    <span class="checkmark"></span>
                    <label class="container">1-4</label>
                    <br></br>
                    <input type="checkbox" checked="checked"></input>
                    <span class="checkmark"></span>
                    <label class="container">5-6</label>
                    <br></br>
                    <input type="checkbox"></input>
                    <span class="checkmark"></span>
                    <label class="container">7-8</label>
                    <br></br>
                    <input type="checkbox"></input>
                    <span class="checkmark"></span>
                    <label class="container">9-13</label>
                    <br></br>
                </div>
            </div>


            {/* Side Bar - Subject Matter Checkbox  */}
            <div className="subjectMatterCheckbox">
                <h5>SUBJECT MATTER</h5>
                <div>
                    <input type="checkbox" checked="checked"></input>
                    <span class="checkmark"></span>
                    <label class="container">Computer Science</label>
                    <br></br>
                    <input type="checkbox"></input>
                    <span class="checkmark"></span>
                    <label class="container">Maths</label>
                    <br></br>
                    <input type="checkbox"></input>
                    <span class="checkmark"></span>
                    <label class="container">Science</label>
                    <br></br>
                    <input type="checkbox"></input>
                    <span class="checkmark"></span>
                    <label class="container">Language</label>
                    <br></br>
                    <input type="checkbox"></input>
                    <span class="checkmark"></span>
                    <label class="container">Art</label>
                    <br></br>
                    <input type="checkbox"></input>
                    <span class="checkmark"></span>
                    <label class="container">Music</label>
                    <br></br>
                </div>
            </div>



            <div className="projectCardsDisplay">
                {/* <h1></h1> */}
                {displayProjects}
            </div>

            <div>
                {/* <a href="#"> */}
                <button className="backToTopButton"> BACK TO TOP </button>
                {/* </a> */}
            </div>

        </div>
    )
}


export default StudentProjectLibraryPage