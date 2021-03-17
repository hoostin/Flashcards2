import React, { useEffect, useState } from "react";
import CreateDeckButton from "./CreateDeckButton";
import {
  Link,
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Deck from "./Deck";
import { listDecks} from "../../utils/api/index"

export default function DeckView({deck,url}) {
    return (
        <div className="card  border-0">
    <div className="card-body px-0">
    <div className="d-flex  justify-content-between ">
    <h5 className="card-title">{deck.name}</h5>
    
    </div>
    {/* <div class="card-text"> 
    </div> */}
    <p>{deck.description}</p>
    <Link to={`${url}`} className="btn btn-secondary mr-1 oi oi-pencil">Edit</Link>
    <Link to={`${url}/study`} className="btn btn-primary ml-1 oi oi-book">Study</Link>
     <Link to={`${url}/cards/new`} className="btn btn-primary ml-2 oi oi-plus">Add Cards</Link>
    <button className="btn btn-danger float-right oi oi-trash"></button>
    </div>
    </div>
    )
}