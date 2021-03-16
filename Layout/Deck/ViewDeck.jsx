import React, { useEffect, useState } from "react";
import CreateDeckButton from "./CreateDeckButton";
//import Header from "../Header";
//import NotFound from "../NotFound";
import {
  Link,
  NavLink,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import Deck from "./Deck";
import { listDecks} from "../../utils/api/index"

export default function ViewDeck({decks})
{
    return( <div>
        I like pancakes
    </div>)
}