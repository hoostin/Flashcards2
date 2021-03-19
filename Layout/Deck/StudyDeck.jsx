import React, { useEffect, useState } from "react";
import BreadCrumb from "../BreadCrumb";
import StudyCard from "../Card/StudyCard";

export default function StudyDeck({ decks, deck }) {
  return (
    <div>
      <BreadCrumb decks={decks} />
      <StudyCard deck={deck} />
    </div>
  );
}
