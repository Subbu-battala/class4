import React, { useReducer } from "react";

// intial state
const initState = { num: 0 };

// reducer
const mathReducer = (state,action) => {
    //console.log(`action =`. action)
    if(action === 'plus'){
        //plus reducer
        return {num: state.num + 1}
    }else if(action === 'minus'){
        //minus reducer
        if(state.num > 0){
            return {num: state.num -1}
        }else{
            return{num : 0 }
        }
    }else if(action === 'clear'){
        //clear reducer
        return {num: 0}
    }else{
        console.log(`sorry not a valid action`)
    }
}

function Ex11(props){
    //const [sate,dispatcher] = useReducer(reducer,intial-sate)
    const [state,dispatcher] = useReducer(mathReducer,initState)
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success">userReducer</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <button onClick={() => dispatcher('plus')}  className="btn btn-success float-start">Plus</button>
                    <button onClick={() => dispatcher('minus')}  className="btn btn-danger float-end">Minus</button>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 className="text-success display-1">State = {state.num} </h1>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <button onClick={() => dispatcher('clear')}  className="btn btn-warning">Clear</button>
                </div>
            </div>


        </div>
    )
}

export default Ex11