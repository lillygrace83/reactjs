import React from "react";
import ReactDOM  from "react-dom";
import Comments from "./comments";


const App = () => { 
    return(
        <>
        <Comments/>
        </>
    )
}
ReactDOM.render(
    <>
    <App/>
    </>,
    document.getElementById("root")
)

