import React from "react";
import ReactDOM  from "react-dom";
import CommentBox from "./CommentBox";
import Button from "./Button";

const App = () => { 
    return(
        <>

        <CommentBox/>
        <Button/>

        </>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")

)