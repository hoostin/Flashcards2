import React, { useEffect, useState, useRef } from "react";
import {
  Link,
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
export default function CardView({ card: { id, front, back } }) {
  const url = useRouteMatch().url;
  return (
    <div className="card container">
      <div className="d-flex row ">
        <div className="col-6">
          <p>{front}</p>
        </div>
        <div className="col-6">
          <p>{back}</p>
        </div>
      </div>
      <div className=" float-right text-right">
        <Link to={`${url}`} className="btn btn-secondary ml-1 oi oi-pencil">
          Edit
        </Link>
        <button className="btn btn-danger float-right oi oi-trash ml-3"></button>
      </div>
    </div>
  );
}
