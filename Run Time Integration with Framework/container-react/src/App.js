import React from "react";
import VueChild from './components/vueChild';
import ReactChild from './components/reactChild';

export default () => {

    const card = {
        border: "1px solid #1F778D",
        backgroundColor: "#f3fdff",
        textAlign: "center",
        padding: "20px 0px",
        color: "#1F778D",
        padding: "20px"
    }

    return <div style={card}>
        Container: React
        <br/><br/>
        <VueChild/>
        <br/>
        <ReactChild/>

    </div>
}