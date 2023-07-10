import React, {useState} from "react";

/* functional (constructor) type component*/
function Ex3 (props){

     //const [state,handler] = usestate(intesnteal value)

    //state is internal varible ->state is pravite component

    const [x,setx] = useState(1)// muteble states

    const[title,setTitle] = useState("welcome to react")

    const[view,setVIew] = useState (false)

    const[user,setUsers] =  useState(['balu', 'siva','raju'])

    const [emp,setEmp] = useState({
        name : "balu",
        email: "balu@gmail.com",
        id: "12334"
    })


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-danger">useState (functional component)</h3>

                </div>
            </div>
            <div className="row">
            <div className="col-md-12">
                <h1 className="text-success">X ={x}</h1>
                <hr/>
                <h1 className="text-warning">{title}</h1>
                <hr/>

                <h4 className={view? "text-success": "text-danger"}>View = {view? "say True": "say False"}</h4>
                <hr/>

                <ul className="list-group">
                    {
                        user.map((item,index)=>{
                            return(
                                <li className="list-group-item" key={index}>{item}</li>
                            )
                        })
                    }
                </ul>

                <hr/>

                <div className="tect-info">email = {emp.email}, id= {emp.id} and name = {emp.name}</div>
            </div>
        </div>
        </div>
    )
}

export default Ex3