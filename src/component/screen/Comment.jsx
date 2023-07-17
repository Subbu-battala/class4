import React from "react";

function Comment(props){
    return(
         <div className="col-md-4 col-sm-6 col-lg-3">
            <div className="card mt-2 mb-2" style={{height:'300px'}}>
                <div className="card-header">
                    <h5 className="text-center"> {props.id} {props.name} </h5>
                </div>
                <div className="card-body">
                    <p className="text-secondary text-justify"> {props.body} </p>
                </div>
                <div className="card-footer">
                    <p className="text-success float-end">Post id = {props.postId} </p>
                </div>
            </div>

         </div>
    )
}

export default Comment