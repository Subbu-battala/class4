import React, { memo } from "react";
import Ageinfo from './Ageinfo';

const AgeInfo = memo ((props) => {
   return(
    <div className="row">
        <div className="col-md-12">
            <h4 className="text-primary">Age Info</h4>
            <h5 className="text-success"> {props.info.result} </h5>
        </div>
    </div>
   )
})
    


export default AgeInfo