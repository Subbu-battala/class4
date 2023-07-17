import React from "react";
import Ex1 from "./component/Ex1";
import Ex2 from "./component/Ex2";
import Ex3 from "./component/Ex3";
import Ex4 from "./component/Ex4";
import Ex5 from "./component/Ex5";
import Ex6 from "./component/Ex6";
import Ex7 from "./component/Ex7"
import Ex8 from "./component/Ex8";
import Ex9 from "./component/Ex9";

function App(props) {
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-success">Ract Hooks</h3>
          <Ex9 itemPerPage = {50} />
        </div>
      </div>

    </div>
  )
}

export default App