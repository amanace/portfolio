import React from "react";
import {Row, Col} from 'react-bootstrap';
// import { Alert } from "react-bootstrap";

import {
  Form,
  Input,
  FormGroup,
  Label,
  // FormText,
  Button,
} from "reactstrap";

function Contact() {
  return (
    <div id="contact">
      <div className="text-center">
      <h2
        style={{
          padding: 10,
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {" "}
        Contact
      </h2>
      <span class="section__subtitle">Email: aman.ace0701@gmail.com</span>
      </div>
      <Row style={{marginBottom:60,marginTop:40,margin:10}}>
        <Col style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div style={{padding:100,borderRadius:'100%',width:'50%',backgroundColor:"#8DB8FF",borderStyle:'groove',boxShadow:'10px 10px lightblue inset' }}>
                <div style={{padding:100,borderRadius:'100%',width:'100%',backgroundColor:"#BCECF9",borderStyle:'inset',boxShadow:'10px 10px lightblue inset'}}>
        </div>
        </div>
        
        </Col>
        <Col >
      <Form method="post" action="/"
        style={{
            width:'80%',
          padding: 20,
          justifyContent: "center",
        }}
      >
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="email"
            type="email"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input id="exampleText" name="text" type="textarea" />
        </FormGroup>

        <Button style={{backgroundColor:'ActiveCaption'}} >Submit</Button>
        
      </Form>
      </Col>
      </Row>
    </div>
  );
}

export default Contact;
