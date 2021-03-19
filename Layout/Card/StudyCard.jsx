import React, { useEffect, useState } from "react";

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
          <button className="btn btn-primary ml-1 oi oi-arrow-right">
            Next
          </button>
          <button className="btn btn-primary ml-1 oi oi-arrow-up">Flip</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
