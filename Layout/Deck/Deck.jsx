import React, { useEffect, useState } from "react";
//import CreateDeckButton from "./CreateDeckButton";
//import Header from "../Header";
//import NotFound from "../NotFound";
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

export default function Deck({deck}){
const cardCount = deck.cards.length;

return (
<div className="card mb-3">
    <div className="card-body">
    <div className="d-flex  justify-content-between ">
    <h5 className="card-title">{deck.name}</h5>
        <small > {cardCount} cards</small>
    </div>
    {/* <div class="card-text"> 
    </div> */}
    <Link to={`/decks/${deck.id}`} className="btn btn-secondary mr-1">View</Link>
    <Link to={`/decks/${deck.id}/study`} className="btn btn-primary ml-1">Study</Link>
    <button className="btn btn-danger float-right">Delete</button>
    </div>
</div>)
}