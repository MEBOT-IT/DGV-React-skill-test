import React from "react";
import Projectheader from "./Projectheader";
import Projectnavigationbar from "./Projectnavigationbar";
import Projectproductdetails from "./Projectproductdetails";
import Projectfooter from "./projectfooter";

function App1()
{
    return(
       <div>
        <div className="top">
        <Projectheader/>
        <Projectnavigationbar/></div>
        <Projectproductdetails/>
        <Projectfooter/>
       </div>
    )
    }
    
export default App1;