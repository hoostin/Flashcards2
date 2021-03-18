import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { readDeck } from "../utils/api";
//import { listDecks} from "./utils/api/index"

export default function BreadCrumb({ decks }) {
  const [deck, setDeck] = useState({});
  const { url, params, path } = useRouteMatch();
  const [error, setError] = useState(undefined);
  const subUrls = url.split(`/`);
  //console.log(useRouteMatch());
  console.log(path);
  let deckId;
  for (let param in params) {
    if (param === "deckId") {
      deckId = params[param];
    }
  }

  if (error) {
    console.log(error);
  }
  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck).catch(setError);
    return () => abortController.abort();
  }, []);
  const list = subUrls.map((aSubUrl, index) => {
    let className;
    if (index >= subUrls.length - 1) {
      className = "breadcrumb-item active";
      if (aSubUrl == deckId && deckId != "new") {
        return <li className={className}>{deck.name}</li>;
      }
      let value = "  ";
      switch (aSubUrl) {
        case "new":
          value = "Create Deck";
          break;
        case "study":
          value = "Study";
      }
      return <li className={className}>{value}</li>;
    } else {
      className = "breadcrumb-item";
    }
    if (aSubUrl != "decks" && aSubUrl != "") {
      if (aSubUrl == deckId) {
        return (
          <li className={className}>
            <Link to={`${aSubUrl}`}>{deck.name}</Link>
          </li>
        );
      }
    } else {
      if (aSubUrl == "") {
        return (
          <li className={className}>
            <Link to={`${aSubUrl}`} className="oi oi-home">
              Home
            </Link>
          </li>
        );
      }
    }
  });
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">{list}</ol>
    </nav>
  );
}

//   const [deckId, setDeckId] = useState(null);
//   const [error, setError] = useState(undefined);
//   const [test,setTest] = useState(true);
//   const url = useRouteMatch().url;
//   const subUrls = url.split(`/`);
//   const path = useRouteMatch().path;
//   const subPath = path.split(`/`);
// //   useEffect(() => {
// //     const abortController = new AbortController();
// //     readDeck(deckId,abortController.signal).then(setDeck).catch(setError);

// //     return () => abortController.abort();
// // }, [])
// // if(error){
// //   //  return <ErrorMessage error={error} />;
// //   console.log("very big bad");
// // }

//   const list = subUrls.map((aSubUrl, index) => {
//     let className;
//     // console.log(index)
//     // console.log(aSubUrl)
//     // console.log(subPath[index])
//    if(index >= (subUrls.length-1) ) {
//     className = "breadcrumb-item active";
//    } else{ className ="breadcrumb-item" ;}
//     if(aSubUrl != path[index])
//     {
//       if(subPath[index] ==`:deckId`)
//       {
//         console.log(aSubUrl)
//        // setDeckId(() => aSubUrl);
//     }
//     else if (aSubUrl != `decks`)
//     {
//       return <li className={className} >test</li>
//     }

//   }})
// //   console.log(url)
