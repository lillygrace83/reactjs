import React from "react";
import Faker from "faker";

function CommentBox() {
    return (
        <div className="ui cards">
            <div className="card">
                <div className="content">
                    <img className="right floated mini ui image" src={Faker.image.image()} />
                    <div className="header">
                        Jenny Lawrence
                    </div>
                    <div className="meta">
                        New User
                    </div>
                    <div className="description">
                        Jenny requested premission to view your contact details
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CommentBox;