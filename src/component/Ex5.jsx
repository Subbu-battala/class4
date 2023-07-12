import React, {useEffect, useState} from "react";
import Post from "./screen/Post";

const URL = 'https://jsonplaceholder.typicode.com'


/* use effect => intial data, declared data or data accessing from API*/

// useEffect (callback function, [dependancy lists])
    /*
    React Functional Component lifecycle hooks
        Mount
           useEffect(() => {}, [])

        update -> state / props - dep
           useEffect(() => {}, [dep])

        unMount
            useEffect(() => {
                return () =>{
                    // un mount stage
                }
            }),[]
    */

function Ex5(props){
  const [post,setPost] = useState([])

    const getPosts = async () => {
        await fetch(`${URL}/posts`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(data => data.json())
           .then(res => {
               console.log('response =', res)
               setPost(res)
           }).catch(err => console.log(err))
    }

   useEffect(() => {
         getPosts() //async functional call
   },[])
    

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-6 text-danger">useEffect Hook</h3>
                </div>
            </div>

            <div className="row">
                {
                    post && post.map((item,index) => {
                        return(
                            <Post key={index} {...item} />
                        )
                    })
                }

            </div>

        </div>
    )
}


export default Ex5