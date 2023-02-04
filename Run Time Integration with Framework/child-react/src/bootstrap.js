import React from "react";
import ReactDom from "react-dom";
import App from './App';

const fetch_el = document.getElementById("dev-react");

const mount = (el) => {
    ReactDom.render(<App/>, el);
}

if(fetch_el){
    mount(fetch_el);
}

export { mount }