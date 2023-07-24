import React, { useMemo, useState } from "react";
import Age from "./screen/Age";
import Ageinfo from "./screen/Ageinfo";

/*
  useCallback => will return memorized value (state/props) of call back
  useMemo => will return memorized function (method) of call back
  */
function Ex10(props){
    const [age,setAge] = useState(20)

    const incAge = () => {
        setAge(age + 1)
    }

    const davidAge = useMemo( () => ({
        result : `David age is ${age} years.`
    }),[age])
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-warning">useMemo</h3>
                </div>
            </div>

            <Age age= {age} ageHandler = {incAge} />
            <Ageinfo info = {davidAge} />

        </div>
    )
}

export default Ex10