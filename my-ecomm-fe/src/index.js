import React from "react";
import ReactDOM from "react-dom/client";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./App";
import "./index.css";

var element = <button className="btn btn-danger">Hello World!</button>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NavBar />);
