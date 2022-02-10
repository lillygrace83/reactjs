// importing the dependencies
import React from "react";
import ReactDOM from "react-dom";
import Faker from 'faker';

function Comment(){
    
    return(

  <div className="ui comments">
  
  <div className="comment">
    <a className="avatar">
      <img src={Faker.image.image()}/>
    </a>
    <div className="content">
      <a className="author">lilly grace</a>
    </div>
  </div>
</div>
    )
}



ReactDOM.render(
    <>
    <Comment/><Comment/> 


    </>,
    document.getElementById("root")
);