import React, { useEffect, useState } from "react";
//import CreateDeckButton from "./CreateDeckButton";
//import Header from "../Header";
//import NotFound from "../NotFound";
import { listCards } from "../../utils/api/index";
import { Link } from "react-router-dom";
//import { listDecks} from "../../utils/api/index"

export default function Deck({ deck }) {
  let length = 0;
  if (deck.cards != undefined) {
    length = deck.cards.length;
  }
  const cardCount = length;

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex  justify-content-between ">
          <h5 className="card-title">{deck.name}</h5>
          <small> {cardCount} cards</small>
        </div>
        {/* <div class="card-text"> 
    </div> */}
        <Link
          to={`/decks/${deck.id}`}
          className="btn btn-secondary mr-1 oi oi-eye"
        >
          View
        </Link>
        <Link
          to={`/decks/${deck.id}/study`}
          className="btn btn-primary ml-1 oi oi-book"
        >
          Study
        </Link>
        <button className="btn btn-danger float-right oi oi-trash">
          Delete
        </button>
      </div>
    </div>
  );
}
