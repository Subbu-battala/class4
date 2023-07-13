import React, {useLayoutEffect, useState} from "react";

 //The signature is identical to useEffect, but it fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render.

 function Ex6(props){
    const [num, setNum] = useState(0)
    const [log, setLog] = useState([])

    const genNum = () => {
        let random = Math.round(Math.random() * 10000)
        setNum(random)
    }

    useLayoutEffect(() => {
        setLog(x => [...x, `effect has invoked ${num}`])
    },[num])


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success"> useLayoutEffect</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <button onClick={genNum} className="btn btn-success">Genarate RAndom</button>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <ul className="list-group">
                        {
                            log && log.map((item,index) => {
                                return(
                                    <li key={index} className="list-group-item">{item} </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>


        </div>
    )



 }

 export default Ex6