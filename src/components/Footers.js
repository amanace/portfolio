import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
} from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

const styles={
    arclink:{
        textDecoration: 'none',
        padding:10,
        textDecorationLine:'',
        color:"white"
    }
}

function Foot() {
  return (
    <div>
      <h2
        style={{
          padding: 20,
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        Aman Kumar
      </h2>

      <ul
        class="list-unstyled nav-links mb-5"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 10,
          
        }}
      >
        <li style={styles.arclink}>
          <AnchorLink href="#home">Home</AnchorLink>
        </li>
        <li style={styles.arclink}>
          <AnchorLink href="#about">About</AnchorLink>
        </li>
        
        <li style={styles.arclink}>
          <AnchorLink href="#skills">Skills</AnchorLink>
        </li>
        <li style={styles.arclink}>
          <AnchorLink href="#project">Projects</AnchorLink>
        </li>

        <li style={styles.arclink}>
          <AnchorLink href="#contact">Contact</AnchorLink>
        </li>
      </ul>

      <div class="social mb-4">
        <h3
          style={{
            padding: 5,
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Stay in touch
        </h3>
        <ul
          class="list-unstyled"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <h3 style={{ padding: 7 }}>
          <a href="https://www.instagram.com/aman.ace/">
          <AiOutlineInstagram /> </a>
        </h3>
        <h3 style={{ padding: 7 }}><a
           href="https://www.linkedin.com/in/amankumar-ace/" ><BiLogoLinkedin/> </a>
        </h3>
        <h3 style={{ padding: 7 }}>
          <a href="https://twitter.com/amanace07">
          <AiOutlineTwitter/></a>
        </h3>
        
        <h3 style={{ padding: 7 }}>
        <a href="https://github.com/amanace">
          <AiOutlineGithub /></a>
        </h3>
        </ul>
      </div>

      <div
        class="copyright"
        style={{
          padding: 10,
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <p style={{ margin: 20 }}>
        <small>Made by Aman Kumar.</small> <br></br>
          <small>&copy; Aman Kumar. All Rights Reserved.</small>
        </p>
      </div>
    </div>
  );
}

export default Foot;
