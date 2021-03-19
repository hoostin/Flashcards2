import React, { useEffect, useState } from "react";

export default function NextButton({
  flip,
  setFlip,
  length,
  cardNum,
  setCardNum,
}) {
  return (
    <button
      className="btn btn-primary ml-1 oi oi-arrow-thick-right"
      onClick={() => setCardNum(cardNum + 1)}
    >
      Next
    </button>
  );
}
