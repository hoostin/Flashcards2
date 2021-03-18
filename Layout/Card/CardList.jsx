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

import { listDecks} from "../../utils/api/index"
import Alert from "../Alert";

export default function CardList({deck}){
 // const [alert,setAlert] = useState(false);
  const [alertList,setList] = useState([]);
  let test = alertList;
  const index = test.length;
 function onClick(){
   // setAlert(!alert)
    test.push(<Alert key={index} test={index}/>)
  console.log(test)
      setList([ ...test])
    window.setTimeout(function() {
      test = alertList
      test.splice(index,1);
      setList([...test])
     }, 3000);
   }
  //   window.setTimeout(function() {
  //    setAlert(!alert);
  // }, 5000);
  
    return (
      // <div>pancake</div>
      <div>
      <button onClick={onClick} >test</button>
      {test}
      </div>
     
     
    )
}