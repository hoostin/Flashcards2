import React, { useEffect, useState } from "react";
//import Header from "../Header";
//import NotFound from "../NotFound";
import {
  Link,
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";


export default function Alert({test})
{
    return( <div className="container my-4">

    
    
  <div className="alert alert-success" role="alert">
  <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>Success! {test}</strong> You have been signed in successfully!
</div>
</div>)
}