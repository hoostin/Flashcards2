import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import { updateCard, createCard } from "../../utils/api";

export default function CardForm({ decks, setDecks, deck, setDeck, deckUrl }) {
  let decksTemp = decks;
  const deckTemp = deck;
  const [formData, setFormData] = useState({ front: "", back: "" });
  const history = useHistory();
  function handleChange({ target }) {
    setFormData(() => ({
      ...formData,
      [target.name]: target.value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    const abortController = new AbortController();
    createCard(deck.id, formData, abortController.signal)
      .then(setFormData)
      .then(() => {
        deckTemp.cards.push(formData);
        setDeck(deckTemp);
      })
      .then(() => {
        decksTemp = decksTemp.filter((theDeck) => theDeck.id != deck.id);
        decksTemp.push(deckTemp);
        setDecks(decksTemp);
        setFormData({ front: "", back: "" });
      });
  }
  return (
    <form name="createDeck" onSubmit={submitHandler}>
      <div className="front">
        <label htmlFor="front">Front</label>
        <textarea
          id="front"
          type="text"
          name="front"
          value={formData.front}
          placeholder="Front side of card"
          className="form-control"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="back">Back</label>
        <textarea
          id="back"
          type="text"
          name="back"
          value={formData.back}
          placeholder="Back Side of card"
          className="form-control"
          onChange={handleChange}
        ></textarea>
      </div>
      <Link className="btn btn-secondary mr-1" to={deckUrl}>
        Done
      </Link>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
