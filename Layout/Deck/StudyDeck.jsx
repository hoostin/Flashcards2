import React, { useEffect, useState } from "react";
import BreadCrumb from "../BreadCrumb";

export default function StudyDeck({ decks }) {
  return <BreadCrumb decks={decks} />;
}
