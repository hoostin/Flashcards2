import React, { useEffect, useState } from "react";
import DeckView from "./DeckView";
import { Link, NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import BreadCrumb from "../BreadCrumb";

export default function EditDeck({ decks }) {
  return (
    <div>
      <BreadCrumb decks={decks} />
      <h2>Edit Deck</h2>
    </div>
  );
}
