import React, {useState} from "react";

function Ex8(props){
    const [login,setLogin] = useState({
        user: "",
        pass:""
    })

    //set the value to state
    const readValue = (event) => {
        const {name, value} = event.target
        console.log(`name= ${name}`+`,value=${value}`)
        setLogin({...login, [name]: value})
    }

    const submitHandler = (event) => {
        event.preventDefault()
        console.log('login data =', login)
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h5 className="display-4 text-warning"> Form handling using state & onChange event </h5>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 offset-md--3">
                    <div className="card">
                        <div className="card-body">
                            <form autoComplete="off" onSubmit={submitHandler}>
                                <div className="formgroup mt-12">
                                    <label htmlFor="user">userName</label>
                                    <input type="text" name="user" value={login.user} id="user" onChange={readValue} className="form-control" required />
                                </div>
                                <div className="formgroup mt-12">
                                    <label htmlFor="pass">PAssword</label>
                                    <input type="password" name="pass" value={login.pass} onChange={readValue} id="pass" className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <input type="submit" value="Login"  className="btn btn-outline-success"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Ex8