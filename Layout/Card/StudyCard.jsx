import React, { useEffect, useState } from "react";
import NextButton from "./NextButton";

export default function StudyCard({ deck }) {
  const [cardNum, setCardNum] = useState(0);
  const [flip, setFlip] = useState(false);
  let content = "";
  //   const [content, setContent] = useState("");

  if (flip) {
    if (deck.cards != undefined) {
      content = deck.cards[cardNum].back;
    }
  } else {
    if (deck.cards != undefined) {
      content = deck.cards[cardNum].front;
    }
    // setContent("test");
    // return null;
  }
  if (deck.cards != undefined) {
    return (
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex  justify-content-between ">
            <h5 className="card-title">{`Card ${cardNum + 1} of ${
              deck.cards.length
            } `}</h5>
          </div>
          <p>{content}</p>
          <button
            className="btn btn-secondary ml-1 oi oi-arrow-thick-top"
            onClick={() => setFlip(!flip)}
          >
            Flip
          </button>
          <NextButton
            flip={flip}
            setFlip={setFlip}
            length={deck.cards.length}
            cardNum={cardNum}
            setCardNum={setCardNum}
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
