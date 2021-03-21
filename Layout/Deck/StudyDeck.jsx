import React, { useEffect, useState } from "react";
import BreadCrumb from "../BreadCrumb";
import StudyCard from "../Card/StudyCard";

export default function StudyDeck({ decks, deck }) {
  let cardAmount = 0;
  if (deck.cards != undefined) {
    cardAmount = deck.cards.length;
  } else {
    cardAmount = 0;
  }

  return (
    <div>
      <BreadCrumb decks={decks} />
      <h2> {deck.name}: Study</h2>

      {cardAmount > 2 ? (
        <StudyCard deck={deck} />
      ) : (
        <div>
          <h3>Not Enough Cards.</h3>
          <p>
            You need at least 3 cards to study. There are {cardAmount} cards in
            this deck
          </p>
        </div>
      )}
    </div>
  );
}
