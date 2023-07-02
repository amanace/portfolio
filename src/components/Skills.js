import React from "react";
import { Card } from "reactstrap";
import {Col,Row} from "react-bootstrap";
import {TiTickOutline} from 'react-icons/ti';

const sty ={
    padding:15,
    margin:40,
    paddingRight:70,
    paddingLeft:70,
    textAlign:'center',
    justifyContent:'center',
    width:300,
    height:250,
    boxShadow:'revert'
}

function Skills(){
    return(
        <div id='skills'>
             <div className="text-center">
            <h2 className="text-center">Skills</h2>
            <span class="section__subtitle"></span>
            </div>
            <Row >
                <Col style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
            <Card style={sty}>
          
            <h6 style={{paddingBottom:25}}>Frontend Developer</h6>
                <h6><TiTickOutline/>ReactJS</h6>
                <h6> <TiTickOutline/>Figma/Adobe XD</h6>
                <h6><TiTickOutline/>HTML/CSS/JS</h6>
            </Card>
            </Col>
            <Col style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Card style={sty}>
           
            <h6 style={{paddingBottom:25}}>Backend Developer</h6>
                <h6><TiTickOutline/>Node.js</h6>
                <h6><TiTickOutline/>Express</h6>
                <h6><TiTickOutline/>MongoDB</h6>
            </Card>
            </Col>
            <Col style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Card style={sty}>
            
            <h6 style={{paddingBottom:25}}>AI/ML(Business Analytics)</h6>
                <h6><TiTickOutline/>Machine Learning</h6>
                <h6><TiTickOutline/>Deep Learning</h6>
                <h6><TiTickOutline/>Tableau</h6>
            </Card>
            </Col>
            </Row>
        </div>
    );
}

export default Skills;