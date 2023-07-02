import React from "react";
import { Card } from "reactstrap";


const sty ={
    padding:15,
    margin:20,
    marginRight:60,
    marginLeft:60,
}

function Project(){
    return(
        <div id='project'>
            <div className="text-center">
            <h2 className="text-center">Portfolio</h2>
            <span class="section__subtitle">Project List</span>
            </div>
            <Card style={sty}>
                <h4>Breast Cancer Detection using Deep learning</h4>
            </Card>
            <Card style={sty}>
                <h4>Fake News Detection using Deep learning</h4>
            </Card>
            <Card style={sty}>
                <h4>Car Space Parking detection using DL and CV</h4>
            </Card>
            <Card style={sty}>
                <h4>Essay Grading Using LSTM / NLP</h4>
            </Card>
            <Card style={sty}>
                <h4>Finance Tracker / Web Dev Project using HTML/CSS/JS</h4>
            </Card>
            
        </div>
    );
}

export default Project;