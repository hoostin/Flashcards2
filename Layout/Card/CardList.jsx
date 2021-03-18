import React, { useEffect, useState, useRef } from "react";
//import Header from "../Header";
//import NotFound from "../NotFound";
// import {
//   Link,
//   NavLink,
//   Route,
//   Switch,
//   useParams,
//   useRouteMatch,
// } from "react-router-dom";

import { listCards } from "../../utils/api/index";
import Alert from "../Alert";
import CardView from "./CardView";

export default function CardList({ deck, deckId }) {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    listCards(deckId, abortController.signal)
      .then(setCards)
      .catch(console.log("bad magnitude 10"));

    return () => abortController.abort();
  }, []);
  const list = cards.map((card, index) => <CardView card={card} key={index} />);

  return (
    <div>
      <h2>Cards</h2>
      {list}
    </div>
  );
}
