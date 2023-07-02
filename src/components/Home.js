import React from "react";
import amanpic from "../image/amanpic.jpeg";


function Home(){
    return(
<div id='home' style={{padding: 20,margin:60,marginBottom:60,paddingBottom:60}}>
    <h1 className="text-center">Hello
    
    <img style={{margin: 10,borderRadius:20,width: 150,height:270}} src={amanpic} alt="Aman"/>
    EveryOne!
    </h1>
    <div>
        <h2 className="text-center">
            <b style={{fontFamily:'cursive',fontSize:38}}>This is Aman Kumar</b>
        </h2>
    </div>
</div>
    );
}

export default Home;