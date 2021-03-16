import React, { useEffect, useState } from "react";
import { listCards} from "../../utils/api/index"
import {
  Link,
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
//import { listDecks} from "../../utils/api/index"

export default function BreadCrumb({deck}){

    return (
        <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Home</li>
  </ol>
</nav>

    )

}