import React, { useEffect, useState } from "react";
// import CreateDeckButton from "./CreateDeckButton";
import DeckView from "./DeckView";
//import Header from "../Header";
//import NotFound from "../NotFound";
import { Link, NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
// import Deck from "./Deck";
// import { listDecks} from "../../utils/api/index"
import BreadCrumb from "../BreadCrumb";
import { readDeck } from "../../utils/api";
import CardList from "../Card/CardList";
import StudyDeck from "./StudyDeck";
export default function ViewDeck({ decks }) {
  const [deck, setDeck] = useState({});
  const { path, url, params } = useRouteMatch();
  const [error, setError] = useState(undefined);
  const subUrls = url.split(`/`);
  let deckId;
  for (let param in params) {
    if (param === "deckId") {
      deckId = params[param];
    }
  }
  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck).catch(setError);

    return () => abortController.abort();
  }, []);
  console.log(url);
  return (
    <div>
      <Switch>
        <Route path={`${path}/study`}>
          <StudyDeck decks={decks} />
        </Route>
        <Route path={`${path}`}>
          <BreadCrumb decks={decks} />
          <DeckView deck={deck} url={url} />
          <CardList deck={deck} deckId={deckId} />
        </Route>
      </Switch>
    </div>
  );
}
